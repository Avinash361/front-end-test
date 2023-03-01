import axios from 'axios';

import store from '../../store';
import { foundError } from '../action/error';
import { updateSpineer } from '../action/Spineer';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 20000,
})


export default api

const { dispatch, getState } = store;
api.interceptors.request.use(
    (req) => {

        req.headers['Authorization'] = `Bearer ${localStorage.getItem('admintoken')}`;
        return req;
    },
    (err) => {
        dispatch(updateSpineer(false));
        console.log(err);
        return Promise.reject(err);
    }
);

// For POST requests
api.interceptors.response.use(
    (res) => {

        dispatch(updateSpineer(false));
        // Add configurations here

        if (res.config.url === "Auth/InternalUserLogin")
            dispatch(foundError({ value: "true", type: "Success", message: `You have successfully logged in.` }));
        else if (res.config.url === "/Question/ApproveQuestion")
            dispatch(foundError({ value: "true", type: "Question", message: `Your Question has been Approved.` }));
        else if (res.config.url === "Question/BulkUploadQuestions") {

            if (res.data.message) {
                dispatch(foundError({ value: "true", type: "Question", message: `The entire question has been successfully uploaded.` }));
            } else {
                downloadData(res.data);
                dispatch(foundError({ value: "true", type: "Question", message: `Your questions have been partially uploaded. There is some inaccurately recorded data in the file, which you may view upon downloading.` }));
            }
        }
        else if (res.config.url === "AssessmentSchedule/AddAssessmentSchedule")
            dispatch(foundError({ value: "true", type: "Schedule", message: `Your Schedule has been Added.` }));
        else if (res.config.url === "AssessmentSchedule/UpdateAssessmentSchedule")
            dispatch(foundError({ value: "true", type: "Schedule", message: `Your Schedule has been Updated.` }));
        else if (res.config.url === "AssessmentSchedule/DeleteAssessmentSchedule")
            dispatch(foundError({ value: "true", type: "Schedule", message: `Your Schedule has been Deleted.` }));
        else if (res.config.url === "Assessment/SetupAssessment")
            dispatch(foundError({ value: "true", type: "Schedule", message: `Your Assesment Schedule has been Setup.` }));
        else if (res.config.url === "EducationalOrganization/AddBoardOrUniversity")
            dispatch(foundError({ value: "true", type: "Board", message: `Your Board has been Added.` }));
        else if (res.config.url === "EducationalOrganization/UpdateBoardOrUniversity")
            dispatch(foundError({ value: "true", type: "Board", message: `Your Board has been Updated.` }));
        else if (res.config.url === "Medium/AddMedium")
            dispatch(foundError({ value: "true", type: "Medium", message: `Your Medium has been Added.` }));
        else if (res.config.url === "Medium/UpdateMedium")
            dispatch(foundError({ value: "true", type: "Medium", message: `Your Medium has been Updated.` }));
        else if (res.config.url === "Class/AddClass")
            dispatch(foundError({ value: "true", type: "Class", message: `Your Class has been Added.` }));
        else if (res.config.url === "Class/UpdateClass")
            dispatch(foundError({ value: "true", type: "Class", message: `Your Class has been Updated.` }));
        else if (res.config.url === "Subject/AddSubject")
            dispatch(foundError({ value: "true", type: "Subject", message: `Your Subject has been Added.` }));
        else if (res.config.url === "Subject/UpdateSubject")
            dispatch(foundError({ value: "true", type: "Subject", message: `Your Subject has been Updated.` }));
        else if (res.config.url === "DifficlutyLevel/AddDifficultyLevel")
            dispatch(foundError({ value: "true", type: "DifficlutyLevel", message: `Your DifficlutyLevel has been Added.` }));
        else if (res.config.url === "DifficlutyLevel/UpdateDifficultyLevel")
            dispatch(foundError({ value: "true", type: "DifficlutyLevel", message: `Your DifficlutyLevel has been Updated.` }));
        else if (res.config.url === "StudentProfile/UpdateStudentProfile")
            dispatch(foundError({ value: "true", type: "Student Profile", message: `Student Profile has been updated.` }));

        return res;
    },
    (error) => {

        dispatch(updateSpineer(false));

        if (error.response.status === 401) {
            if (error.response.data.data.message)
                dispatch(foundError({ value: "true", type: "Error", message: `${error.response.data.data.message} !` }));
            else
                dispatch(foundError({ value: "true", type: "Error", message: `${error.message} !` }));
            console.log("error in interceptor use response 401", error.response)
        }
        else if (error.response.status === 400) {
            dispatch(foundError({ value: "true", type: "Error", message: error.response.data.errors[0].errorMessage }));
            console.log("error in interceptor use response 400", error.response)
        }
        else if (error.response.status === 404) {
            dispatch(foundError({ value: "true", type: "Error", message: `${error.message} !` }));
            console.log("error in interceptor use response 404", error)
        }
        else if (error.response.status === 500) {
            dispatch(foundError({ value: "true", type: "Error", message: `${error.message} !` }));
            console.log("error in interceptor use response 500", error.response)
        } else {
            dispatch(foundError({ value: "true", type: "Error", message: `${error.message} !` }));
        }
        return Promise.reject(error);
    }
);

function downloadData(responseData) {
    // Create a Blob (binary large object) from the response data
    const blob = new Blob([responseData], { type: 'text/plain' });

    // Create a link element and set its href to the Blob object
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);

    // Set the download file name
    downloadLink.download = 'Inaccurate_Data.csv';

    // Trigger the download by clicking the link
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove the link after the download
    document.body.removeChild(downloadLink);
}