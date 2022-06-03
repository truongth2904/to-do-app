import {combineReducers} from 'redux';
import modalReducer from './modal.reducer';
import listReducer from './listToDo.reducer';
import loadingReducer from './loading.reducer';

const rootReducer = combineReducers({
  modalReducer,
  listReducer,
  loading: loadingReducer,
});

export default rootReducer;
