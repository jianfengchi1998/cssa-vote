const singers = [
  {
    performer: '王川',
    // photo: '',
    description: '巴村 村花',
    title: '红灯笼',
    performed: false,
    numVote: 0,
  },
  {
    performer: '陈凤',
    // photo: '',
    description: '巴村 村花',
    title: '中国骄傲',
    performed: false,
    numVote: 0,
  },
  {
    performer: 'Iris',
    // photo: '',
    description: '巴村 村花',
    title: '赶圩归来阿里里',
    performed: false,
    numVote: 0,
  },
  {
    performer: '王梓力',
    // photo: 'images/王梓力.png',
    description: '巴村 村花',
    title: '我是不是你最疼爱的人',
    performed: false,
    numVote: 0,
  },
  {
    performer: '李曾帅',
    // photo: 'images/李曾帅.png',
    description: '巴村 村花',
    title: '猫鼠之夜',
    performed: false,
    numVote: 0,
  },
  {
    performer: '张大江',
    // photo: 'images/张大江.png',
    description: '巴村 村花',
    title: '美丽的神话',

    performed: false,
    numVote: 0,
  },
  {
    performer: 'Laura',
    // photo: 'images/Laura.png',
    description: '巴村 村花',
    title: '火车驶向云外，梦安魂于九霄',

    performed: false,
    numVote: 0,
  },
  {
    performer: 'Rua',
    // photo: 'images/Rua.png',
    description: '巴村 村花',
    title: '月狐吟',

    performed: false,
    numVote: 0,
  },
  {
    performer: '1',
    // photo: 'images/Rua.png',
    description: '巴村 村花',
    title: 'HID',

    performed: false,
    numVote: 0,
  },
  {
    performer: '2',
    // photo: 'images/Rua.png',
    description: '巴村 村花',
    title: '你的答案',

    performed: false,
    numVote: 0,
  },
  {
    performer: '3',
    // photo: 'images/Rua.png',
    description: '巴村 村花',
    title: '美丽的古丽',

    performed: false,
    numVote: 0,
  },
  {
    performer: '4',
    // photo: 'images/Rua.png',
    description: '巴村 村花',
    title: '桃夭',

    performed: false,
    numVote: 0,
  },
  {
    performer: '5',
    // photo: 'images/Rua.png',
    description: '巴村 村花',
    title: '悟空喜得金箍棒',

    performed: false,
    numVote: 0,
  },
  {
    performer: '6',
    // photo: 'images/Rua.png',
    description: '巴村 村花',
    title: '喜新恋旧',

    performed: false,
    numVote: 0,
  },
  {
    performer: '7',
    // photo: 'images/Rua.png',
    description: '巴村 村花',
    title: '月亮代表我的心',

    performed: false,
    numVote: 0,
  },
  {
    performer: '8',
    // photo: 'images/Rua.png',
    description: '巴村 村花',
    title: '雪山春晓',

    performed: false,
    numVote: 0,
  },
  {
    performer: '9',
    // photo: 'images/Rua.png',
    description: '巴村 村花',
    title: '行云流水',

    performed: false,
    numVote: 0,
  },
];
// fs.readdir(path.join(process.cwd(), 'server/images'), (err, files) => {
//   files.forEach(file => {
//     const fperformer = file.split('.')[0];
//     singers.find(singer => {
//       if (singer.performer === fperformer) {
//         singer.// photo = Buffer.from(
//           fs.readFileSync(path.join(process.cwd(), 'server/images', file)),
//         ).toString('base64');
//         return true;
//       }
//     });
//   });
// });

module.exports = singers;
