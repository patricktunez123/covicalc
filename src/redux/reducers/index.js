import { combineReducers } from "redux";
import { getCountries } from "./countriesReducers";
import { getContinents } from "./continentReducers";

const reducers = combineReducers({
  Countries: getCountries,
  Continents: getContinents,
});

export default reducers;
