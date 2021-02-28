import {
    OwnerProfilePageIsSaveChangesButtonClickedSelectorTSType,
    OwnerProfilePageIsUpdatePhotoButtonClickedSelectorTSType
} from "./typeScriprtTypes";

export const getOwnerProfilePageIsSaveChangesButtonClickedSelector: OwnerProfilePageIsSaveChangesButtonClickedSelectorTSType =  (state) => {
    return state.ownerProfilePage.isSaveChangesButtonClicked;
}

export const getOwnerProfilePageIsUpdatePhotoButtonClickedSelector: OwnerProfilePageIsUpdatePhotoButtonClickedSelectorTSType =  (state) => {
    return state.ownerProfilePage.isUpdatePhotoButtonClicked;
}

