import { FETCH_BUTEURS } from "./ApiActionsConstantes";

export const setButeurs = (buteurs) => {
  return {
    type: FETCH_BUTEURS,
    payload: buteurs,
  };
};
