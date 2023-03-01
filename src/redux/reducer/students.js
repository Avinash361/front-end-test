import { STUDENT_TABLE_SUCCESS, STUDENT_TABLE_FAIL } from "../action/type";


const initialState = {
    payload:[{
        "name": "Apple",
        "carbohydrates": "20",
        "protein": "3",
        "calories": "10",
        "fat": "20",
        "sugar": "15",
    },
    {
        "name": "Mango",
        "carbohydrates": "21",
        "protein": "4",
        "calories": "11",
        "fat": "21",
        "sugar": "16",
    },
    {
        "name": "Banana",
        "carbohydrates": "22",
        "protein": "35",
        "calories": "13",
        "fat": "23",
        "sugar": "35",
    },
    {
        "name": "Pineapple",
        "carbohydrates": "20",
        "protein": "32",
        "calories": "120",
        "fat": "10",
        "sugar": "5",
    },
    {
        "name": "Guava",
        "carbohydrates": "70",
        "protein": "13",
        "calories": "10",
        "fat": "20",
        "sugar": "15",
    },
    
 ]
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case STUDENT_TABLE_SUCCESS:
            return {
                ...state,
                payload,
            };
        case STUDENT_TABLE_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
}