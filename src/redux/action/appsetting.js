import { BOARD_SUCCESS, BOARD_FAIL, MEDIUM_SUCCESS, MEDIUM_FAIL, CLASS_SUCCESS, CLASS_FAIL, SUBJECT_SUCCESS, SUBJECT_FAIL, LEVEL_SUCCESS, LEVEL_FAIL, STATE_SUCCESS, STATE_FAIL } from "./type";
import userService from '../services/userService';
import { updateSpineer } from "./Spineer";


export const GetBoard = () => (dispatch) => {
    return userService.GetBoard().then(
        (res) => {
            dispatch({
                type: BOARD_SUCCESS,
                payload: res.data.data,
            });
            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: BOARD_FAIL,
            })
            return Promise.reject();
        }
    );
};
export const AddBoard = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.AddBoard(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}
export const UpdateBoard = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.UpdateBoard(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}


export const GetMedium = () => (dispatch) => {
    return userService.GetMedium().then(
        (res) => {
            dispatch({
                type: MEDIUM_SUCCESS,
                payload: res.data.data,
            });
            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: MEDIUM_FAIL,
            })
            return Promise.reject();
        }
    );
};
export const AddMedium = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.AddMedium(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}
export const UpdateMedium = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.UpdateMedium(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}

export const GetClass = () => (dispatch) => {
    return userService.GetClass().then(
        (res) => {
            dispatch({
                type: CLASS_SUCCESS,
                payload: res.data.data,
            });
            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: CLASS_FAIL,
            })
            return Promise.reject();
        }
    );
};
export const AddClass = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.AddClass(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}
export const UpdateClass = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.UpdateClass(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}

export const GetSubject = () => (dispatch) => {
    return userService.GetSubject().then(
        (res) => {
            dispatch({
                type: SUBJECT_SUCCESS,
                payload: res.data.data,
            });
            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: SUBJECT_FAIL,
            })
            return Promise.reject();
        }
    );
};
export const AddSubject = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.AddSubject(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}
export const UpdateSubject = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.UpdateSubject(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}


export const GetDifficultyLevel = () => (dispatch) => {
    return userService.GetDifficultyLevel().then(
        (res) => {
            dispatch({
                type: LEVEL_SUCCESS,
                payload: res.data.data,
            });
            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: LEVEL_FAIL,
            })
            return Promise.reject();
        }
    );
};
export const AddDifficultyLevel = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.AddDifficultyLevel(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}
export const UpdateDifficultyLevel = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.UpdateDifficultyLevel(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}

export const GetAllStates = () => (dispatch) => {

    return userService.GetAllStates().then(
        (res) => {
            dispatch({
                type: STATE_SUCCESS,
                payload: res.data.data,
            });
            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: STATE_FAIL,
            })
            return Promise.reject();
        })
}
export const AddStates = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.AddStates(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}
export const UpdateStates = (inputs) => (dispatch) => {
    dispatch(updateSpineer(true));
    return userService.UpdateStates(inputs).then((res) => {
        return Promise.resolve();
    },
        (error) => {
            return Promise.reject();
        }
    );
}