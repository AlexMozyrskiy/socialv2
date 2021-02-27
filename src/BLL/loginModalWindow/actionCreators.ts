import {
    IS_MODAL_LOGIN_WINDOW_ACTIVE, IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED,
    SET_CAPTCHA_INTO_STATE, SET_RESPONSE_ERROR_TEXT_INTO_STATE,
    TOOGLE_IS_LOGIN_REQUIREMENT
} from "./actionTypes";
import {
    SetIsModalLoginWindowActiveActionCreatorTSType, SetIsModalLoginWindowButtonClickedActionCreatorTSType,
    SetCaptchaIntoStateActionCreatorTSType, SetResponseErrorTextIntoStateActionCreatorTSType,
    ToogleIsLoginRequirementActionCreatorTSType
} from "./typeScriprtTypes";



export const setIsModalLoginWindowActive: SetIsModalLoginWindowActiveActionCreatorTSType = (isModalLoginWindowActive) => ({ type: IS_MODAL_LOGIN_WINDOW_ACTIVE, isModalLoginWindowActive });
export const setIsModalLoginWindowButtonClicked: SetIsModalLoginWindowButtonClickedActionCreatorTSType = (isLoginButtonClicked) => ({ type: IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED, isLoginButtonClicked });
export const setCaptchaIntoState: SetCaptchaIntoStateActionCreatorTSType = (isCapthaActive, captchaURL) => ({ type: SET_CAPTCHA_INTO_STATE, isCapthaActive, captchaURL });
export const setResponseErrorTextIntoState: SetResponseErrorTextIntoStateActionCreatorTSType = (responseErrorText) => ({ type: SET_RESPONSE_ERROR_TEXT_INTO_STATE, responseErrorText });
export const toogleIsLoginRequirement: ToogleIsLoginRequirementActionCreatorTSType = (boolVariable) => ({ type: TOOGLE_IS_LOGIN_REQUIREMENT, isLoginRequirementActive: boolVariable });