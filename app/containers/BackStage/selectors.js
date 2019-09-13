import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the backStage state domain
 */

const selectBackStageDomain = state => state.backStage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BackStage
 */

const makeSelectBackStage = () =>
  createSelector(
    selectBackStageDomain,
    substate => substate,
  );
const makeSelectAllSingers = () =>
  createSelector(
    selectBackStageDomain,
    substate => substate.allSingers,
  );

export default makeSelectBackStage;
export { selectBackStageDomain, makeSelectAllSingers };
