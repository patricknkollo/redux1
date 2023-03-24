import { FETCHS_PAYS } from "../actions/ApiActionsConstantes";

export const paysInitialState = {
  pays: [],
};

export const fetchPaysReducer = (state = paysInitialState, action) => {
  switch (action.type) {
    case FETCHS_PAYS:
      return { ...state, pays: action.payload };

    default:
      return state;
  }
};
