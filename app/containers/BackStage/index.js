/**
 *
 * BackStage
 *
 */

import React, { useEffect, useState } from 'react';
import { Row, Col, Divider, Select, Switch, InputNumber } from 'antd';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBackStage, {
  makeSelectAllSingers,
  makeSelectSingerInUser,
} from './selectors';

import reducer from './reducer';
import saga from './saga';
import { startAllSingers, setSingerInUser, getSinger } from './actions';
import { startVote } from '../User/actions';
const io = require('socket.io-client');
const socket = io(`${window.location.hostname}`);
const bsu = io('/BackStage-User');
const bss = io('/BackStage-Screen');

const { Option } = Select;
const shortid = require('shortid');

export function BackStage({
  allSingers,
  getAllSingers,
  getSinger,
  setSinger2User,
  setVote,
}) {
  useInjectReducer({ key: 'backStage', reducer });
  useInjectSaga({ key: 'backStage', saga });
  const [numAud, setNumAud] = useState(0);
  useEffect(() => {
    bsu.on('connect', socket => {
      console.log('BackStage-User connected');
    });
    bss.on('reset', () => {
      onChangeTopResult(false);
    });
    socket.on('connect', () => {
      getAllSingers();
    });

    socket.on('numAudience', num => {
      setNumAud(num);
    });
  }, [numAud, setNumAud]);
  setInterval(() => {
    socket.emit('getNumAudience');
  }, 5000);
  // bsu.on('connect', socket => {
  //   console.log('BackStage-User connected');
  // });
  // socket.on('connect', () => {
  //   getAllSingers();
  // });
  const handleChange = value => {
    console.log(value);
    bsu.emit('SendToUser', value);
    // getSinger(value);
  };
  function onChange(checked) {
    console.log(`switch to ${checked}`);
    bsu.emit('allowVote', checked);
  }
  function onChangeTopResult(checked) {
    console.log(`switch to ${checked}`);
    bss.emit('showResult', checked);
  }
  function onChangeTopN(value) {
    console.log('changed', value);
    bss.emit('getTopN', value);
  }
  return (
    <div>
      <Row>
        <h1>用户控制面板</h1>
      </Row>
      <Row>
        <h2>投射给用户</h2>
        <Select
          defaultValue=""
          allowClear
          style={{ width: 300 }}
          onChange={handleChange}
        >
          {allSingers.map(singer => (
            <Option key={shortid.generate()} value={singer.name}>
              {singer.name}
            </Option>
          ))}
        </Select>
      </Row>
      <Row>
        <h2>投票开关</h2>
        <Switch
          checkedChildren="开"
          unCheckedChildren="关"
          onChange={onChange}
        />
      </Row>
      <Divider />
      <Row>
        <h1>大屏幕控制</h1>
      </Row>
      <Row>
        <h2>前N名表演者</h2>
        <InputNumber min={1} max={8} onChange={onChangeTopN} />
      </Row>
      <Row>
        <h2>结果开关</h2>
        <Switch
          checkedChildren="开"
          unCheckedChildren="关"
          onChange={onChangeTopResult}
        />
      </Row>
      <Divider />
      <Row>
        <h1>连接数</h1>
        <h3>{numAud}</h3>
      </Row>
    </div>
  );
}

BackStage.propTypes = {
  getAllSingers: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  backStage: makeSelectBackStage(),
  allSingers: makeSelectAllSingers(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAllSingers: () => {
      dispatch(startAllSingers());
    },
    setVote: () => {
      dispatch(startVote());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(BackStage);
