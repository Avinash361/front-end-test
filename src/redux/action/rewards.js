import { REWARD_SUCCESS,REWARD_FAIL } from "./type";
import userService from '../services/userService';
import { updateSpineer } from "./Spineer";

export const GetPointsDefinition=() =>(dispatch) =>{
    return userService.GetPointsDefinition().then(
        (res) =>{
            dispatch({
                type:REWARD_SUCCESS,
                payload:res.data.data,
            });
            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type:REWARD_FAIL,
            })

            return Promise.reject();
        }
    );
};
export const UpdatePoints=(inputs) =>(dispatch) =>{
    dispatch(updateSpineer(true));
    return userService.UpdatePoints(inputs).then((res) => {
        return Promise.resolve();
    });
};