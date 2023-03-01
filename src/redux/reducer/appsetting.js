import { BOARD_SUCCESS, BOARD_FAIL, MEDIUM_SUCCESS, MEDIUM_FAIL, CLASS_SUCCESS, CLASS_FAIL, SUBJECT_SUCCESS, SUBJECT_FAIL, LEVEL_SUCCESS, LEVEL_FAIL, REWARD_SUCCESS, REWARD_FAIL, STATE_SUCCESS, STATE_FAIL } from "../action/type";

const initialState = {
    board: [
        {
            "id": "",
            "name": "NA",
            "city": "NA",
            "state": "NA",
            "pincode": "NA"
        }
    ],
    medium: [
        {
            "id": "",
            "name": "NA"
        }
    ],
    class: [
        {
            "id": "",
            "name": "NA"
        }
    ],
    subject: [
        {
            "id": "",
            "name": ""
        }
    ],
    level: [{
        "id": "",
        "name": "NA",
        "applicablePoints": null
    }],
    statesName: ['NA'],
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case BOARD_SUCCESS:
            return {
                ...state,
                board: payload
            }
        case BOARD_FAIL:
            return {
                ...state
            }
        case MEDIUM_SUCCESS:
            return {
                ...state,
                medium: payload
            }
        case MEDIUM_FAIL:
            return {
                ...state
            }
        case CLASS_SUCCESS:
            return {
                ...state,
                class: payload
            }
        case CLASS_FAIL:
            return {
                ...state
            }
        case SUBJECT_SUCCESS:
            return {
                ...state,
                subject: payload
            }
        case SUBJECT_FAIL:
            return {
                ...state
            }

        case LEVEL_SUCCESS:
            return {
                ...state,
                level: payload
            }
        case LEVEL_FAIL:
            return {
                ...state
            }
        case REWARD_SUCCESS:
            return {
                ...state,
                reward:payload,
            };
        case REWARD_FAIL:
            return {
                ...state,
            };
        case STATE_SUCCESS:
            return {
                ...state,
                statesName: payload,
            };
        case STATE_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
}