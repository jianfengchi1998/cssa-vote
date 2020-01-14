const Sequelize = require('sequelize');
const data = require('./data.js');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false,
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const Singer = sequelize.define(
  'singer',
  {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    photo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    songName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    numVote: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    judges: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    currentSinger: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  },
  {
    // options
  },
);

const SongList = sequelize.define('songs', {
  // attributes
  singer: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  songName1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  songName2: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  songName3: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Singer.hasOne(SongList);

const songlist = [
  {
    singer: 'Iris',
    songName1: '人生的歌',
    songName2: '那女孩对我说',
    songName3: '我要快乐',
  },
  {
    singer: '喜羊羊与灰太狼',
    songName1: '孤身',
    songName2: '不搭',
    songName3: '理想三旬',
  },
  { singer: '王梓力', songName1: '套路', songName2: '奴隶', songName3: '玩家' },
  {
    singer: '王川',
    songName1: '我怀念的',
    songName2: '白羊',
    songName3: '我怀念的',
  },
  {
    singer: '张大江',
    songName1: '成都',
    songName2: '刚好遇见你',
    songName3: '勇气',
  },
  {
    singer: '陈凤',
    songName1: '不为谁而作的歌',
    songName2: '缘分一道桥',
    songName3: '你要的爱',
  },
  {
    singer: '你曾帅',
    songName1: '其实都没有',
    songName2: '趁早',
    songName3: '水星记',
  },
];

// Singer.sync({ force: true }).then(() => {
//   // Now the `users` table in the database corresponds to the model definition
//   data.map(singer => {
//     return Singer.create(singer);
//   });
// });
// SongList.sync({ force: true }).then(() => {
//   // Now the `users` table in the database corresponds to the model definition
//   songlist.map(singer => {
//     return SongList.create(singer);
//   });
// });
module.exports = { sequelize, Singer, SongList };
