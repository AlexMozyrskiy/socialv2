// import {
//     SET_USER_STATUS_INTO_STATE,
//     SET_USER_INFO_INTO_STATE
// } from "./notOwnerUserData/actionTypes";

// -------------------------- типы которые будут использоваться несколько раз вынесем в один тип -----------------------
    // ------------- authUserData ---------------------
    export type UserIdTSType = null | number
    export type UserLoginTSType = null | string
    export type UserEmailTSType = null | string
    export type IsUserLoggedInTStype = boolean
    export type UserStatusTSType = null | string
    export type RunUseEffectAppComponentTSType = boolean
    export type PhotoTSType = null | string
    export type AboutMeTSType = null | string
    export type LookingForAJobTSType = boolean
    export type LookingForAJobDescriptionTSType = null | string
    export type FullNameTSType = null | string
    export type ContactsAnyPropertyTSType = null | string
    // ------------- / authUserData -------------------

    // ------------- header ---------------------
    export type IsLoginButtonClickedTSType = boolean
    export type IsSearchButtonClickedTSType = boolean
    // ------------- / header -------------------

    // ------------- initializedApp ---------------------
    export type IsAppInitializedTSType = boolean
    // ------------- / initializedApp -------------------

    // ------------- loginModalWindow ---------------------
    export type ISModalLoginWindowActiveTSType = boolean
    export type IsCaptchActiveTSType = boolean
    export type CaptchaURLTSType = string | null
    export type ResponseErrorTextTSType = string | null
    export type IsLoginRequirementTSType = boolean
    // ------------- / loginModalWindow -------------------

    export type UserInfoPhotosTSType = { small: PhotoTSType, large: PhotoTSType }

    export type UserInfoContactsTSType = {
        facebook: ContactsAnyPropertyTSType
        github: ContactsAnyPropertyTSType
        instagram: ContactsAnyPropertyTSType
        mainLink: ContactsAnyPropertyTSType
        twitter: ContactsAnyPropertyTSType
        vk: ContactsAnyPropertyTSType
        website: ContactsAnyPropertyTSType
        youtube: ContactsAnyPropertyTSType
    }

    export type IsOwnerProfilePageSaveChangesButtonClicked = boolean

    // ---------------------- users --------------------------
    export type UniqueUrlNameTSType = null | string
    export type FollowedTSType = boolean
    export type UserTSType = {
        name: FullNameTSType
        id: UserIdTSType
        uniqueUrlName: UniqueUrlNameTSType
        photos: UserInfoPhotosTSType
        status: UserStatusTSType
        followed: FollowedTSType
    }
    export type UsersArrayTSType = Array<UserTSType>
    
    export type TotalCountTSType = number
    export type ErrorTSType = null | string
    export type CurrentPageTSType = number
    export type IsPreloaderActiveTSType = boolean
    export type IsFollowTSType = boolean
    export type FirstNumberTSType = number
    export type LastNumberTSType = number
    export type CountOfShownUsersTSType = number
    export type IsRunUseEffectTSType = boolean
    export type IsFirstUsersLoadedTSType = boolean
    export type IsButtonLoadMoreUsersClickedTSType = boolean
    // ---------------------- / users ------------------------

// -------------------------- / типы которые будут использоваться несколько раз вынесем в один тип ---------------------