import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { API_URL } from '../../constants';
import { GET_TOP_N } from './constants';
import { setTopN } from './actions';
const options = data => ({
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    Authorization: `bearer ${localStorage.getItem('token')}`,
  },
  body: JSON.stringify(data),
  credentials: 'omit',
});
export function* getTopN(action) {
  try {
    const response = yield call(
      request,
      `${API_URL}/getTopN`,
      options({ n: action.payload }),
    );

    yield put(setTopN(response));
  } catch (err) {
    console.log(err);
  }
}
// Individual exports for testing
export default function* screenSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_TOP_N, getTopN);
}
