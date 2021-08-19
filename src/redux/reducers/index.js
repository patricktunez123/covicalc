import { combineReducers } from "redux";
import { getCountries } from "./countriesReducers";

const reducers = combineReducers({
  Countries: getCountries,
});

export default reducers;
