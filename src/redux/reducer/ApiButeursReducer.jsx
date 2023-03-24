import { ADD_BUTEUR, FETCH_BUTEURS } from "../actions/ApiActionsConstantes";

export const buteursInitialState = {
  buteurs: [],
  joueurs: [],
  arrayQlcq: [
    { name: "cedric", age: 27 },
    { name: "patrick", age: 33 },
  ],
};

export const fetchButeursReducer = (state = buteursInitialState, action) => {
  switch (action.type) {
    case FETCH_BUTEURS:
      return { ...state, buteurs: action.payload };

    case ADD_BUTEUR:
      return state.buteurs.push(action.payload);

    default:
      return state;
  }
};
