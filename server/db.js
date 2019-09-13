const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
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
  },
  {
    // options
  },
);
const singers = [
  {
    name: '王川',
    photo: '../photos/wang_chuan.png',
    description: '巴村 村花',
    songName: '山歌',

    numVote: 0,
  },
  {
    name: '陈凤',
    photo: '../photos/陈凤.png',
    description: '巴村 村花',
    songName: '山歌',

    numVote: 0,
  },
  {
    name: 'Iris',
    photo: '../photos/陈凤.png',
    description: '巴村 村花',
    songName: '山歌',

    numVote: 0,
  },
  {
    name: '王梓力',
    photo: '../photos/王梓力.png',
    description: '巴村 村花',
    songName: '山歌',

    numVote: 0,
  },
  {
    name: '李曾帅',
    photo: '../photos/李曾帅.png',
    description: '巴村 村花',
    songName: '山歌',

    numVote: 0,
  },
  {
    name: '张大江',
    photo: '../photos/张大江.png',
    description: '巴村 村花',
    songName: '山歌',

    numVote: 0,
  },
  {
    name: 'Laura',
    photo: '../photos/Laura.png',
    description: '巴村 村花',
    songName: '山歌',

    numVote: 0,
  },
  {
    name: '喜羊羊与灰太狼',
    photo: '../photos/Laura.png',
    description: '巴村 村花',
    songName: '山歌',

    numVote: 0,
  },
];

// Singer.sync({ force: true }).then(() => {
//   // Now the `users` table in the database corresponds to the model definition
//   singers.map(singer => {
//     return Singer.create(singer);
//   });
// });
module.exports = { sequelize, Singer };
