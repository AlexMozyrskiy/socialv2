import {
    INITIALIZED_APP
} from "./actionTypes";

// -------------------------- типы которые будут использоваться несколько раз вынесем в один тип -----------------------
type IsAppInitializedTSType = boolean

// -------------------------- / типы которые будут использоваться несколько раз вынесем в один тип ---------------------


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
type CurrentStateTSType = {
    initializedApp: InitialStateTSType
}
export type IsAppInitializedSelectorTSType = (state: CurrentStateTSType) => IsAppInitializedTSType
// ------------------------------------ / Selectors Types -----------------------------------