/*
 *
 * User reducer
 *
 */
import produce from 'immer';
import { SET_SINGER_IN_USER, GET_SINGER_FAIL, START_VOTE } from './constants';

export const initialState = { singerInUser: {}, allowVote: false };

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_SINGER_IN_USER:
        draft.singerInUser = action.payload;
        break;
      case GET_SINGER_FAIL:
        localStorage.removeItem('name');
        break;
      case START_VOTE:
        draft.allowVote = !state.allowVote;
        break;
    }
  });

export default userReducer;
