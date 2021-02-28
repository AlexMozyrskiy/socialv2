import { IS_HEADER_LOGIN_BUTTON_CLICKED, IS_HEADER_SEARCH_BUTTON_CLICKED } from "./actionTypes";
import {
    SetIsHeaderLoginButtonClickedActionCreatorTSType, SetIsHeaderSearchButtonClickedActionCreatorTSType
} from "./typeScriprtTypes";

export const setIsHeaderLoginButtonClicked: SetIsHeaderLoginButtonClickedActionCreatorTSType = (isLoginButtonClicked) => ({ type: IS_HEADER_LOGIN_BUTTON_CLICKED, isLoginButtonClicked});
export const setIsHeaderSearchButtonClicked: SetIsHeaderSearchButtonClickedActionCreatorTSType = (isSearchButtonClicked) => ({ type: IS_HEADER_SEARCH_BUTTON_CLICKED, isSearchButtonClicked });