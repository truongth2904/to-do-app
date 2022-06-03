import {MODAL_TYPE} from '../constant/modal.constant';

const initialState = {
  visible: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_TYPE.HANDLE:
      return {...state, visible: action.visible, id: null};
    case MODAL_TYPE.EDIT:
      return {...state, visible: action.visible, id: action.id};
    default:
      return state;
  }
};

export default modalReducer;
