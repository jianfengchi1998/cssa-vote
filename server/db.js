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
      allowNull: true,
    },
    totalVote: {
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
    photo: '../../images/王川.png',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    totalVote: 0,
    numVote: 0,
  },
  {
    name: '陈凤',
    photo: '../../images/陈凤.png',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    totalVote: 0,

    numVote: 0,
  },
  {
    name: 'Iris',
    photo: '../../images/Iris.png',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    totalVote: 0,

    numVote: 0,
  },
  {
    name: '王梓力',
    photo: '../../images/王梓力.png',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    totalVote: 0,

    numVote: 0,
  },
  {
    name: '李曾帅',
    photo: '../../images/李曾帅.png',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    totalVote: 0,

    numVote: 0,
  },
  {
    name: '张大江',
    photo: '../../images/张大江.png',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    totalVote: 0,

    numVote: 0,
  },
  {
    name: 'Laura',
    photo: '../../images/Laura.png',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    totalVote: 0,

    numVote: 0,
  },
  {
    name: '喜羊羊与灰太狼',
    photo: '../../images/喜羊羊与灰太狼.png',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    totalVote: 0,

    numVote: 0,
  },
];

const SongList = sequelize.define('songs', {
  // attributes
  singer: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
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

Singer.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  singers.map(singer => {
    return Singer.create(singer);
  });
});
SongList.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  songlist.map(singer => {
    return SongList.create(singer);
  });
});
module.exports = { sequelize, Singer, SongList };
