import { STUDENT_TABLE_SUCCESS, STUDENT_TABLE_FAIL,STUDENT_SEARCH_SUCCESS } from "../action/type";


const initialState = {
    data: [{
        "name": "Apple",
        "carbohydrates": "10",
        "protein": "3",
        "calories": "10",
        "fat": "20",
        "sugar": "15",
    },
    {
        "name": "Mango",
        "carbohydrates": "11",
        "protein": "4",
        "calories": "11",
        "fat": "21",
        "sugar": "16",
    },
    {
        "name": "Banana",
        "carbohydrates": "7",
        "protein": "35",
        "calories": "13",
        "fat": "23",
        "sugar": "35",
    },
    {
        "name": "Pineapple",
        "carbohydrates": "5",
        "protein": "32",
        "calories": "120",
        "fat": "10",
        "sugar": "5",
    },
    {
        "name": "Guava",
        "carbohydrates": "15",
        "protein": "13",
        "calories": "10",
        "fat": "20",
        "sugar": "15",
    },

    ],
    swapfood:[],
}

export default function (state = initialState, action) {
    const { type, payload } = action;
   
    switch (type) {
        case STUDENT_TABLE_SUCCESS:
            return {
                ...state,
                data:payload,
            };
        case STUDENT_SEARCH_SUCCESS:
            return {
                ...state,
                swapfood:payload,
            };
        case STUDENT_TABLE_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
}