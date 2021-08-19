import { countryActionTypes } from "../../actionTypes";

const initialState = {
  loading: false,
  data: [],
  errorMessage: null,
};

export const getCountries = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case countryActionTypes.GET_COUNTRIES_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case countryActionTypes.GET_COUNTRIES_SUCCESS:
      return {
        ...prevState,
        loading: false,
        data: payload,
      };
    case countryActionTypes.GET_COUNTRIES_FAIL:
      return {
        ...prevState,
        loading: false,
        errorMessage: payload,
      };

    default:
      return prevState;
  }
};

export const getCountry = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case countryActionTypes.GET_COUNTRY_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case countryActionTypes.GET_COUNTRY_SUCCESS:
      return {
        ...prevState,
        loading: false,
        data: payload,
      };
    case countryActionTypes.GET_COUNTRY_FAIL:
      return {
        ...prevState,
        loading: false,
        errorMessage: payload,
      };

    default:
      return prevState;
  }
};
