/*
 *
 * BackStage reducer
 *
 */
import produce from 'immer';
import { GET_ALL_SINGERS, SET_ALL_SINGERS, START_VOTE } from './constants';

export const initialState = {
  allSingers: [],
};

/* eslint-disable default-case, no-param-reassign */
const backStageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ALL_SINGERS:
        break;
      case SET_ALL_SINGERS:
        draft.allSingers = action.payload;
        break;
    }
  });

export default backStageReducer;
