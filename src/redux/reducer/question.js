import { Q_SUCCESS, QUESTION_APPEND_SUCCESS, Q_FAIL, ADD_FILTER_SUCCESS, CHANGE_PAGE_NUMBER, CHANGE_INDEX, TOGGLE_APPROVED } from "../action/type";


const initialState = {
    data: [],
    length: 0,
    filter: {
        boardOrUniversityId: "00000000-0000-0000-0000-000000000000",
        classId: "00000000-0000-0000-0000-000000000000",
        difficultyLevelId: "00000000-0000-0000-0000-000000000000",
        mediumId: "00000000-0000-0000-0000-000000000000",
        subjectId: "00000000-0000-0000-0000-000000000000",
    },
    index: 0,
    pageNo: 1,
    isApproved: true,
}
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case Q_SUCCESS:
            return {
                ...state,
                data: [...state.data, ...payload.results],
                length: payload.totalRecords
            };
        case Q_FAIL:
            return {
                ...state,
                data: []
            };
        case QUESTION_APPEND_SUCCESS:
            return {
                ...state,
                data: payload.results,
                length: payload.totalRecords
            }
        case ADD_FILTER_SUCCESS:
            return {
                ...state,
                filter: { ...state.filter, ...payload }

            }
        case CHANGE_PAGE_NUMBER:
            return {
                ...state,
                pageNo: payload

            }
        case CHANGE_INDEX:
            return {
                ...state,
                index: payload

            }
        case TOGGLE_APPROVED:
            return {
                ...state,
                isApproved: payload

            }
        default:
            return state;
    }
}