import auth from "./auth";
import appsetting from "./appsetting";
import educator from "./educator";
import students from "./students";
import option from "./option";
import spineer from "./spineer";
import error from "./error";
import question from "./question";
import reward from "./reward";
import schedule from "./schedule";
import scheduletype from "./scheduletype";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth,
    educator,
    students,
    appsetting,
    option,
    spineer,
    error,
    question,
    schedule,
    scheduletype,
    reward,
})

export default rootReducer;


