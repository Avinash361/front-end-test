import { EDUCATOR_TABLE_SUCCESS,EDUCATOR_TABLE_FAIL } from "./type";
import userService from '../services/userService';

export const getEducatorsData=() =>(dispatch) =>{
    return userService.getEducatorsData().then(
        (res) =>{
            dispatch({
                type:EDUCATOR_TABLE_SUCCESS,
                payload:res.data.data.results,
            });
            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type:EDUCATOR_TABLE_FAIL,
            })
            return Promise.reject();
        }
    );
};