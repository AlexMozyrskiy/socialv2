import {
    IS_MODAL_LOGIN_WINDOW_ACTIVE, IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED,
    SET_CAPTCHA_INTO_STATE, SET_RESPONSE_ERROR_TEXT_INTO_STATE,
    TOOGLE_IS_LOGIN_REQUIREMENT
} from "./actionTypes";

// ---------------------- action creators types -------------------------------------------------------
export type SetIsModalLoginWindowActiveActionCreatorTSType = (isModalLoginWindowActive: boolean) => ({
    type: typeof IS_MODAL_LOGIN_WINDOW_ACTIVE,
    isModalLoginWindowActive: boolean
});
export type SetIsModalLoginWindowButtonClickedActionCreatorTSType = (isLoginButtonClicked: boolean) => ({
    type: typeof IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED,
    isLoginButtonClicked: boolean
});
export type SetCaptchaIntoStateActionCreatorTSType = (isCapthaActive: boolean, captchaURL: string | null) => ({
    type: typeof SET_CAPTCHA_INTO_STATE,
    isCapthaActive: boolean,
    captchaURL: string | null
})
export type SetResponseErrorTextIntoStateActionCreatorTSType = (responseErrorText: string) => ({
    type: typeof SET_RESPONSE_ERROR_TEXT_INTO_STATE,
    responseErrorText: string
});
export type ToogleIsLoginRequirementActionCreatorTSType = (boolVariable: boolean) => ({
    type: typeof TOOGLE_IS_LOGIN_REQUIREMENT,
    isLoginRequirementActive: boolean
});
// ---------------------- / action creators types -----------------------------------------------------


// -------------------------------------- reducer type -------------------------------------
export type InitialStateTSType = {
    isModalLoginWindowActive: boolean,
    isCapthaActive: boolean,
    captchaURL: null | string,
    isLoginButtonClicked: boolean,
    responseErrorText: null | string,
    isLoginRequirementActive: boolean
};

export type ActionTSType = {
    type: typeof IS_MODAL_LOGIN_WINDOW_ACTIVE | typeof IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED | typeof SET_CAPTCHA_INTO_STATE | typeof SET_RESPONSE_ERROR_TEXT_INTO_STATE | typeof TOOGLE_IS_LOGIN_REQUIREMENT,
    isModalLoginWindowActive: boolean,
    isLoginButtonClicked: boolean,
    responseErrorText: string,
    isCapthaActive:boolean,
    captchaURL: string,
    isLoginRequirementActive: boolean
};

export type LoginModalWindowReducerTStype = (state: InitialStateTSType, action: ActionTSType) => InitialStateTSType
// -------------------------------------- / reducer type -----------------------------------
