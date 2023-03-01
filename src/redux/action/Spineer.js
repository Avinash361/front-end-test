import {
    SPINEER_SUCCESS,
} from "./type";

export const updateSpineer = (value) => (dispatch) => {
        dispatch({
          type: SPINEER_SUCCESS,
          payload: value,
        });
        return Promise.resolve();
  };

