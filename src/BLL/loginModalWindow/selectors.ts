type stateTSType = {
    loginModalWindow: {
        isModalLoginWindowActive: boolean,
        isLoginButtonClicked: boolean,
        isCapthaActive: boolean,
        captchaURL: string,
        responseErrorText: string,
        isLoginRequirementActive: boolean
    }
}

type getIsModalLoginWindowActiveSelectorTSType = (state: stateTSType) => boolean;

export const getIsModalLoginWindowActiveSelector: getIsModalLoginWindowActiveSelectorTSType =  (state) => {
    return state.loginModalWindow.isModalLoginWindowActive;
}

type getIsLoginButtonClickedSelectorTSType = (state: stateTSType) => boolean;

export const getIsLoginButtonClickedSelector: getIsLoginButtonClickedSelectorTSType =  (state) => {
    return state.loginModalWindow.isLoginButtonClicked;
}

type getIsCaptchActiveSelectorTSType = (state: stateTSType) => boolean;

export const getIsCaptchActiveSelector: getIsCaptchActiveSelectorTSType =  (state) => {
    return state.loginModalWindow.isCapthaActive;
}

type getCaptchaURLSelectorTSType = (state: stateTSType) => string;

export const getCaptchaURLSelector: getCaptchaURLSelectorTSType =  (state) => {
    return state.loginModalWindow.captchaURL;
}

type getResponseErrorTextSelectorTSType = (state: stateTSType) => string;

export const getResponseErrorTextSelector: getResponseErrorTextSelectorTSType =  (state) => {
    return state.loginModalWindow.responseErrorText;
}

type getIsLoginRequirementSelectorTSType = (state: stateTSType) => boolean;

export const getIsLoginRequirementSelector: getIsLoginRequirementSelectorTSType =  (state) => {
    return state.loginModalWindow.isLoginRequirementActive;
}