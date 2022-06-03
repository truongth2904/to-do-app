import {MODAL_TYPE} from '../constant/modal.constant';

export const modalHandle = payload => {
  if (payload.id) {
    return {
      type: MODAL_TYPE.EDIT,
      visible: payload.visible,
      id: payload.id,
    };
  } else {
    return {
      type: MODAL_TYPE.HANDLE,
      visible: payload.visible,
    };
  }
};
