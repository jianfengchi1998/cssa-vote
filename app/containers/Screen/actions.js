/*
 *
 * Screen actions
 *
 */

import { GET_TOP_N, SET_TOP_N } from './constants';

export function getTopN(n) {
  return {
    type: GET_TOP_N,
    payload: n,
  };
}
export function setTopN(data) {
  return {
    type: SET_TOP_N,
    payload: data,
  };
}
