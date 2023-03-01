import { Q_SUCCESS,QUESTION_APPEND_SUCCESS, Q_FAIL, ADD_FILTER_SUCCESS, CHANGE_PAGE_NUMBER,CHANGE_INDEX, TOGGLE_APPROVED } from "./type";
import userService from '../services/userService';
import { updateSpineer } from "./Spineer";

export const addFilter = (inputs) => (dispatch) => {
    dispatch({
        type: ADD_FILTER_SUCCESS,
        payload: inputs,
    });
    return Promise.resolve();
};
export const changePageNo = (inputs) => (dispatch) => {
    dispatch({
        type: CHANGE_PAGE_NUMBER,
        payload: inputs,
    });
    return Promise.resolve();
};
export const changeIndex = (inputs) => (dispatch) => {
    dispatch({
        type: CHANGE_INDEX,
        payload: inputs,
    });
    return Promise.resolve();
};
export const toggleApproved = (inputs) => (dispatch) => {
    dispatch({
        type: TOGGLE_APPROVED,
        payload: inputs,
    });
    return Promise.resolve();
};
export const clearQuestion = (pageNo,approved,filter) => (dispatch) => {
    return userService.getQuestion(pageNo,approved,filter).then(
        (res) => {
            dispatch({
                type:QUESTION_APPEND_SUCCESS,
                payload: res.data.data,
            });
            return Promise.resolve();
        },
    );
}
export const getQuestion = (pageNo,approved,filter) => (dispatch) => {

    return userService.getQuestion(pageNo,approved,filter).then(
        (res) => {
            dispatch({
                type: Q_SUCCESS,
                payload: res.data.data,
            });
            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: Q_FAIL,
            })
            return Promise.reject();
        }
    );
};

export const approveQuestion = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.approveQuestion(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
};
export const BulkUploadQuestions = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.BulkUploadQuestions(inputs).then((res) => {
        return Promise.resolve();
    },
    (error) => {
        return Promise.resolve();
    }
    )
}