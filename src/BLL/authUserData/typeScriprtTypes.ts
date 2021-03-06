import {
    LOGGED_IN_OUT_USER_DATA, SET_USER_STATUS_INTO_STATE,
    SET_USER_INFO_INTO_STATE, SET_USER_PHOTOS_INTO_STATE,
    TOOGLE_LOOKING_FOR_A_JOB, RUN_USE_EFFECT_APP_COMPONENT
} from "./actionTypes";

import { RootReducerSateTSType } from "../redux_store/redux-store";
import {
    UserIdTSType, UserLoginTSType, UserEmailTSType,
    IsUserLoggedInTStype, UserStatusTSType, RunUseEffectAppComponentTSType,
    PhotoTSType, AboutMeTSType, LookingForAJobTSType,
    LookingForAJobDescriptionTSType, FullNameTSType,
    ContactsAnyPropertyTSType
} from "../commonTSTypes";


// ---------------------- action creators types -------------------------------------------------------
export type SetUserDataPropsTSType = { userId: UserIdTSType, userLogin: UserLoginTSType, userEmail: UserEmailTSType, isUserLoggedIn: IsUserLoggedInTStype }
export type SetUserDataActionCreatorTSType = {
    type: typeof LOGGED_IN_OUT_USER_DATA
    id: UserIdTSType
    login: UserLoginTSType
    email: UserEmailTSType
    isLoggedIn: IsUserLoggedInTStype
};

// export type SetUserStatusIntoStateActionCreatorTSType = (userStatus: UserStatusTSType) => ({
//     type: typeof SET_USER_STATUS_INTO_STATE
//     status: UserStatusTSType
// });

export type SetUserStatusIntoStateActionCreatorTSType = {
    type: typeof SET_USER_STATUS_INTO_STATE
    status: UserStatusTSType
};

// export type SetRunUseEffectAppComponentActionCreatorTSType = (booleanVar: RunUseEffectAppComponentTSType) => ({
//     type: typeof RUN_USE_EFFECT_APP_COMPONENT,
//     runUseEffectAppComponent: RunUseEffectAppComponentTSType,
// });

export type SetRunUseEffectAppComponentActionCreatorTSType = {
    type: typeof RUN_USE_EFFECT_APP_COMPONENT,
    runUseEffectAppComponent: RunUseEffectAppComponentTSType,
};

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
export type userInfoTSType = {
    aboutMe: AboutMeTSType
    lookingForAJob: LookingForAJobTSType
    lookingForAJobDescription: LookingForAJobDescriptionTSType
    fullName: FullNameTSType
    photos: UserInfoPhotosTSType
    contacts: UserInfoContactsTSType
};

// export type SetUserInfoIntoStateActionCreatorTSType = (arg0: userInfoTSType) => ({
//     type: typeof SET_USER_INFO_INTO_STATE
//     aboutMe: typeof arg0.aboutMe
//     lookingForAJob: typeof arg0.lookingForAJob
//     lookingForAJobDescription: typeof arg0.lookingForAJobDescription
//     fullName: typeof arg0.fullName
//     photoSmall: typeof arg0.photos.small
//     photoLarge: typeof arg0.photos.large
//     facebook: typeof arg0.contacts.facebook
//     github: typeof arg0.contacts.github
//     instagram: typeof arg0.contacts.instagram
//     mainLink: typeof arg0.contacts.mainLink
//     twitter: typeof arg0.contacts.twitter
//     vk: typeof arg0.contacts.vk
//     website: typeof arg0.contacts.website
//     youtube: typeof arg0.contacts.youtube
// });

export type SetUserInfoIntoStateActionCreatorTSType = {
    type: typeof SET_USER_INFO_INTO_STATE
    aboutMe: null | string
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: null | string
    photoSmall: null | string
    photoLarge: null | string
    facebook: null | string
    github: null | string
    instagram: null | string
    mainLink: null | string
    twitter: null | string
    vk: null | string
    website: null | string
    youtube: null | string
};


// export type SetUserPhotosIntoStateActionCreatorTSType = (arg0: UserInfoPhotosTSType) => ({
//     type: typeof SET_USER_PHOTOS_INTO_STATE
//     photoSmall: typeof arg0.small
//     photoLarge: typeof arg0.large
// });

export type SetUserPhotosIntoStateActionCreatorTSType = {
    type: typeof SET_USER_PHOTOS_INTO_STATE
    photoSmall: null | string
    photoLarge: null | string
};

// export type ToogleLoockingForAJobInStateActionCreatorTSType = (isLookingForAJob: LookingForAJobTSType) => ({
//     type: typeof TOOGLE_LOOKING_FOR_A_JOB,
//     lookingForAJob: typeof isLookingForAJob
// });

export type ToogleLoockingForAJobInStateActionCreatorTSType = {
    type: typeof TOOGLE_LOOKING_FOR_A_JOB,
    lookingForAJob: boolean
};
// ---------------------- / action creators types -----------------------------------------------------


// -------------------------------------- reducer type -------------------------------------
export type InitialStateTSType = {
    runUseEffectAppComponent: RunUseEffectAppComponentTSType          // для того чтобы в useEffect в App.js делать запрос на сервер авторизован ли пользователь(me) только 1 раз при логине и логауте. useEffect делает 2 раза так как зависит от свойства стейта isLoggedIn, а при авторизации и логауте оно меняется и получается запрос уходит 2 раза
    isLoggedIn: IsUserLoggedInTStype
    id: UserIdTSType
    login: UserLoginTSType
    email: UserEmailTSType
    status: UserStatusTSType
    aboutMe: AboutMeTSType
    lookingForAJob: LookingForAJobTSType
    lookingForAJobDescription: LookingForAJobDescriptionTSType
    fullName: FullNameTSType
    contacts: UserInfoContactsTSType
    photos: UserInfoPhotosTSType
};

// export type ActionRedecerTSType = {
//     type: typeof LOGGED_IN_OUT_USER_DATA | typeof SET_USER_STATUS_INTO_STATE | typeof SET_USER_INFO_INTO_STATE | typeof SET_USER_PHOTOS_INTO_STATE | typeof TOOGLE_LOOKING_FOR_A_JOB | typeof RUN_USE_EFFECT_APP_COMPONENT,
//     id: UserIdTSType
//     login: UserLoginTSType
//     email: UserEmailTSType
//     isLoggedIn: IsUserLoggedInTStype
//     status: UserStatusTSType
//     runUseEffectAppComponent: RunUseEffectAppComponentTSType
//     lookingForAJob: LookingForAJobTSType
//     lookingForAJobDescription: LookingForAJobDescriptionTSType
//     aboutMe: AboutMeTSType
//     fullName: FullNameTSType
//     facebook: ContactsAnyPropertyTSType
//     github: ContactsAnyPropertyTSType
//     instagram: ContactsAnyPropertyTSType
//     mainLink: ContactsAnyPropertyTSType
//     twitter: ContactsAnyPropertyTSType
//     vk: ContactsAnyPropertyTSType
//     website: ContactsAnyPropertyTSType
//     youtube: ContactsAnyPropertyTSType
//     photoSmall: PhotoTSType
//     photoLarge: PhotoTSType
// };

export type ActionRedecerTSType = SetUserDataActionCreatorTSType | SetUserStatusIntoStateActionCreatorTSType
                                    | SetRunUseEffectAppComponentActionCreatorTSType | SetUserInfoIntoStateActionCreatorTSType | SetUserPhotosIntoStateActionCreatorTSType
                                    | ToogleLoockingForAJobInStateActionCreatorTSType

export type AuthUserDataReducerTStype = (state: InitialStateTSType, action: ActionRedecerTSType) => InitialStateTSType
// -------------------------------------- / reducer type -----------------------------------


// ------------------------------------ Selectors Types -------------------------------------
// type CurrentStateTSType = {
//     authUserData: InitialStateTSType
// }
export type IsLoggedInSelectorTSType = (state: RootReducerSateTSType) => IsUserLoggedInTStype
export type OwnerStatusSelectorTSType = (state: RootReducerSateTSType) => UserStatusTSType
export type OwnerFullNameSelectorTSType = (state: RootReducerSateTSType) => FullNameTSType
export type OwnerPhotoSelectorTSType = (state: RootReducerSateTSType) => PhotoTSType
export type OwnerIdSelectorTSType = (state: RootReducerSateTSType) => UserIdTSType
export type OwnerLookingForAJobSelectorTSType = (state: RootReducerSateTSType) => LookingForAJobTSType
export type OwnerLookingForAJobDescriptionSelectorTSType = (state: RootReducerSateTSType) => LookingForAJobDescriptionTSType
export type OwnerAboutMeSelectorTSType = (state: RootReducerSateTSType) => AboutMeTSType
export type OwnerContactsSelectorTSType = (state: RootReducerSateTSType) => UserInfoContactsTSType
export type RunUseEffectAppComponentSelectorTSType = (state: RootReducerSateTSType) => RunUseEffectAppComponentTSType
// ------------------------------------ / Selectors Types -----------------------------------


// ---------------------------------- ThunkCreators -----------------------------------------
export type GetStateTSType = () => RootReducerSateTSType
// ---------------------------------- / ThunkCreators ---------------------------------------