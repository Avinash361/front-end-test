import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from "../action/type";

const user =localStorage.getItem("admintoken");

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
                env:payload.env,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}