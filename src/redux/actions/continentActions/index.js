import { continentActionTypes } from "../../actionTypes";
import request from "../../../helpers/api";

export const getContinents = () => async (dispatch) => {
  try {
    dispatch({
      type: continentActionTypes.GET_CONTINENTS_REQUEST,
    });

    const continents = await request.get("/continents?yesterday=true");

    dispatch({
      type: continentActionTypes.GET_CONTINENTS_SUCCESS,
      payload: continents?.data,
    });
  } catch (error) {
    dispatch({
      type: continentActionTypes.GET_CONTINENTS_FAIL,
      payload: error,
    });
  }
};
