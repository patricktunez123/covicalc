import { continentActionTypes } from "../../actionTypes";
import request from "../../../helpers/api";

/**
 * A function to get all continents and their stats
 * @author Patrick TUNEZERWANE
 * @since Sun, August 22, 2021
 */

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
