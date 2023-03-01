import { SPINEER_SUCCESS } from "../action/type";

const initialState = { value:false }

export default function (state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
        case SPINEER_SUCCESS:
            return {
                ...state,
                value: payload,
            };

        default:
            return state;
    }
}