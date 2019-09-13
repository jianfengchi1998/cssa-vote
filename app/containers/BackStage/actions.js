/*
 *
 * BackStage actions
 *
 */

import {
  GET_ALL_SINGERS,
  GET_SINGER,
  SET_ALL_SINGERS,
  START_VOTE,
} from './constants';

export function startAllSingers() {
  return {
    type: GET_ALL_SINGERS,
  };
}
export function setAllSingers(data) {
  return {
    type: SET_ALL_SINGERS,
    payload: data,
  };
}
