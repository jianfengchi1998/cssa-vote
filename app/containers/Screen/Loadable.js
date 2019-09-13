/**
 *
 * Asynchronously loads the component for Screen
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
