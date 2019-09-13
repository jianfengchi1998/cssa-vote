/*
 *
 * Screen reducer
 *
 */
import produce from 'immer';
import { SET_TOP_N } from './constants';

export const initialState = {
  topNSingers: [],
};

/* eslint-disable default-case, no-param-reassign */
const screenReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_TOP_N:
        draft.topNSingers = action.payload;
        break;
    }
  });

export default screenReducer;
