import { SCHEDULE_TYPE_SUCCESS, SCHEDULE_TYPE_FAIL } from "../action/type";

const initialState =  {} 
export default function (state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
        case SCHEDULE_TYPE_SUCCESS:
            return {
                ...state,
               payload
            };
        case SCHEDULE_TYPE_FAIL:
            return {
                ...state
            }
        default:
            return state;
    }
}