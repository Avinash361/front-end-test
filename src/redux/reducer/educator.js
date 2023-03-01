import { EDUCATOR_TABLE_SUCCESS, EDUCATOR_TABLE_FAIL } from "../action/type";



const initialState = {
    payload: [{
        id: "",
        user: {
            id: "NA",
            countryCode: "NA",
            phoneNumber: "NA"
        },
        name: "NA",
        gender: "NA",
        dateOfBirth: "NA",
        email: "NA",
        addressLine1: "NA",
        addressLine2: "NA",
        state: "NA",
        city: "NA",
        pincode: "NA",
        boardOrUniversity: {
            "id": "",
            "name": "",
            "city": "",
            "state": "",
            "pincode": ""
        },
        medium: {
            "id": "",
            "name": ""
        },
        class: {
            "id": "",
            "name": ""
        },
        rating: {
            "availablePoints": 0,
            "difficultyLevel": ""
        },
        subjects: [
            {
                "id": "",
                "name": ""
            },
            {
                "id": "",
                "name": ""
            },
            {
                "id": "",
                "name": ""
            },
            {
                "id": "",
                "name": ""
            }
        ],
        referrarMobileNumber: "NA",
        profileImageUrl: ""
    },
],
};
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case EDUCATOR_TABLE_SUCCESS:
            return {
                ...state,
                payload,
            };
        case EDUCATOR_TABLE_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
}