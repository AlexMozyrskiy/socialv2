import { INITIALIZED_APP } from "./actionTypes";
import { InitializedAppActionCreatorTSType } from "./typeScriprtTypes";

export const initializedApp: InitializedAppActionCreatorTSType = (isAppInitialized) => ({type: INITIALIZED_APP, isAppInitialized});