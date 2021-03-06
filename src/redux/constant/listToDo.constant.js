const LIST_ACTION = 'LIST';
const LIST_ACTION_GET = 'GET';
const LIST_ACTION_SEARCH = 'SEARCH';
const LIST_ACTION_EDIT = 'EDIT';
const LIST_ACTION_DELETE = 'DELETE';
const LIST_ACTION_DELETE_ALL = 'DELETE_ALL';
const LIST_ACTION_ADD = 'ADD';

const LIST_TYPE = {
  GET_HANDLE: `${LIST_ACTION_GET}_HANDLE`,
  GET_SUCCESS: `${LIST_ACTION_GET}_SUCCESS`,
  GET_FAILURE: `${LIST_ACTION_GET}_FAILURE`,

  SEARCH_HANDLE: `${LIST_ACTION_SEARCH}_HANDLE`,
  SEARCH_SUCCESS: `${LIST_ACTION_SEARCH}_SUCCESS`,
  SEARCH_FAILURE: `${LIST_ACTION_SEARCH}_FAILURE`,

  EDIT_HANDLE: `${LIST_ACTION_EDIT}_HANDLE`,
  EDIT_SUCCESS: `${LIST_ACTION_EDIT}_SUCCESS`,
  EDIT_FAILURE: `${LIST_ACTION_EDIT}_FAILURE`,

  DELETE_HANDLE: `${LIST_ACTION_DELETE}_HANDLE`,
  DELETE_SUCCESS: `${LIST_ACTION_DELETE}_SUCCESS`,
  DELETE_FAILURE: `${LIST_ACTION_DELETE}_FAILURE`,

  ADD_HANDLE: `${LIST_ACTION_ADD}_HANDLE`,
  ADD_SUCCESS: `${LIST_ACTION_ADD}_SUCCESS`,
  ADD_FAILURE: `${LIST_ACTION_ADD}_FAILURE`,

  DELETE_ALL_HANDLE: `${LIST_ACTION_DELETE_ALL}_HANDLE`,
  DELETE_ALL_SUCCESS: `${LIST_ACTION_DELETE_ALL}_SUCCESS`,
  DELETE_ALL_FAILURE: `${LIST_ACTION_DELETE_ALL}_FAILURE`,
};

export {LIST_TYPE};
