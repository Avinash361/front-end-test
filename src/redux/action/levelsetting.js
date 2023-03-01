import { LEVEL_SUCCESS, LEVEL_FAIL } from "./type";
import userService from "../services/userService";
import { updateSpineer } from "./Spineer";

export const GetDifficultyLevel = () => (dispatch) => {
    return userService.GetDifficultyLevel().then(
        (res) => {
            dispatch({
                type: LEVEL_SUCCESS,
                payload: res.data.data,
            });
            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: LEVEL_FAIL,
            })
            return Promise.reject();
        }
    );
};
export const AddDifficultyLevel = (inputs) => (dispatch) =>{
    dispatch(updateSpineer(true));
    return userService.AddDifficultyLevel(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}
export const UpdateDifficultyLevel = (inputs) => (dispatch) =>{
    dispatch(updateSpineer(true));
    return userService.UpdateDifficultyLevel(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}