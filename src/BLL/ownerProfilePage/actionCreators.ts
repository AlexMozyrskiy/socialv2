import {
    IS_OWNER_PROFILE_PAGE_SAVE_CHANGES_BUTTON_CLICKED,
    IS_OWNER_PROFILE_PAGE_UPDATE_PHOTO_BUTTON_CLICKED
} from "./actionTypes";

import {
    IsOwnerProfilePageSaveChangesButtonClickedActionCreatorTSType,
    IsOwnerProfilePageUpdatePhotoButtonClickedActionCreatorTSType
} from "./typeScriprtTypes";

export const isOwnerProfilePageSaveChangesButtonClicked: IsOwnerProfilePageSaveChangesButtonClickedActionCreatorTSType = (isClicked) => ({ type: IS_OWNER_PROFILE_PAGE_SAVE_CHANGES_BUTTON_CLICKED, isClicked });
export const isOwnerProfilePageUpdatePhotoButtonClicked: IsOwnerProfilePageUpdatePhotoButtonClickedActionCreatorTSType = (isClicked) => ({ type: IS_OWNER_PROFILE_PAGE_UPDATE_PHOTO_BUTTON_CLICKED, isClicked });