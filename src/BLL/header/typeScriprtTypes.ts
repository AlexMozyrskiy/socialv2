import {
    IS_HEADER_LOGIN_BUTTON_CLICKED, IS_HEADER_SEARCH_BUTTON_CLICKED
} from "./actionTypes";

import { RootReducerSateTSType } from "../redux_store/redux-store";
import { IsLoginButtonClickedTSType, IsSearchButtonClickedTSType } from "../commonTSTypes";


// ---------------------- action creators types -------------------------------------------------------
export type SetIsHeaderLoginButtonClickedActionCreatorTSType = (isLoginButtonClicked: IsLoginButtonClickedTSType) => ({
    type: typeof IS_HEADER_LOGIN_BUTTON_CLICKED
    isLoginButtonClicked: IsLoginButtonClickedTSType
});
export type SetIsHeaderSearchButtonClickedActionCreatorTSType = (isSearchButtonClicked: IsSearchButtonClickedTSType) => ({
    type: typeof IS_HEADER_SEARCH_BUTTON_CLICKED
    isSearchButtonClicked: IsSearchButtonClickedTSType
});
// ---------------------- / action creators types -----------------------------------------------------


// -------------------------------------- reducer type -------------------------------------
export type InitialStateTSType = {
    isLoginButtonClicked: IsLoginButtonClickedTSType
    isSearchButtonClicked: IsSearchButtonClickedTSType
};

export type ActionRedecerTSType = {
    type: typeof IS_HEADER_LOGIN_BUTTON_CLICKED | typeof IS_HEADER_SEARCH_BUTTON_CLICKED
    isLoginButtonClicked: IsLoginButtonClickedTSType
    isSearchButtonClicked: IsSearchButtonClickedTSType
};

export type HeaderReducerTStype = (state: InitialStateTSType, action: ActionRedecerTSType) => InitialStateTSType
// -------------------------------------- / reducer type -----------------------------------


// ------------------------------------ Selectors Types -------------------------------------
// type CurrentStateTSType = {
//     header: InitialStateTSType
// }
export type IsHeaderLoginButtonClickedSelectorTSType = (state: RootReducerSateTSType) => IsLoginButtonClickedTSType
export type IsSearchButtonClickedSelectorTSType = (state: RootReducerSateTSType) => IsSearchButtonClickedTSType
// ------------------------------------ / Selectors Types -----------------------------------