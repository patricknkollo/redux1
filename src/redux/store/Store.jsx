import { combineReducers, createStore } from "redux";
import { arbitreReducer } from "../reducer/ApiArbitresReducer";
import {
  buteursInitialState,
  fetchButeursReducer,
} from "../reducer/ApiButeursReducer";
import { fetchPaysReducer, paysInitialState } from "../reducer/ApiPaysReducer";
import { arbitresInitialState } from "../reducer/ApiArbitresReducer";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
  buteursRedux: fetchButeursReducer,
  paysRedux: fetchPaysReducer,
  arbitreRedux: arbitreReducer,
});

/* export const store1 = createStore(
  reducers,
  {
    buteursRedux: buteursInitialState,
    paysRedux: paysInitialState,
    arbitreRedux: arbitresInitialState,
  },

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 */
export const store = configureStore({
  reducer: fetchButeursReducer,
});
