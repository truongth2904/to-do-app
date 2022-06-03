import AsyncStorage from '@react-native-async-storage/async-storage';
import {call, fork, put, takeLatest, delay} from 'redux-saga/effects';
import {
  listToDoGetSuccess,
  listToDoSearchSuccess,
  listToDoAddSuccess,
  listToDoEditSuccess,
  listToDoDeleteSuccess,
  listToDoDeleteAllSuccess,
} from '../action/listToDo.action';
import {LIST_TYPE} from '../constant/listToDo.constant';

export function* addSaga(action) {
  try {
    yield delay(1000);
    let listToDoString = yield call(AsyncStorage.getItem, 'LIST_TO_DO');
    let listToDo = JSON.parse(listToDoString) || [];
    if (!listToDo) {
      yield AsyncStorage.setItem(
        'LIST_TO_DO',
        JSON.stringify([action.payload]),
      );
      yield put(listToDoAddSuccess(listToDo));
    } else {
      listToDo.push(action.payload);
      yield AsyncStorage.setItem('LIST_TO_DO', JSON.stringify(listToDo));
      yield put(listToDoAddSuccess(listToDo));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* editSaga(action) {
  const {payload} = action;
  try {
    let listToDoString = yield call(AsyncStorage.getItem, 'LIST_TO_DO');
    let listToDo = JSON.parse(listToDoString);
    objIndex = listToDo.findIndex(obj => obj.key == payload.key);
    listToDo[objIndex] = payload;
    yield AsyncStorage.setItem('LIST_TO_DO', JSON.stringify(listToDo));
    yield put(listToDoEditSuccess(listToDo));
  } catch (err) {
    console.log(err);
  }
}

export function* deleteSaga(action) {
  try {
    yield delay(1000);
    let listToDoString = yield call(AsyncStorage.getItem, 'LIST_TO_DO');
    const newList = JSON.parse(listToDoString).filter(
      t => t.key !== action.payload,
    );
    yield AsyncStorage.setItem('LIST_TO_DO', JSON.stringify(newList));
    yield put(listToDoDeleteSuccess(newList));
  } catch (err) {
    console.log(err);
  }
}

export function* deleteAllSaga() {
  try {
    yield delay(1000);
    yield AsyncStorage.removeItem('LIST_TO_DO');
    yield put(listToDoDeleteAllSuccess([]));
  } catch (err) {
    console.log(err);
  }
}

export function* searchSaga(action) {
  try {
    const result = yield call(AsyncStorage.getItem, 'LIST_TO_DO');
    const listToDo = JSON.parse(result).filter(element => {
      return element.title.includes(action.payload);
    });
    yield put(listToDoSearchSuccess(listToDo));
  } catch (err) {
    console.log('error: ', err);
  }
}

export function* getSaga() {
  try {
    yield delay(1000);
    const listToDo = yield call(AsyncStorage.getItem, 'LIST_TO_DO');
    console.log({listToDo});
    const result = JSON.parse(listToDo);
    console.log({result});
    yield put(listToDoGetSuccess(result));
  } catch (err) {
    console.log('error: ', err);
  }
}

function* watchUser() {
  yield takeLatest(LIST_TYPE.ADD_HANDLE, addSaga);
  yield takeLatest(LIST_TYPE.SEARCH_HANDLE, searchSaga);
  yield takeLatest(LIST_TYPE.GET_HANDLE, getSaga);
  yield takeLatest(LIST_TYPE.EDIT_HANDLE, editSaga);
  yield takeLatest(LIST_TYPE.DELETE_HANDLE, deleteSaga);
  yield takeLatest(LIST_TYPE.DELETE_ALL_HANDLE, deleteAllSaga);
}

export default function* rootChild() {
  yield fork(watchUser);
}
