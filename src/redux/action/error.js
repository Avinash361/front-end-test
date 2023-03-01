import {
    ERROR_SUCCESS,
} from "./type";

export const foundError = (value) => (dispatch) => {
        dispatch({
          type: ERROR_SUCCESS,
          payload: value,
        });
        return Promise.resolve();
  };