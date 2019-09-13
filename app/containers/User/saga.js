import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { API_URL } from '../../constants';
import { GET_SINGER, SET_LIKE, SET_DISLIKE } from './constants';
import { setSingerInUser, getSingerFail } from './actions';
const options = data => ({
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    Authorization: `bearer ${localStorage.getItem('token')}`,
  },
  body: JSON.stringify(data),
  credentials: 'omit',
});
export function* requestSinger(action) {
  try {
    const response = yield call(
      request,
      `${API_URL}/getSinger`,
      options({ name: action.payload }),
    );

    yield put(setSingerInUser(response));
  } catch (err) {
    yield put(getSingerFail());
    console.log(err);
  }
}
export function* toggleLike(action) {
  try {
    const response = yield call(
      request,
      `${API_URL}/like`,
      options({ name: action.payload }),
    );

    yield put(setSingerInUser(response));
  } catch (err) {
    console.log(err);
  }
}
export function* toggleDisLike(action) {
  try {
    const response = yield call(
      request,
      `${API_URL}/dislike`,
      options({ name: action.payload }),
    );

    yield put(setSingerInUser(response));
  } catch (err) {
    console.log(err);
  }
}
// Individual exports for testing
export default function* userSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_SINGER, requestSinger);
  yield takeLatest(SET_LIKE, toggleLike);
  yield takeLatest(SET_DISLIKE, toggleDisLike);
}
