import {all, fork} from 'redux-saga/effects';
import listTodoSaga from './listTodoSaga';

export default function* rootSaga() {
  yield all([fork(listTodoSaga)]);
}
