/**
 *
 * Asynchronously loads the component for BackStage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
