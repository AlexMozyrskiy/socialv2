import { INITIALIZED_APP } from "./actionTypes";
import { InitialStateTSType, InitializedAppTStype, ActionRedecerTSType } from "./typeScriprtTypes";

const initialState: InitialStateTSType = {
    isAppInitialized: false
};

const initializedAppReducer: InitializedAppTStype = (state = initialState, action: ActionRedecerTSType) => {
    switch (action.type) {
        case INITIALIZED_APP: {
            const superState: InitialStateTSType = {
                ...state,
                isAppInitialized: action.isAppInitialized
            };
            return superState;
        }
        default: return state;
    }
};

export default initializedAppReducer;