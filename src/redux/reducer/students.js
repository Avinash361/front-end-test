import { CURRENT_DIET_SUCCESS, GET_CURRENT_DIET_SUCCESS, SWAP_FOOD_SUCCESS } from "../action/type";
import { Diet } from "../action/Diet";

const initialState = {
    allDiets: Diet,
    currentDiets: [],
    swapfood: [],
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_CURRENT_DIET_SUCCESS:
            return {
                ...state,
                currentDiets: payload
            }
        case CURRENT_DIET_SUCCESS:
            localStorage.setItem("currentDiets", JSON.stringify(payload));
            return {
                ...state,
            };
        case SWAP_FOOD_SUCCESS:
            return {
                ...state,
                swapfood: payload,
            };

        default:
            return state;
    }
}