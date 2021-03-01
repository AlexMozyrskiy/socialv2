import {
    ISModalLoginWindowActiveSelectorTSType, getIsLoginButtonClickedSelectorTSType,
    getIsCaptchActiveSelectorTSType, getCaptchaURLSelectorTSType,
    getResponseErrorTextSelectorTSType, getIsLoginRequirementSelectorTSType
} from "./typeScriprtTypes";

export const getIsModalLoginWindowActiveSelector: ISModalLoginWindowActiveSelectorTSType =  (state) => {
    return state.loginModalWindow.isModalLoginWindowActive;
}

export const getIsLoginButtonClickedSelector: getIsLoginButtonClickedSelectorTSType =  (state) => {
    return state.loginModalWindow.isLoginButtonClicked;
}

export const getIsCaptchActiveSelector: getIsCaptchActiveSelectorTSType =  (state) => {
    return state.loginModalWindow.isCapthaActive;
}

export const getCaptchaURLSelector: getCaptchaURLSelectorTSType =  (state) => {
    return state.loginModalWindow.captchaURL;
}

export const getResponseErrorTextSelector: getResponseErrorTextSelectorTSType =  (state) => {
    return state.loginModalWindow.responseErrorText;
}

export const getIsLoginRequirementSelector: getIsLoginRequirementSelectorTSType =  (state) => {
    return state.loginModalWindow.isLoginRequirementActive;
}