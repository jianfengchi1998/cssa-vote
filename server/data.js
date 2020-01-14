const fs = require('fs');
const path = require('path');
const singers = [
  {
    name: '王川',
    photo: '',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    currentSinger: false,
    numVote: 0,
  },
  {
    name: '陈凤',
    photo: '',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    currentSinger: false,
    numVote: 0,
  },
  {
    name: 'Iris',
    photo: '',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    currentSinger: false,
    numVote: 0,
  },
  {
    name: '王梓力',
    photo: '../../images/王梓力.png',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    currentSinger: false,
    numVote: 0,
  },
  {
    name: '李曾帅',
    photo: '../../images/李曾帅.png',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    currentSinger: false,
    numVote: 0,
  },
  {
    name: '张大江',
    photo: '../../images/张大江.png',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    currentSinger: false,
    numVote: 0,
  },
  {
    name: 'Laura',
    photo: '../../images/Laura.png',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    currentSinger: false,
    numVote: 0,
  },
  {
    name: 'Rua',
    photo: '../../images/Rua.png',
    description: '巴村 村花',
    songName: '山歌',
    judges: 0,
    currentSinger: false,
    numVote: 0,
  },
];
fs.readdir(path.join(process.cwd(), 'server/images'), (err, files) => {
  files.forEach(file => {
    const fName = file.split('.')[0];
    singers.find(singer => {
      if (singer.name === fName) {
        singer.photo = Buffer.from(
          fs.readFileSync(path.join(process.cwd(), 'server/images', file)),
        ).toString('base64');
        return true;
      }
    });
  });
});

module.exports = singers;
