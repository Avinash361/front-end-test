import auth from "./auth";
import students from "./students";
import spineer from "./spineer";
import error from "./error";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth,
    students,
    spineer,
    error,
})

export default rootReducer;


