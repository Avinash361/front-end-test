import { ERROR_SUCCESS } from "../action/type";

const initialState = { flag:false, type:"Error", message:"There is Some Error !" }

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ERROR_SUCCESS:
            return {
                ...state,
                flag: payload.value,
                type:payload.type,
                message:payload.message,
            };

        default:
            return state;
    }
}