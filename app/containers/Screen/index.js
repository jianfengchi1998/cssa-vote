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
// import qr from '../../images/qrcode.jpg';
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
        <h1>https://lsucssa.org </h1>
      </Row>
      <Row type="flex" justify="space-around" align="middle">
        <img
          width="10%"
          height="10%"
          src="https://qrcode.tec-it.com/API/QRCode?data=http%3a%2f%2f167.96.3.54%3a3000&backcolor=%23ffffff"
          alt=""
        />
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
  // const newTopSinger = TopNSingers.map(singer => {
  //   return {
  //     ...TopNSingers,
  //     totalVote: singer.judges * 0.25 + (numAud - singer.adVote) / numAud,
  //   };
  // });
  // console.log(newTopSinger);
  console.log(TopNSingers);
  return showResult ? (
    <div>
      <Row type="flex" gutter={40} justify="space-between">
        {TopNSingers.map(singer => (
          <Col>
            <SingerCard
              data={singer}
              cardStyle={{ width: '75%', textAlign: 'center' }}
              nameStyle={{ fontSize: '40px' }}
              songStyle={{ fontSize: '20px' }}
              Componp={
                <Row type="flex" justify="space-between">
                  <Col>
                    <h3>评委票数</h3>
                    <h2>{singer.judges}</h2>
                  </Col>
                  <Col>
                    <h3>总票数</h3>
                    <h2>{singer.totalVote}</h2>
                  </Col>
                  <Col>
                    <h3>观众票数</h3>
                    <h2>{singer.numVote}</h2>
                  </Col>
                </Row>
              }
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
