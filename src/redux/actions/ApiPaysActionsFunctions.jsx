import { FETCHS_PAYS } from "./ApiActionsConstantes";

export const setPays = (payslist) => {
  return {
    type: FETCHS_PAYS,
    payload: payslist,
  };
};
