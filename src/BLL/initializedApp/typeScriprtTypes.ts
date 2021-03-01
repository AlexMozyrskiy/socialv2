import {
    INITIALIZED_APP
} from "./actionTypes";

import { RootReducerSateTSType } from "../redux_store/redux-store";
import { IsAppInitializedTSType } from "../commonTSTypes";


// ---------------------- action creators types -------------------------------------------------------
export type InitializedAppActionCreatorTSType = (isAppInitialized: IsAppInitializedTSType) => ({
    type: typeof INITIALIZED_APP
    isAppInitialized: IsAppInitializedTSType
});
// ---------------------- / action creators types -----------------------------------------------------


// -------------------------------------- reducer type -------------------------------------
export type InitialStateTSType = {
    isAppInitialized: IsAppInitializedTSType
};

export type ActionRedecerTSType = {
    type: typeof INITIALIZED_APP
    isAppInitialized: IsAppInitializedTSType
};

export type InitializedAppTStype = (state: InitialStateTSType, action: ActionRedecerTSType) => InitialStateTSType
// -------------------------------------- / reducer type -----------------------------------


// ------------------------------------ Selectors Types -------------------------------------
// type CurrentStateTSType = {
//     initializedApp: InitialStateTSType
// }
export type IsAppInitializedSelectorTSType = (state: RootReducerSateTSType) => IsAppInitializedTSType
// ------------------------------------ / Selectors Types -----------------------------------