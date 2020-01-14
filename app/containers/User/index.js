import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Input, Row, Col, message, Button } from 'antd';
import Barrage from 'barrage-ui';
import example from 'barrage-ui/example.json'; // 组件提供的示例数据

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import SingerCard from '../../components/Card';
import Danmu from '../../components/Danmu';
import reducer from './reducer';
import saga from './saga';
import { makeSelectSingerInUser, makeSelectAllowVote } from './selectors';
import { getSinger, setLike, setDisLike, getCurrentSinger } from './actions';
import shortid from 'shortid';

const io = require('socket.io-client');
const jwt = require('jsonwebtoken');

const InputGroup = Input.Group;

const bsu = io('/BackStage-User');
export function User({
  CurrentSinger,
  fetchSinger,
  getCurrentSinger,
  toggleLikethis,
  toggleDisLikethis,
  getCurrentSing,
}) {
  useInjectReducer({ key: 'user', reducer });
  useInjectSaga({ key: 'user', saga });

  const [singerName, setName] = useState('');
  const [performer, setPerformer] = useState({});
  const [isLike, toggleLike] = useState(false);
  const [allowVote, toggleAllowVote] = useState(false);
  const cardRef = React.createRef();

  const [inputs, setInputs] = useState(null);
  const [bullet, setBullet] = useState({});
  const colors = ['#f00', '#0f0', '#ff0', '#fff', '#fff', '#fff', '#fff'];
  const randomColor = () => colors[Math.floor(6 * Math.random())];
  let barrage = null;

  // useEffect(() => {
  //   fetchSinger(localStorage.getItem('name'));
  // }, [localStorage.getItem('name')]);
  useEffect(() => {
    bsu.on('connect', socket => {
      console.log('BackStage-User connected');
      bsu.emit('Get current performer');
    });
    bsu.on('Current performer', p => {
      console.log(`Current performer: ${p}`);
      if (p.name) {
        localStorage.setItem('name', p.name);
      }
      setPerformer(p);
    });
    // 加载弹幕
    barrage = new Barrage({
      container: ReactDOM.findDOMNode(cardRef.current), // 父级容器
      // data: example, // 弹幕数据
      config: {
        // 全局配置项
        duration: 20000, // 弹幕循环周期(单位：毫秒)
        defaultColor: '#fff', // 弹幕默认颜色
        avoidOverlap: true,
      },
    });

    if (bullet.text !== undefined) {
      const isSuccess = barrage.add(bullet);
      if (!isSuccess) {
        message.warn('太多弹幕了! 稍微等等');
      }
    }

    barrage.play();
  }, [bullet]);

  bsu.on('fetch current singer', singer => {
    console.log('fetched current performer');
    toggleLike(false);
    // fetchSinger(name);
    localStorage.setItem('name', singer.name);
    setPerformer(singer);
  });
  bsu.on('toggleAllow', isAllow => {
    toggleAllowVote(isAllow);
  });
  bsu.on('broadcastBullet', bulletData => {
    setBullet(bulletData);
    console.log(bulletData);
  });
  const vote = () => {
    toggleLike(!isLike);
    return isLike ? toggleDisLikethis(singerName) : toggleLikethis(singerName);
  };
  // 弹幕内容输入事件处理
  const handleChange = ({ target: { value } }) => {
    setInputs(value);
  };
  const sendBarrage = () => {
    if (inputs !== '') {
      setBullet({
        key: shortid.generate(), // 弹幕的唯一标识
        time: 1000, // 弹幕出现的时间(单位：毫秒)
        text: inputs, // 弹幕文本内容
        fontSize: 24, // 该条弹幕的字号大小(单位：像素)，会覆盖全局设置
        color: randomColor(), // 该条弹幕的颜色，会覆盖全局设置
        createdAt: new Date().toLocaleTimeString(),
      });
      bsu.emit('saveBullet', bullet);
      setInputs('');
    }
  };

  return (
    <Row
      type="flex"
      align
      justify="center"
      style={{ height: window.innerHeight, width: window.innerWidth }}
    >
      <Col
        style={{ margin: '10px', border: '2px' }}
        sm={{ witdh: '70%' }}
        xs={{ width: '100%' }}
      >
        <SingerCard
          ref={cardRef}
          {...performer}
          isLike={isLike}
          iconType="heart"
          voteClick={() => (allowVote ? vote() : null)}
        />
        <InputGroup compact>
          <Input
            size="large"
            value={inputs}
            onChange={handleChange}
            onPressEnter={sendBarrage}
            addonAfter={<a onClick={sendBarrage}>发送弹幕</a>}
          />
        </InputGroup>
      </Col>
    </Row>
  );
}

User.propTypes = {};

const mapStateToProps = createStructuredSelector({
  CurrentSinger: makeSelectSingerInUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchSinger: name => {
      dispatch(getSinger(name));
    },
    getCurrentSing: () => {
      dispatch(getCurrentSinger());
    },
    toggleLikethis: name => {
      dispatch(setLike(name));
    },
    toggleDisLikethis: name => {
      dispatch(setDisLike(name));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(User);
