import {
    IsHeaderLoginButtonClickedSelectorTSType, IsSearchButtonClickedSelectorTSType
} from "./typeScriprtTypes";

export const getIsHeaderLoginButtonClickedSelector: IsHeaderLoginButtonClickedSelectorTSType =  (state) => {
    return state.header.isLoginButtonClicked;
}

export const getIsSearchButtonClickedSelector: IsSearchButtonClickedSelectorTSType =  (state) => {
    return state.header.isSearchButtonClicked;
}