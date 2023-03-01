import { STUDENT_TABLE_SUCCESS, STUDENT_SEARCH_SUCCESS } from "./type";
import userService from '../services/userService';
import { updateSpineer } from "./Spineer";
import { Diet } from "./Diet";
const food = [
    {
        "name": "Apple",
        "carbohydrates": "20",
        "protein": "3",
        "calories": "60",
        "fat": "20",
        "sugar": "15",
    },
    {
        "name": "Mango",
        "carbohydrates": "21",
        "protein": "4",
        "calories": "81",
        "fat": "21",
        "sugar": "16",
    },
    {
        "name": "Banana",
        "carbohydrates": "22",
        "protein": "35",
        "calories": "53",
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
        "calories": "110",
        "fat": "20",
        "sugar": "15",
    },

]
var removeByAttr = function (arr, attr, value) {
    var i = arr.length;
    while (i--) {
        if (arr[i]
            && arr[i].hasOwnProperty(attr)
            && (arguments.length > 2 && arr[i][attr] === value)) {

            arr.splice(i, 1);

        }
    }
    return arr;
}
export const getStudentsData = () => (dispatch) => {

    dispatch({
        type: STUDENT_TABLE_SUCCESS,
        payload: food,
    });
    return Promise.resolve();


};

export const AddData = (inputs) => (dispatch) => {
    food.push(inputs);
    dispatch({
        type: STUDENT_TABLE_SUCCESS,
        payload: food,
    });
}
export const DeleteData = (inputs) => (dispatch) => {
    removeByAttr(food, 'name', inputs.name);
    dispatch({
        type: STUDENT_TABLE_SUCCESS,
        payload: food,
    });
}

export const SearchData = (inputs) => (dispatch) => {
    console.log(inputs);
    // Diet.map((item) => {
    //     if (item.nutritions.calories >= inputs.calories)
    //         console.log(item);
    // })
    const result = [];

    // iterate over each object in the array
    for (let i = 0; i < Diet.length; i++) {
        const item = Diet[i];

        const diff = Math.abs(item.nutritions.carbohydrates- inputs.calories);
        const percentDiff = diff / inputs.calories * 100;
       
        // check if percentage difference is less than or equal to 5%
        if (percentDiff <= 5) {
            result.push(item);
        }
        dispatch({
            type: STUDENT_SEARCH_SUCCESS,
            payload: result,
        });
    }
   

}