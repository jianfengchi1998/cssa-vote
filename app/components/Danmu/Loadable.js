/**
 *
 * Asynchronously loads the component for Danmu
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
