import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the screen state domain
 */

const selectScreenDomain = state => state.screen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Screen
 */

const makeSelectScreen = () =>
  createSelector(
    selectScreenDomain,
    substate => substate,
  );
const makeSelectTopN = () =>
  createSelector(
    selectScreenDomain,
    substate => substate.topNSingers,
  );

export default makeSelectScreen;
export { selectScreenDomain, makeSelectTopN };
