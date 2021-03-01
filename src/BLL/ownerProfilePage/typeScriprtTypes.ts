import {
    IS_OWNER_PROFILE_PAGE_SAVE_CHANGES_BUTTON_CLICKED,
    IS_OWNER_PROFILE_PAGE_UPDATE_PHOTO_BUTTON_CLICKED
} from "./actionTypes";

import { RootReducerSateTSType } from "../redux_store/redux-store";
import { IsOwnerProfilePageSaveChangesButtonClicked } from "../commonTSTypes";


// ---------------------- action creators types -------------------------------------------------------
export type IsOwnerProfilePageSaveChangesButtonClickedActionCreatorTSType = (isClicked: IsOwnerProfilePageSaveChangesButtonClicked) => ({
    type: typeof IS_OWNER_PROFILE_PAGE_SAVE_CHANGES_BUTTON_CLICKED
    isClicked: IsOwnerProfilePageSaveChangesButtonClicked
});

export type IsOwnerProfilePageUpdatePhotoButtonClickedActionCreatorTSType = (isClicked: IsOwnerProfilePageSaveChangesButtonClicked) => ({
    type: typeof IS_OWNER_PROFILE_PAGE_UPDATE_PHOTO_BUTTON_CLICKED
    isClicked: IsOwnerProfilePageSaveChangesButtonClicked
});
// ---------------------- / action creators types -----------------------------------------------------


// -------------------------------------- reducer type -------------------------------------
export type InitialStateTSType = {
    isSaveChangesButtonClicked: IsOwnerProfilePageSaveChangesButtonClicked
    isUpdatePhotoButtonClicked: IsOwnerProfilePageSaveChangesButtonClicked
};

export type ActionRedecerTSType = {
    type: typeof IS_OWNER_PROFILE_PAGE_SAVE_CHANGES_BUTTON_CLICKED | typeof IS_OWNER_PROFILE_PAGE_UPDATE_PHOTO_BUTTON_CLICKED
    isClicked: IsOwnerProfilePageSaveChangesButtonClicked
};

export type ownerProfilePageTStype = (state: InitialStateTSType, action: ActionRedecerTSType) => InitialStateTSType
// -------------------------------------- / reducer type -----------------------------------


// ------------------------------------ Selectors Types -------------------------------------
// type CurrentStateTSType = {
//     ownerProfilePage: InitialStateTSType
// }
export type OwnerProfilePageIsSaveChangesButtonClickedSelectorTSType = (state: RootReducerSateTSType) => IsOwnerProfilePageSaveChangesButtonClicked
export type OwnerProfilePageIsUpdatePhotoButtonClickedSelectorTSType = (state: RootReducerSateTSType) => IsOwnerProfilePageSaveChangesButtonClicked
// ------------------------------------ / Selectors Types -----------------------------------