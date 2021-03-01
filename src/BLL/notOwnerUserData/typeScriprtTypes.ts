import {
    SET_USER_STATUS_INTO_STATE,
    SET_USER_INFO_INTO_STATE
} from "./actionTypes";

import { RootReducerSateTSType } from "../redux_store/redux-store";
import {
    UserIdTSType, UserStatusTSType, PhotoTSType, AboutMeTSType, LookingForAJobTSType,
    LookingForAJobDescriptionTSType, FullNameTSType,
    ContactsAnyPropertyTSType, UserInfoPhotosTSType,
    UserInfoContactsTSType
} from "../commonTSTypes";


export type UserInfoTSType = {
    type: typeof SET_USER_STATUS_INTO_STATE | typeof SET_USER_INFO_INTO_STATE
    userId: UserIdTSType
    aboutMe: AboutMeTSType
    lookingForAJob: LookingForAJobTSType
    lookingForAJobDescription: LookingForAJobDescriptionTSType
    fullName: FullNameTSType
    photos: UserInfoPhotosTSType
    contacts: UserInfoContactsTSType
}


// ---------------------- action creators types -------------------------------------------------------
export type SetNotOwnerUserStatusIntoStateActionCreatorTSType = (userStatus: UserStatusTSType) => ({
    type: typeof SET_USER_STATUS_INTO_STATE
    status: UserStatusTSType
});

export type SetNotOwnerUserInfoIntoStateActionCreatorTSType = (userInfo: UserInfoTSType) => ({
    type: typeof SET_USER_INFO_INTO_STATE
    id: UserIdTSType
    aboutMe: AboutMeTSType
    lookingForAJob: LookingForAJobTSType
    lookingForAJobDescription: LookingForAJobDescriptionTSType
    fullName: FullNameTSType
    photoSmall: PhotoTSType
    photoLarge: PhotoTSType
    facebook: ContactsAnyPropertyTSType
    github: ContactsAnyPropertyTSType
    instagram: ContactsAnyPropertyTSType
    mainLink: ContactsAnyPropertyTSType
    twitter: ContactsAnyPropertyTSType
    vk: ContactsAnyPropertyTSType
    website: ContactsAnyPropertyTSType
    youtube: ContactsAnyPropertyTSType
});
// ---------------------- / action creators types -----------------------------------------------------


// -------------------------------------- reducer type -------------------------------------
export type InitialStateTSType = {
    id: UserIdTSType
    status: UserStatusTSType
    aboutMe: AboutMeTSType
    lookingForAJob: LookingForAJobTSType
    lookingForAJobDescription: LookingForAJobDescriptionTSType
    fullName: FullNameTSType
    contacts: UserInfoContactsTSType
    photos: UserInfoPhotosTSType
};

export type ActionRedecerTSType = {
    type: typeof SET_USER_STATUS_INTO_STATE | typeof SET_USER_INFO_INTO_STATE
    id: UserIdTSType
    status: UserStatusTSType
    aboutMe: AboutMeTSType
    lookingForAJob: LookingForAJobTSType
    lookingForAJobDescription: LookingForAJobDescriptionTSType
    fullName: FullNameTSType
    photoSmall: PhotoTSType
    photoLarge: PhotoTSType
    facebook: ContactsAnyPropertyTSType
    github: ContactsAnyPropertyTSType
    instagram: ContactsAnyPropertyTSType
    mainLink: ContactsAnyPropertyTSType
    twitter: ContactsAnyPropertyTSType
    vk: ContactsAnyPropertyTSType
    website: ContactsAnyPropertyTSType
    youtube: ContactsAnyPropertyTSType
};

export type NotOwnerUserDataTStype = (state: InitialStateTSType, action: ActionRedecerTSType) => InitialStateTSType
// -------------------------------------- / reducer type -----------------------------------


// ------------------------------------ Selectors Types -------------------------------------
// type CurrentStateTSType = {
//     notOwnerUserData: InitialStateTSType
// }
export type NotOwnerStatusSelectorTSType = (state: RootReducerSateTSType) => UserStatusTSType
export type NotOwnerFullNameSelectorTSType = (state: RootReducerSateTSType) => FullNameTSType
export type NotOwnerSmallPhotoSelectorTSType = (state: RootReducerSateTSType) => PhotoTSType
export type NotOwnerIdSelectorTSType = (state: RootReducerSateTSType) => UserIdTSType
export type NotOwnerLookingForAJobSelectorTSType = (state: RootReducerSateTSType) => LookingForAJobTSType
export type NotOwnerLookingForAJobDescriptionSelectorTSType = (state: RootReducerSateTSType) => LookingForAJobDescriptionTSType
export type NotOwnerAboutMeSelectorTSType = (state: RootReducerSateTSType) => AboutMeTSType
export type NotOwnerContactsSelectorTSType = (state: RootReducerSateTSType) => UserInfoContactsTSType
// ------------------------------------ / Selectors Types -----------------------------------