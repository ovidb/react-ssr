import { takeEvery, call, put, select } from 'redux-saga/effects';
import * as api from '../api';
import { FETCH_USERS } from '../actions/constants';
import { receiveUsers } from '../actions';

export function* fetchUsers() {
  try {
    const users = yield call(api.getUsers);
    console.log(users);
    yield put(receiveUsers(users));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_USERS, fetchUsers);
}
