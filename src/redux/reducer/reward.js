import { REWARD_SUCCESS, REWARD_FAIL } from "../action/type";


const initialState = {}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REWARD_SUCCESS:
            return {
                ...state,
                payload,
            };
        case REWARD_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
}