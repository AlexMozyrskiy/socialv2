import {
    IS_OWNER_PROFILE_PAGE_SAVE_CHANGES_BUTTON_CLICKED,
    IS_OWNER_PROFILE_PAGE_UPDATE_PHOTO_BUTTON_CLICKED
} from "./actionTypes";

// -------------------------- типы которые будут использоваться несколько раз вынесем в один тип -----------------------
type IsClickedTSType = boolean
// -------------------------- / типы которые будут использоваться несколько раз вынесем в один тип ---------------------


// ---------------------- action creators types -------------------------------------------------------
export type IsOwnerProfilePageSaveChangesButtonClickedActionCreatorTSType = (isClicked: IsClickedTSType) => ({
    type: typeof IS_OWNER_PROFILE_PAGE_SAVE_CHANGES_BUTTON_CLICKED
    isClicked: IsClickedTSType
});

export type IsOwnerProfilePageUpdatePhotoButtonClickedActionCreatorTSType = (isClicked: IsClickedTSType) => ({
    type: typeof IS_OWNER_PROFILE_PAGE_UPDATE_PHOTO_BUTTON_CLICKED
    isClicked: IsClickedTSType
});
// ---------------------- / action creators types -----------------------------------------------------


// -------------------------------------- reducer type -------------------------------------
export type InitialStateTSType = {
    isSaveChangesButtonClicked: IsClickedTSType
    isUpdatePhotoButtonClicked: IsClickedTSType
};

export type ActionRedecerTSType = {
    type: typeof IS_OWNER_PROFILE_PAGE_SAVE_CHANGES_BUTTON_CLICKED | typeof IS_OWNER_PROFILE_PAGE_UPDATE_PHOTO_BUTTON_CLICKED
    isClicked: IsClickedTSType
};

export type ownerProfilePageTStype = (state: InitialStateTSType, action: ActionRedecerTSType) => InitialStateTSType
// -------------------------------------- / reducer type -----------------------------------


// ------------------------------------ Selectors Types -------------------------------------
type CurrentStateTSType = {
    ownerProfilePage: InitialStateTSType
}
export type OwnerProfilePageIsSaveChangesButtonClickedSelectorTSType = (state: CurrentStateTSType) => IsClickedTSType
export type OwnerProfilePageIsUpdatePhotoButtonClickedSelectorTSType = (state: CurrentStateTSType) => IsClickedTSType
// ------------------------------------ / Selectors Types -----------------------------------