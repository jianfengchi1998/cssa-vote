/*
 *
 * User actions
 *
 */

import {
  GET_SINGER,
  GET_SINGER_FAIL,
  SET_SINGER_IN_USER,
  SET_LIKE,
  SET_DISLIKE,
  START_VOTE,
} from './constants';

export function getSinger(data) {
  return {
    type: GET_SINGER,
    payload: data,
  };
}
export function getSingerFail() {
  return {
    type: GET_SINGER_FAIL,
  };
}
export function setSingerInUser(data) {
  return {
    type: SET_SINGER_IN_USER,
    payload: data,
  };
}
export function setLike(data) {
  return {
    type: SET_LIKE,
    payload: data,
  };
}
export function setDisLike(data) {
  return {
    type: SET_DISLIKE,
    payload: data,
  };
}
export function startVote() {
  return {
    type: START_VOTE,
  };
}
