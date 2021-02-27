import {
    LOGGED_IN_OUT_USER_DATA, SET_USER_STATUS_INTO_STATE,
    SET_USER_INFO_INTO_STATE, SET_USER_PHOTOS_INTO_STATE,
    TOOGLE_LOOKING_FOR_A_JOB, RUN_USE_EFFECT_APP_COMPONENT
} from "./actionTypes";
import {
    SetUserDataActionCreatorTSType, SetUserStatusIntoStateActionCreatorTSType,
    SetRunUseEffectAppComponentActionCreatorTSType, SetUserInfoIntoStateActionCreatorTSType,
    SetUserPhotosIntoStateActionCreatorTSType, ToogleLoockingForAJobInStateActionCreatorTSType, 
    SetUserDataPropsTSType
} from "./typeScriprtTypes";

export const setUserData = ({ userId, userLogin, userEmail, isUserLoggedIn }: SetUserDataPropsTSType): SetUserDataActionCreatorTSType => {
    return {
        type: LOGGED_IN_OUT_USER_DATA,
        id: userId,
        login: userLogin,
        email: userEmail,
        isLoggedIn: isUserLoggedIn
    }
};

export const setUserStatusIntoState: SetUserStatusIntoStateActionCreatorTSType = (userStatus) => ({ type: SET_USER_STATUS_INTO_STATE, status: userStatus });

export const setRunUseEffectAppComponent: SetRunUseEffectAppComponentActionCreatorTSType = (booleanVar) => ({ type: RUN_USE_EFFECT_APP_COMPONENT, runUseEffectAppComponent: booleanVar });

export const setUserInfoIntoState: SetUserInfoIntoStateActionCreatorTSType = (userInfo) => {
    return {
        type: SET_USER_INFO_INTO_STATE,
        aboutMe: userInfo.aboutMe,
        lookingForAJob: userInfo.lookingForAJob,
        lookingForAJobDescription: userInfo.lookingForAJobDescription,
        fullName: userInfo.fullName,
        photoSmall: userInfo.photos.small,
        photoLarge: userInfo.photos.large,
        facebook: userInfo.contacts.facebook,
        github: userInfo.contacts.github,
        instagram: userInfo.contacts.instagram,
        mainLink: userInfo.contacts.mainLink,
        twitter: userInfo.contacts.twitter,
        vk: userInfo.contacts.vk,
        website: userInfo.contacts.website,
        youtube: userInfo.contacts.youtube
    }
}

export const setUserPhotosIntoState: SetUserPhotosIntoStateActionCreatorTSType = (photos) => {
    return {
        type: SET_USER_PHOTOS_INTO_STATE,
        photoSmall: photos.small,
        photoLarge: photos.large
    }
}

export const toogleLoockingForAJobInState: ToogleLoockingForAJobInStateActionCreatorTSType = (isLookingForAJob) => {
    return {
        type: TOOGLE_LOOKING_FOR_A_JOB,
        lookingForAJob: isLookingForAJob
    }
}