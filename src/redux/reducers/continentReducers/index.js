import { continentActionTypes } from "../../actionTypes";

const initialState = {
  loading: false,
  data: [],
  errorMessage: null,
};

export const getContinents = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case continentActionTypes.GET_CONTINENTS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case continentActionTypes.GET_CONTINENTS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        data: payload,
      };
    case continentActionTypes.GET_CONTINENTS_FAIL:
      return {
        ...prevState,
        loading: false,
        errorMessage: payload,
      };

    default:
      return prevState;
  }
};
