import { IsAppInitializedSelectorTSType } from "./typeScriprtTypes";

export const getIsAppInitializedSelector: IsAppInitializedSelectorTSType =  (state) => {
    return state.initializedApp.isAppInitialized;
}