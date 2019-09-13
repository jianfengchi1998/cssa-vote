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
import { getSinger, setLike, setDisLike, getCurrentSinger } from './actions';
const io = require('socket.io-client');
const axios = require('axios').default;
var jwt = require('jsonwebtoken');

const bsu = io('/BackStage-User');

export function User({
  CurrentSinger,
  getSingerlocal,
  getCurrentSinger,
  toggleLikethis,
  toggleDisLikethis,
  getCurrentSing,
}) {
  useInjectReducer({ key: 'user', reducer });
  useInjectSaga({ key: 'user', saga });

  const [singerName, setName] = useState('');
  const [isLike, toggleLike] = useState(false);
  const [allowVote, toggleAllowVote] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      jwt.sign(
        'valid',
        'cssa',
        { algorithm: 'RS256', expiresIn: '1d' },
        (err, token) => {
          localStorage.setItem('token', token);
        },
      );
    }
    getSingerlocal(localStorage.getItem('name'));
    // getCurrentSing();
  }, [getSingerlocal]);
  bsu.on('connect', socket => {
    console.log('BackStage-User connected');
    bsu.emit('getCurrentSinger');
  });
  bsu.on('fetch current singer', name => {
    toggleLike(false);
    getSingerlocal(name);
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
    getSingerlocal: name => {
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
