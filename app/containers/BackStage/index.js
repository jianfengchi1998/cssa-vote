/**
 *
 * BackStage
 *
 */

import React, { useEffect } from 'react';
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
const socket = io(`${window.location.hostname}:3000`);
const bsu = io('/BackStage-User');

const { Option } = Select;

export function BackStage({
  allSingers,
  getAllSingers,
  getSinger,
  setSinger2User,
  setVote,
}) {
  useInjectReducer({ key: 'backStage', reducer });
  useInjectSaga({ key: 'backStage', saga });

  useEffect(() => {
    bsu.on('connect', socket => {
      console.log('BackStage-User connected');
    });
    socket.on('connect', () => {
      getAllSingers();
    });
  }, []);
  // bsu.on('connect', socket => {
  //   console.log('BackStage-User connected');
  // });
  // socket.on('connect', () => {
  //   getAllSingers();
  // });
  const handleChange = value => {
    console.log(value);
    bsu.emit('getCurrentSinger', value);
    // getSinger(value);
  };
  function onChange(checked) {
    console.log(`switch to ${checked}`);
    bsu.emit('allowVote', checked);
  }
  function onChangeTopResult(checked) {
    console.log(`switch to ${checked}`);
    // bsu.emit('allowVote', checked);
  }
  function onChangeTopN(value) {
    console.log('changed', value);
  }
  return (
    <div>
      <Row>
        <h1>User Screen Control</h1>
      </Row>
      <Row>
        <h2>Project to User</h2>
        <Select
          defaultValue=""
          allowClear
          style={{ width: 300 }}
          onChange={handleChange}
        >
          {allSingers.map(singer => {
            return <Option value={singer.name}>{singer.name}</Option>;
          })}
        </Select>
      </Row>
      <Row>
        <h2>Vote Switch</h2>
        <Switch
          checkedChildren="开"
          unCheckedChildren="关"
          onChange={onChange}
        />
      </Row>
      <Divider />
      <Row>
        <h1>Screen Control</h1>
      </Row>
      <Row>
        <h2>Result Switch</h2>
        <Switch
          checkedChildren="开"
          unCheckedChildren="关"
          onChange={onChangeTopResult}
        />
      </Row>
      <Row>
        <h2>Top N Singer</h2>
        <InputNumber min={1} max={8} onChange={onChangeTopN} />
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
