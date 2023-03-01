import { OPTION_SUCCESS } from "./type";

export const getOption = (options) => (dispatch) => {
    dispatch({
        type: OPTION_SUCCESS,
        payload: options,
    });
    return Promise.resolve();
}

