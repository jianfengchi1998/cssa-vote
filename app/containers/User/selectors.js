import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the user state domain
 */

const selectUserDomain = state => state.user || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by User
 */

const makeSelectUser = () =>
  createSelector(
    selectUserDomain,
    substate => substate,
  );
const makeSelectSingerInUser = () =>
  createSelector(
    selectUserDomain,
    substate => substate.singerInUser,
  );
const makeSelectAllowVote = () =>
  createSelector(
    selectUserDomain,
    substate => substate.allowVote,
  );

export default makeSelectUser;
export { selectUserDomain, makeSelectSingerInUser, makeSelectAllowVote };
