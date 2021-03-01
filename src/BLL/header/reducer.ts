import { IS_HEADER_LOGIN_BUTTON_CLICKED, IS_HEADER_SEARCH_BUTTON_CLICKED } from "./actionTypes";
import {
    InitialStateTSType, ActionRedecerTSType, HeaderReducerTStype
} from "./typeScriprtTypes";

const initialState: InitialStateTSType = {
    isLoginButtonClicked: false,
    isSearchButtonClicked: false
};

const headerReducer = (state = initialState, action: ActionRedecerTSType): InitialStateTSType => {
    switch (action.type) {
        case IS_HEADER_LOGIN_BUTTON_CLICKED: {
            const superState = {
                ...state,
                isLoginButtonClicked: action.isLoginButtonClicked
            };
            return superState;
        }

        case IS_HEADER_SEARCH_BUTTON_CLICKED: {
            const superState = {
                ...state,
                isSearchButtonClicked: action.isSearchButtonClicked
            };
            return superState;
        }

        default: return state;
    }
};

export default headerReducer;