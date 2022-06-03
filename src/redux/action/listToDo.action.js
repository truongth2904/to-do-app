import {LIST_TYPE} from '../constant/listToDo.constant';

// search
export const listToDoSearch = (payload, onSuccess, onFailure) => ({
  type: LIST_TYPE.SEARCH_HANDLE,
  payload,
  onSuccess,
  onFailure,
});
export const listToDoSearchSuccess = payload => ({
  type: LIST_TYPE.SEARCH_SUCCESS,
  payload,
});
export const listToDoSearchFailure = payload => ({
  type: LIST_TYPE.SEARCH_FAILURE,
  payload,
});

// get
export const listToDoGet = (payload, onSuccess, onFailure) => ({
  type: LIST_TYPE.GET_HANDLE,
  payload,
  onSuccess,
  onFailure,
});
export const listToDoGetSuccess = payload => ({
  type: LIST_TYPE.GET_SUCCESS,
  payload,
});
export const listToDoGetFailure = payload => ({
  type: LIST_TYPE.GET_FAILURE,
  payload,
});

// edit
export const listToDoEdit = (payload, onSuccess, onFailure) => ({
  type: LIST_TYPE.EDIT_HANDLE,
  payload,
  onSuccess,
  onFailure,
});
export const listToDoEditSuccess = payload => ({
  type: LIST_TYPE.EDIT_SUCCESS,
  payload,
});
export const listToDoEditFailure = payload => ({
  type: LIST_TYPE.EDIT_FAILURE,
  payload,
});

// add
export const listToDoAdd = (payload, onSuccess, onFailure) => ({
  type: LIST_TYPE.ADD_HANDLE,
  payload,
  onSuccess,
  onFailure,
});
export const listToDoAddSuccess = payload => ({
  type: LIST_TYPE.ADD_SUCCESS,
  payload,
});
export const listToDoAddFailure = payload => ({
  type: LIST_TYPE.ADD_FAILURE,
  payload,
});

// delete
export const listToDoDelete = (payload, onSuccess, onFailure) => ({
  type: LIST_TYPE.DELETE_HANDLE,
  payload,
  onSuccess,
  onFailure,
});
export const listToDoDeleteSuccess = payload => ({
  type: LIST_TYPE.DELETE_SUCCESS,
  payload,
});
export const listToDoDeleteFailure = payload => ({
  type: LIST_TYPE.DELETE_FAILURE,
  payload,
});
// delete all
export const listToDoDeleteAll = (payload, onSuccess, onFailure) => ({
  type: LIST_TYPE.DELETE_ALL_HANDLE,
  payload,
  onSuccess,
  onFailure,
});
export const listToDoDeleteAllSuccess = payload => ({
  type: LIST_TYPE.DELETE_ALL_SUCCESS,
  payload,
});
export const listToDoDeleteAllFailure = payload => ({
  type: LIST_TYPE.DELETE_ALL_FAILURE,
  payload,
});
