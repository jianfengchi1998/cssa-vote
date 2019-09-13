/**
 *
 * Screen
 *
 */

import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getTopN } from './actions';
import { findByLabelText } from 'react-testing-library';
const io = require('socket.io-client');
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
    <div>
      <Row type="flex" justify="space-around" align="middle">
        <h1>Mid Automn Festival</h1>
      </Row>
      <Row type="flex" justify="space-around" align="middle">
        <img
          src="https://chart.googleapis.com/chart?cht=qr&chl=lsucssa.org%2Fvote&chs=180x180&choe=UTF-8&chld=L|2"
          alt=""
        />
      </Row>
    </div>
  </div>
);
export function Screen({ getTopN }) {
  useInjectReducer({ key: 'screen', reducer });
  useInjectSaga({ key: 'screen', saga });
  const [qrCode, setQR] = useState(null);
  const [showResult, toggleResult] = useState(null);
  useEffect(() => {
    bss.on('connect', socket => {
      console.log('BackStage-User connected');

    });
  }, []);
  bss.on('toggleResult', bool =>{
    toggleResult(bool)
  })
  return showResult?(): QRCover;
}

Screen.propTypes = {};

const mapStateToProps = createStructuredSelector({
  screen: makeSelectScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    getTopN: num => {
      dispatch(getTopN(num));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Screen);
