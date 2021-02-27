import {
    IsLoggedInSelectorTSType, OwnerStatusSelectorTSType,
    OwnerFullNameSelectorTSType, OwnerPhotoSelectorTSType,
    OwnerIdSelectorTSType, OwnerLookingForAJobSelectorTSType,
    OwnerLookingForAJobDescriptionSelectorTSType,
    OwnerAboutMeSelectorTSType, OwnerContactsSelectorTSType,
    RunUseEffectAppComponentSelectorTSType
} from "./typeScriprtTypes";

export const getIsLoggedInSelector: IsLoggedInSelectorTSType =  (state) => {
    return state.authUserData.isLoggedIn;
}

export const getOwnerStatusSelector: OwnerStatusSelectorTSType =  (state) => {
    return state.authUserData.status;
}

export const getOwnerFullNameSelector: OwnerFullNameSelectorTSType =  (state) => {
    return state.authUserData.fullName;
}

export const getOwnerSmallPhotoSelector: OwnerPhotoSelectorTSType =  (state) => {
    return state.authUserData.photos.small;
}

export const getOwnerLargePhotoSelector: OwnerPhotoSelectorTSType =  (state) => {
    return state.authUserData.photos.large;
}

export const getOwnerIdSelector: OwnerIdSelectorTSType =  (state) => {
    return state.authUserData.id;
}

export const getOwnerLookingForAJobSelector: OwnerLookingForAJobSelectorTSType =  (state) => {
    return state.authUserData.lookingForAJob;
}

export const getOwnerLookingForAJobDescriptionSelector: OwnerLookingForAJobDescriptionSelectorTSType =  (state) => {
    return state.authUserData.lookingForAJobDescription;
}

export const getOwnerAboutMeSelector: OwnerAboutMeSelectorTSType =  (state) => {
    return state.authUserData.aboutMe;
}

export const getOwnerContactsSelector: OwnerContactsSelectorTSType =  (state) => {
    return state.authUserData.contacts;
}

export const getRunUseEffectAppComponentSelector: RunUseEffectAppComponentSelectorTSType =  (state) => {
    return state.authUserData.runUseEffectAppComponent;
}