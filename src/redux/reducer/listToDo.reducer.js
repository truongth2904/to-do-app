import {LIST_TYPE} from '../constant/listToDo.constant';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
const initialState = {
  listToDo: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_TYPE.GET_HANDLE:
      return {...state};
    case LIST_TYPE.GET_SUCCESS:
      return {...state, listToDo: action?.payload};
    case LIST_TYPE.GET_FAILURE:
      return {...state};

    case LIST_TYPE.SEARCH_HANDLE:
      return {...state};
    case LIST_TYPE.SEARCH_SUCCESS:
      return {...state, listToDo: action?.payload};
    case LIST_TYPE.SEARCH_FAILURE:
      return {...state};

    case LIST_TYPE.DELETE_HANDLE:
      return {...state};
    case LIST_TYPE.DELETE_SUCCESS:
      return {...state, listToDo: action?.payload};
    case LIST_TYPE.DELETE_FAILURE:
      return {...state};

    case LIST_TYPE.ADD_HANDLE:
      return {...state};
    case LIST_TYPE.ADD_SUCCESS:
      return {...state, listToDo: action?.payload};
    case LIST_TYPE.ADD_FAILURE:
      return {...state};

    case LIST_TYPE.EDIT_HANDLE:
      return {...state};
    case LIST_TYPE.EDIT_SUCCESS:
      return {...state, listToDo: action?.payload};
    case LIST_TYPE.EDIT_FAILURE:
      return {...state};

    case LIST_TYPE.DELETE_ALL_HANDLE:
      return {...state};
    case LIST_TYPE.DELETE_ALL_SUCCESS:
      return {...state, listToDo: action?.payload};
    case LIST_TYPE.DELETE_ALL_FAILURE:
      return {...state};

    default:
      return state;
  }
};

export default listReducer;
