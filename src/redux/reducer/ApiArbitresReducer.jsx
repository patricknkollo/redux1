import { ADD_ARBITRE, FETCH_ARBITRES } from "../actions/ApiActionsConstantes";

export const arbitresInitialState = {
  arbitres: [],
  arbitre: {
    id: 0,
    nom: "",
    prenom: "",
    personid: 0,
  },
};

export const arbitreReducer = (state = arbitresInitialState, action) => {
  switch (action.type) {
    case FETCH_ARBITRES:
      return { ...state, arbitres: action.payload };

    case ADD_ARBITRE:
      return state.arbitres.push(action.payload);

    default:
      return state;
  }
};
