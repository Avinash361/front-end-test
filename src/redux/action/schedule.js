import { SCHEDULE_FAIL, SCHEDULE_SUCCESS, SCHEDULE_TYPE_SUCCESS, SCHEDULE_TYPE_FAIL } from "./type";
import userService from "../services/userService";
import { updateSpineer } from "./Spineer";

export const getScheduleTypes = () => (dispatch) => {
    return userService.getScheduleTypes().then(
        (res) => {
            dispatch({
                type: SCHEDULE_TYPE_SUCCESS,
                payload: res.data.data,
            })
            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: SCHEDULE_TYPE_FAIL,
            })
            return Promise.reject();
        }
    )
}

export const GetAllAssessmentSchedules = () => (dispatch) => {
    return userService.GetAllAssessmentSchedules().then(
        (res) => {
            dispatch({
                type: SCHEDULE_SUCCESS,
                payload: res.data.data,
            })
            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: SCHEDULE_FAIL,
            })
            return Promise.reject();
        }
    )
}

export const AddAssessmentSchedule = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.AddAssessmentSchedule(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    )
}
export const UpdateAssessmentSchedule = (inputs) => (dispatch) =>{
    dispatch(updateSpineer(true));
    return userService.UpdateAssessmentSchedule(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}
export const DeleteAssessmentSchedule = (inputs) => (dispatch) =>{
    dispatch(updateSpineer(true));
    return userService.DeleteAssessmentSchedule(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}
export const SetupAssessment = () => (dispatch) =>{
    dispatch(updateSpineer(true));
    return userService.SetupAssessment().then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}