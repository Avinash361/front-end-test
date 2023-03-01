import { STUDENT_TABLE_FAIL, CURRENT_DIET_SUCCESS, SWAP_FOOD_SUCCESS } from "../action/type";
import { Diet } from "../action/Diet";

const initialState = {
    allDiets: Diet,
    currentDiets: [],
    swapfood: [],
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CURRENT_DIET_SUCCESS:
            return {
                ...state,
                currentDiets: payload,
            };
        case SWAP_FOOD_SUCCESS:
            return {
                ...state,
                swapfood: payload,
            };
        case STUDENT_TABLE_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
}