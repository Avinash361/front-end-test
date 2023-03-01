import { OPTION_SUCCESS, OPTION_FAIL } from "../action/type";

const initialState = { value:"Board" }

export default function (state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
        case OPTION_SUCCESS:
            return {
                ...state,
                value: payload,
            };
        case OPTION_FAIL:
            return {
                ...state,
                value: null,
            };
        default:
            return state;
    }
}