import { takeLatest, call, put, select } from 'redux-saga/effects';
import { GET_ALL_SINGERS, GET_SINGER, SET_SINGER_IN_USER } from './constants';
import request from '../../utils/request';
import { API_URL } from '../../constants';
import { setAllSingers, setSingerInUser } from './actions';
// Individual exports for testing
const options = data => ({
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    Authorization: `bearer ${localStorage.getItem('token')}`,
  },
  body: JSON.stringify(data),
  credentials: 'omit',
});
export function* requestAllSinger(action) {
  try {
    const response = yield call(request, `${API_URL}/getAllSingers`, options);

    yield put(setAllSingers(response));
  } catch (err) {
    console.log(err);
  }
}


export default function* backStageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_ALL_SINGERS, requestAllSinger);
}
