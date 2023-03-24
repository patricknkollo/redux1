import { ADD_ARBITRE } from "./ApiActionsConstantes";

export const addArbitres = (arbitre) => {
  return {
    type: ADD_ARBITRE,
    payload: arbitre,
  };
};
