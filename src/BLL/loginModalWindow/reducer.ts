import {
    IS_MODAL_LOGIN_WINDOW_ACTIVE, IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED,
    SET_CAPTCHA_INTO_STATE, SET_RESPONSE_ERROR_TEXT_INTO_STATE,
    TOOGLE_IS_LOGIN_REQUIREMENT
} from "./actionTypes";
import {
    InitialStateTSType, ActionTSType, LoginModalWindowReducerTStype
} from "./typeScriprtTypes";

let initialState: InitialStateTSType = {
    isModalLoginWindowActive: false,
    isCapthaActive: false,
    captchaURL: null,
    isLoginButtonClicked: false,
    responseErrorText: null,
    isLoginRequirementActive: false
};

const loginModalWindowReducer = (state = initialState, action: ActionTSType): InitialStateTSType => {
    switch (action.type) {
        case IS_MODAL_LOGIN_WINDOW_ACTIVE: {
            const superState: InitialStateTSType = {
                ...state,
                isModalLoginWindowActive: action.isModalLoginWindowActive
            };
            return superState;
        }

        case IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED: {
            const superState: InitialStateTSType = {
                ...state,
                isLoginButtonClicked: action.isLoginButtonClicked
            };
            return superState;
        }

        case SET_RESPONSE_ERROR_TEXT_INTO_STATE: {
            const superState: InitialStateTSType = {
                ...state,
                responseErrorText: action.responseErrorText
            };
            return superState;
        }

        case SET_CAPTCHA_INTO_STATE: {
            const superState: InitialStateTSType = {
                ...state,
                isCapthaActive: action.isCapthaActive,
                captchaURL: action.captchaURL
            };
            return superState;
        }

        case TOOGLE_IS_LOGIN_REQUIREMENT: {
            const superState: InitialStateTSType = {
                ...state,
                isLoginRequirementActive: action.isLoginRequirementActive
            };
            return superState;
        }

        default: return state;
    }
};

export default loginModalWindowReducer;