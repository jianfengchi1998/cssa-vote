/**
 *
 * Screen
 *
 */

import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import GridLayout from 'react-grid-layout';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectScreen, { makeSelectTopN } from './selectors';
import SingerCard from '../../components/Card';
import qr from '../../images/qr-code.jpg';
import reducer from './reducer';
import saga from './saga';
import { getTopN } from './actions';
const io = require('socket.io-client');
const socket = io(`${window.location.hostname}:3000`);

const bss = io('/BackStage-Screen');
const QRCover = (
  <div
    style={{
      display: 'flex',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }}
  >
    <div style={{ width: '100%', height: '100%' }}>
      <Row type="flex" justify="space-around" align="middle">
        <h1>第三届巴村好声音</h1>
      </Row>
      <Row type="flex" justify="space-around" align="middle">
        <img width="50%" height="50%" src={qr} alt="" />
      </Row>
    </div>
  </div>
);
export function Screen({ getTopNSinger, TopNSingers }) {
  useInjectReducer({ key: 'screen', reducer });
  useInjectSaga({ key: 'screen', saga });
  const [qrCode, setQR] = useState(null);
  const [showResult, toggleResult] = useState(false);
  const [numAud, setNumAud] = useState(0);
  const [totalVote, setScore] = useState(0);
  useEffect(() => {
    bss.on('connect', socket => {
      console.log('BackStage-Screen connected');
    });
    bss.on('toggleResult', bool => {
      toggleResult(bool);
    });
    bss.on('topN', number => {
      getTopNSinger(number);
    });
  }, [toggleResult, getTopNSinger]);
  socket.on('numAudience', num => {
    console.log(num);
    setNumAud(num);
  });
  setInterval(() => {
    socket.emit('getNumAudience');
  }, 5000);
  // TopNSingers.map( singers)
  // const newTopSinger = ;
  const newTopSinger = TopNSingers.map(singer => {
    return {
      ...TopNSingers,
      totalVote: singer.judges * 0.25 + (numAud - singer.adVote) / numAud,
    };
  });
  console.log(newTopSinger);
  console.log(numAud);
  const Judges = (judges, adVote, totalVote) => (
    <Row type="flex" justify="space-between">
      <Col>
        <h3>评委票数</h3>
        <h2>{judges}</h2>
      </Col>
      <Col>
        <h3>总票数</h3>
        <h2>{totalVote}</h2>
      </Col>
      <Col>
        <h3>观众票数</h3>
        <h2>{adVote}</h2>
      </Col>
    </Row>
  );
  return showResult ? (
    <div>
      <Row type="flex" gutter={40} justify="space-around">
        {newTopSinger.map(singer => (
          <Col>
            <SingerCard
              {...singer}
              cardStyle={{ width: '85%', textAlign: 'center' }}
              nameStyle={{ fontSize: '40px' }}
              songStyle={{ fontSize: '20px' }}
              Componp={Judges(singer.judges, singer.adVote, singer.totalVote)}
            />
          </Col>
        ))}
      </Row>
    </div>
  ) : (
    QRCover
  );
  //   return (
  //     <Row type="flex" gutter={40} justify="space-between">
  //       {TopNSingers.map(singer => (
  //         <Col>
  //           <SingerCard
  //             {...singer}
  //             cardStyle={{
  //               display: 'flex',
  //               justifyContent: 'center',
  //               alignItems: 'center',
  //               width: '100%',
  //               height: '100%',
  //             }}
  //           />
  //         </Col>
  //       ))}
  //     </Row>
  //   );
}

Screen.propTypes = {};

const mapStateToProps = createStructuredSelector({
  screen: makeSelectScreen(),
  TopNSingers: makeSelectTopN(),
});

function mapDispatchToProps(dispatch) {
  return {
    getTopNSinger: num => {
      dispatch(getTopN(num));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Screen);
