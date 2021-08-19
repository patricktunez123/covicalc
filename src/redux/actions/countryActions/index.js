import { countryActionTypes } from "../../actionTypes";
import request from "../../../helpers/api";

export const getCountries = () => async (dispatch) => {
  try {
    dispatch({
      type: countryActionTypes.GET_COUNTRIES_REQUEST,
    });

    const countries = await request.get("/countries?yesterday&sort");
    dispatch({
      type: countryActionTypes.GET_COUNTRIES_SUCCESS,
      payload: countries?.data,
    });
  } catch (error) {
    dispatch({
      type: countryActionTypes.GET_COUNTRIES_FAIL,
      payload: error,
    });
  }
};

export const getCountry = (query) => async (dispatch) => {
  try {
    dispatch({
      type: countryActionTypes.GET_COUNTRY_REQUEST,
    });

    const country = await request.get(`/countries/${query}`);
    dispatch({
      type: countryActionTypes.GET_COUNTRY_SUCCESS,
      payload: country?.data,
    });
  } catch (error) {
    dispatch({
      type: countryActionTypes.GET_COUNTRY_FAIL,
      payload: error,
    });
  }
};
