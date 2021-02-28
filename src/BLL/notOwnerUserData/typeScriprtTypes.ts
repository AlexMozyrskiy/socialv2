import {
    SET_USER_STATUS_INTO_STATE,
    SET_USER_INFO_INTO_STATE
} from "./actionTypes";

// -------------------------- типы которые будут использоваться несколько раз вынесем в один тип -----------------------
export type UserIdTSType = null | number
type UserLoginTSType = null | string
type UserEmailTSType = null | string
type IsUserLoggedInTStype = boolean
export type UserStatusTSType = null | string
type RunUseEffectAppComponentTSType = boolean
export type PhotoTSType = null | string
type AboutMeTSType = null | string
type LookingForAJobTSType = boolean
type LookingForAJobDescriptionTSType = null | string
type FullNameTSType = null | string
type ContactsAnyPropertyTSType = null | string

type UserInfoPhotosTSType = { small: PhotoTSType, large: PhotoTSType }
type UserInfoContactsTSType = {
    facebook: ContactsAnyPropertyTSType
    github: ContactsAnyPropertyTSType
    instagram: ContactsAnyPropertyTSType
    mainLink: ContactsAnyPropertyTSType
    twitter: ContactsAnyPropertyTSType
    vk: ContactsAnyPropertyTSType
    website: ContactsAnyPropertyTSType
    youtube: ContactsAnyPropertyTSType
}

type UserInfoTSType = {
    type: typeof SET_USER_STATUS_INTO_STATE | typeof SET_USER_INFO_INTO_STATE
    userId: UserIdTSType
    aboutMe: AboutMeTSType
    lookingForAJob: LookingForAJobTSType
    lookingForAJobDescription: LookingForAJobDescriptionTSType
    fullName: FullNameTSType
    photos: UserInfoPhotosTSType
    contacts: UserInfoContactsTSType
}
// -------------------------- / типы которые будут использоваться несколько раз вынесем в один тип ---------------------


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
type CurrentStateTSType = {
    notOwnerUserData: InitialStateTSType
}
export type NotOwnerStatusSelectorTSType = (state: CurrentStateTSType) => UserStatusTSType
export type NotOwnerFullNameSelectorTSType = (state: CurrentStateTSType) => FullNameTSType
export type NotOwnerSmallPhotoSelectorTSType = (state: CurrentStateTSType) => PhotoTSType
export type NotOwnerIdSelectorTSType = (state: CurrentStateTSType) => UserIdTSType
export type NotOwnerLookingForAJobSelectorTSType = (state: CurrentStateTSType) => LookingForAJobTSType
export type NotOwnerLookingForAJobDescriptionSelectorTSType = (state: CurrentStateTSType) => LookingForAJobDescriptionTSType
export type NotOwnerAboutMeSelectorTSType = (state: CurrentStateTSType) => AboutMeTSType
export type NotOwnerContactsSelectorTSType = (state: CurrentStateTSType) => UserInfoContactsTSType
// ------------------------------------ / Selectors Types -----------------------------------