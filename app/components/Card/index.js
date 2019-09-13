/**
 *
 * Card
 *
 */

import React from 'react';
import { Card, Icon, Row } from 'antd';
// import Laura from '../../images/Laura.png';
// import 张大江 from '../../images/张大江.png';
// import 李曾帅 from '../../images/李曾帅.png';
// import 王川 from '../../images/王川.png';
// import 王梓力 from '../../images/王梓力.png';
// import 陈凤 from '../../images/陈凤.png';
// import Iris from '../../images/Iris.png';
// import 喜羊羊与灰太狼 from '../../images/喜羊羊与灰太狼.png';
import Laura from '../../images/Laura.jpg';
import 张大江 from '../../images/张大江.jpg';
import 李曾帅 from '../../images/李曾帅.jpg';
import 王川 from '../../images/王川.jpg';
import 王梓力 from '../../images/王梓力.jpg';
import 陈凤 from '../../images/陈凤.jpg';
import Iris from '../../images/Iris.jpg';
import 喜羊羊与灰太狼 from '../../images/喜羊羊与灰太狼.jpg';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
const { Meta } = Card;

function SingerCard({
  photo,
  name,
  description,
  cardStyle,
  isLike,
  songName,
  voteClick,
  iconType,
  numVote,
  nameStyle,
  songStyle,
  Componp,
  judges,
}) {
  const images = {
    Laura,
    张大江,
    李曾帅,
    王川,
    王梓力,
    陈凤,
    Iris,
    喜羊羊与灰太狼,
  };
  return (
    <>
      <Card style={cardStyle} cover={<img alt="geshou" src={images[name]} />}>
        <Row>
          <h1 style={nameStyle}>{name}</h1>
        </Row>
        <Row>
          <h2 style={songStyle}>{songName}</h2>
        </Row>
        {/* <h1>{numVote}</h1> */}
        {Componp ? Componp(judges, numVote) : null}
        <Icon
          style={{ fontSize: '50px', color: 'red' }}
          theme={isLike ? 'filled' : 'outlined'}
          onClick={voteClick}
          type={iconType}
        />
      </Card>
    </>
  );
}

SingerCard.propTypes = {};
SingerCard.defaultProps = {
  //   name: '村花',
  //   photo: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  //   description: '巴村 村花',
  //   songName: '山歌',
  cardStyle: { width: '100%', textAlign: 'center' },
  //   isLike: false,
  //   iconType: 'like',
};

export default SingerCard;
