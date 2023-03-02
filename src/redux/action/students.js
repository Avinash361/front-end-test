import { CURRENT_DIET_SUCCESS, GET_CURRENT_DIET_SUCCESS, SWAP_FOOD_SUCCESS, GET_CURRENT_DIET_LOCAL_SUCCESS } from "./type";

import { updateSpineer } from "./Spineer";
import { Diet } from "./Diet";
const food =  [];
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
export const getCurrentDiet = () => (dispatch) => {
    const data = JSON.parse(localStorage.getItem('currentDiets'));
    dispatch({
        type:GET_CURRENT_DIET_SUCCESS,
        payload:data
    })
}
export const getCurrentDietFromLocal = () => (dispatch) => {
    const data = JSON.parse(localStorage.getItem('currentDiets'));
   
    dispatch({
        type:GET_CURRENT_DIET_LOCAL_SUCCESS,
        payload:data
    })
}
export const AddData = (inputs) => (dispatch) => {
   
    food.push(inputs);
    dispatch({
        type: CURRENT_DIET_SUCCESS,
        payload: food,
    });
    return Promise.resolve();
}
export const DeleteData = (inputs) => (dispatch) => {

    const arr = removeByAttr(food, 'name', inputs.name);
    dispatch({
        type: CURRENT_DIET_SUCCESS,
        payload: arr,
    });
    return Promise.resolve();
}

export const SearchData = (inputs) => (dispatch) => {
    console.log(inputs);
    const result = [];

    // iterate over each object in the array
    for (let i = 0; i < Diet.length; i++) {
        const item = Diet[i];

        const diff = Math.abs(item.nutritions.carbohydrates - inputs.nutritions.carbohydrates);
        const percentDiff = diff / inputs.nutritions.carbohydrates * 100;

        // check if percentage difference is less than or equal to 5%

        if (percentDiff <= 5) {
            result.push(item);
        }
        dispatch({
            type: SWAP_FOOD_SUCCESS,
            payload: result,
        });
    }
    return Promise.resolve();
}

