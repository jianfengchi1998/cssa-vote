/* eslint consistent-return:0 import/order:0 */
const express = require('express');
const logger = require('./logger');
const Sequelize = require('sequelize');
const path = require('path');
const bodyParser = require('body-parser');

const { sequelize, Singer } = require('./db');
const {Op} = Sequelize;

const cors = require('cors');
const jwt = require('jsonwebtoken');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';

const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(cors());
app.use(bodyParser.json());
// setup(app, {
//   outputPath: resolve(process.cwd(), 'build'),
//   publicPath: '/',
// });
// app.get(
//   '/.well-known/pki-validation/2F35B0F915909EF74251D661221658FD.txt',
//   function(req, res) {
//     res.sendFile('./2F35B0F915909EF74251D661221658FD.txt', {
//       root: __dirname,
//     });
//   },
// );

// app.get('/', function(req, res) {
//   res.render(path.join(process.cwd(), '/build/index.html'));
// });

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
app.post('/getSinger', (req, res) => {
  Singer.findOne({
    where: {performer: req.body.performer},
    attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
  })
    .then(singer => {
      if (singer) {
        singer
          .update(
            {
              performed: true,
            },
            { where: { _id: singer.id } },
          )
          .then(() => res.status(200).json(singer))
          .catch(() => res.status(404));
      }
    })
    .catch(err => console.log(err));
});

app.post('/getCurrentSinger', (req, res) => {
  Singer.findOne({
    where: {performed: true},
    attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
  })
    .then(singer => {
      if (singer) {
        return res.status(200).json(singer);
      }
    })
    .catch(err => console.log(err));
});

app.get('/getAllSingers', (req, res) => {
  Singer.findAll().then(singers => {
    if (singers) {
      return res.status(200).json(singers);
    }
  });
});
app.post('/getTopN', (req, res) => {
  Singer.findAll({
    order: [['numVote', 'DESC']],
    limit: req.body.n,
  }).then(singers => {
    if (singers) {
      return res.status(200).json(singers);
    }
  });
});

app.post('/like', (req, res) => {
  sequelize
    .transaction(t => {
      // chain all your queries here. make sure you return them.
      Singer.findOne(
        {
          where: {performer: req.body.performer},
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
        { transaction: t },
      ).then(singer => {
        if (singer) {
          singer
            .increment(
              'numVote',
              {where: {performer: req.body.performer}},
              { transaction: t },
            )
            .then(data => {
              data.reload().then(() => {
                console.log('in');
                return res.status(200).json(data);
              });
            });
        }
      });
    })
    .then(result => {
      // console.log(result);
      // Transaction has been committed
      // result is whatever the result of the promise chain returned to the transaction callback
    })
    .catch(err => {
      // console.log(err);
      // Transaction has been rolled back
      // err is whatever rejected the promise chain returned to the transaction callback
    });
});
app.post('/dislike', (req, res) => {
  sequelize
    .transaction(t => {
      // chain all your queries here. make sure you return them.
      Singer.findOne(
        {
          where: {performer: req.body.performer},
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
        { transaction: t },
      ).then(singer => {
        if (singer) {
          singer
            .decrement(
              'numVote',
              {where: {performer: req.body.performer}},
              { transaction: t },
            )
            .then(data => {
              data.reload().then(() => res.status(200).json(data));
            });
        }
      });
    })
    .then(result => {
      // console.log(result);
      // Transaction has been committed
      // result is whatever the result of the promise chain returned to the transaction callback
    })
    .catch(err => {
      // console.log(err);
      // Transaction has been rolled back
      // err is whatever rejected the promise chain returned to the transaction callback
    });
});
app.get('/getToken', (req, res) => {
  jwt.sign(
    'valid',
    'cssa',
    { algorithm: 'RS256', expiresIn: '1d' },
    (err, token) => res.send(token),
  );
});

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

const bsu = io.of('/BackStage-User');
bsu.on('connection', socket => {
  console.log('User connected');
  socket.on('SendToUser', performer => {
    Singer.findOne({
      where: {performer},
      attributes: {exclude: ['createdAt', 'updatedAt']},
    })
      .then(singer => {
        if (singer) {
          singer
            .update(
              {
                performed: true,
              },
              {where: {performer: singer.performer}},
            )
            .then(() => {
              Singer.update(
                {
                  performed: false,
                },
                {where: {performer: {[Op.ne]: singer.performer}}},
              ).then(() => {
                console.log('updated');
                socket.broadcast.emit('fetch current singer', singer);
              });
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => console.log(err));
  });
  socket.on('Get current performer', () => {
    console.log('first time enter');
    Singer.findOne({
      where: {performed: true},
      attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
    })
      .then(singer => {
        if (singer) {
          socket.emit('Current performer', singer);
        }
      })
      .catch(err => console.log(err));
  });
  socket.on('saveBullet', bullet => {
    socket.broadcast.emit('broadcastBullet', bullet);
  });
  // socket.on('allowVote', isAllow => {
  //   socket.broadcast.emit('toggleAllow', isAllow);
  // });
});

const bss = io.of('/BackStage-Screen');
bss.on('connection', socket => {
  console.log('BackStage-Screen connected');
  socket.on('showResult', bool => {
    socket.broadcast.emit('toggleResult', bool);
  });
  socket.on('getTopN', number => {
    socket.broadcast.emit('topN', number);
  });
});

io.on('connect', socket => {
  console.log('a user connected');
  socket.on('getNumAudience', () => {
    socket.emit('numAudience', io.engine.clientsCount);
  });
  socket.on('disconnect', function() {
    Singer.findOne({
      where: {performed: true},
      attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
    })
      .then(singer => {
        if (singer) {
          singer
            .update(
              {
                performed: false,
              },
              { where: { _id: singer.id } },
            )
            .then(() => {
              console.log('Back Stage disconnect from the server');
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => console.log(err));
    console.log('user disconnected');
  });
});
// Start your app.
http.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
