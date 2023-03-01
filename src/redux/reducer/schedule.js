import { SCHEDULE_SUCCESS, SCHEDULE_FAIL } from "../action/type";

const initialState = {
    payload: [{
        "id": "",
        "scheduleType": "NA",
        "dayOfWeek": null,
        "months": [],
        "numberOfQuestions": null,
        "timePerQuestion": null,
        "timePerAdvertisement": null,
        "daysToExpire": null
    }]
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SCHEDULE_SUCCESS:
            return {
                ...state,
                payload
            };
        case SCHEDULE_FAIL:
            return {
                ...state
            }
        default:
            return state;
    }
}