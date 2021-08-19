import { combineReducers } from "redux";
import { getCountries, getCountry } from "./countryReducers";
import { getContinents } from "./continentReducers";

const reducers = combineReducers({
  Countries: getCountries,
  Country: getCountry,
  Continents: getContinents,
});

export default reducers;
