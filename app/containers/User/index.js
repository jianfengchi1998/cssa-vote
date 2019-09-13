/**
 *
 * User
 *
 */

import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import SingerCard from '../../components/Card';
import reducer from './reducer';
import saga from './saga';
import { makeSelectSingerInUser, makeSelectAllowVote } from './selectors';
import { getSinger, setLike, setDisLike } from './actions';
const io = require('socket.io-client');

const bsu = io('/BackStage-User');

export function User({
  CurrentSinger,
  getCurrentSinger,
  toggleLikethis,
  toggleDisLikethis,
}) {
  useInjectReducer({ key: 'user', reducer });
  useInjectSaga({ key: 'user', saga });

  const [singerName, setName] = useState('');
  const [isLike, toggleLike] = useState(false);
  const [allowVote, toggleAllowVote] = useState(false);
  useEffect(() => {
    getCurrentSinger(localStorage.getItem('name'));
  }, []);
  bsu.on('connect', socket => {
    console.log('BackStage-User connected');
  });
  bsu.on('fetch current singer', name => {
    toggleLike(false);
    getCurrentSinger(name);
    localStorage.setItem('name', name);
    setName(name);
  });
  bsu.on('toggleAllow', isAllow => {
    toggleAllowVote(isAllow);
  });
  const vote = () => {
    toggleLike(!isLike);
    return isLike ? toggleDisLikethis(singerName) : toggleLikethis(singerName);
  };

  console.log(allowVote);
  return (
    <SingerCard
      {...CurrentSinger}
      isLike={isLike}
      iconType="like"
      voteClick={() => (allowVote ? vote() : null)}
    />
  );
}

User.propTypes = {};

const mapStateToProps = createStructuredSelector({
  CurrentSinger: makeSelectSingerInUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    getCurrentSinger: name => {
      dispatch(getSinger(name));
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
