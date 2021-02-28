import {
    NotOwnerStatusSelectorTSType, NotOwnerFullNameSelectorTSType,
    NotOwnerSmallPhotoSelectorTSType, NotOwnerIdSelectorTSType,
    NotOwnerLookingForAJobSelectorTSType, NotOwnerLookingForAJobDescriptionSelectorTSType,
    NotOwnerAboutMeSelectorTSType, NotOwnerContactsSelectorTSType
} from "./typeScriprtTypes";

export const getNotOwnerStatusSelector: NotOwnerStatusSelectorTSType =  (state) => {
    return state.notOwnerUserData.status;
}

export const getNotOwnerFullNameSelector: NotOwnerFullNameSelectorTSType =  (state) => {
    return state.notOwnerUserData.fullName;
}

export const getNotOwnerSmallPhotoSelector: NotOwnerSmallPhotoSelectorTSType =  (state) => {
    return state.notOwnerUserData.photos.small;
}

export const getNotOwnerLargePhotoSelector: NotOwnerSmallPhotoSelectorTSType =  (state) => {
    return state.notOwnerUserData.photos.large;
}

export const getNotOwnerIdSelector: NotOwnerIdSelectorTSType =  (state) => {
    return state.notOwnerUserData.id;
}

export const getNotOwnerLookingForAJobSelector: NotOwnerLookingForAJobSelectorTSType =  (state) => {
    return state.notOwnerUserData.lookingForAJob;
}

export const getNotOwnerLookingForAJobDescriptionSelector: NotOwnerLookingForAJobDescriptionSelectorTSType =  (state) => {
    return state.notOwnerUserData.lookingForAJobDescription;
}

export const getNotOwnerAboutMeSelector: NotOwnerAboutMeSelectorTSType =  (state) => {
    return state.notOwnerUserData.aboutMe;
}

export const getNotOwnerContactsSelector: NotOwnerContactsSelectorTSType =  (state) => {
    return state.notOwnerUserData.contacts;
}