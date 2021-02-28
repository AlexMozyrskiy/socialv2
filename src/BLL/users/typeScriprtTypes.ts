import {
    SET_USERS_ARRAY_TOTAL_COUNT_ERROR_INTO_STATE, SET_CURRENT_PAGE_INTO_STATE,
    IS_PRELOADER_ACTIVE_INTO_STATE, TOOGLE_FOLLOW_USER,
    SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE, UN_SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE,
    TOOGLE_RUN_USE_EFFECT, IS_BUTTON_LOAD_MORE_USERS_CLICKED, TOOGLE_IS_FIRST_USERS_LOADED,
    SET_NUMBERS_IN_FIRST_LAST_PAGINATION_SQUARES
} from "./actionTypes";

import { UserIdTSType, PhotoTSType, UserStatusTSType } from "../notOwnerUserData/typeScriprtTypes";

// -------------------------- типы которые будут использоваться несколько раз вынесем в один тип -----------------------
type UserInfoPhotosTSType = { small: PhotoTSType, large: PhotoTSType }
type NameTSType = null | string
type UniqueUrlNameTSType = null | string
type FollowedTSType = boolean

type UserTSType = {
    name: NameTSType
    id: UserIdTSType
    uniqueUrlName: UniqueUrlNameTSType
    photos: UserInfoPhotosTSType
    status: UserStatusTSType
    followed: FollowedTSType
}
type UsersArrayTSType = Array<UserTSType>

type TotalCountTSType = number
type ErrorTSType = null | string
type CurrentPageTSType = number
type IsPreloaderActiveTSType = boolean
type IsFollowTSType = boolean
type FirstNumberTSType = number
type LastNumberTSType = number
type CountOfShownUsersTSType = number
// -------------------------- / типы которые будут использоваться несколько раз вынесем в один тип ---------------------


// ---------------------- action creators types -------------------------------------------------------
export type SetUsersArrayActionCreatorTSType = (usersArray: UsersArrayTSType, totalCount: TotalCountTSType, error: ErrorTSType) => ({
    type: typeof SET_USERS_ARRAY_TOTAL_COUNT_ERROR_INTO_STATE
    usersArray: UsersArrayTSType
    totalCount: TotalCountTSType
    error: ErrorTSType
});

export type SetCurrentPageActionCreatorTSType = (currentPage: CurrentPageTSType) => ({
    type: typeof SET_CURRENT_PAGE_INTO_STATE
    currentPage: CurrentPageTSType
});

export type SetIsPreloaderActiveActionCreatorTSType = (isActive: IsPreloaderActiveTSType) => ({
    type: typeof IS_PRELOADER_ACTIVE_INTO_STATE
    isActive: IsPreloaderActiveTSType
});

export type FollowUserActionCreatorTSType = (userId: UserIdTSType, isFollow: IsFollowTSType) => ({
    type: typeof TOOGLE_FOLLOW_USER
    userId: UserIdTSType
    isFollow: IsFollowTSType
});

export type ToogleRunUseEffectActionCreatorTSType = (booleanVariable: boolean) => ({
    type: typeof TOOGLE_RUN_USE_EFFECT
    booleanVariable: boolean
});

export type ToogleIsFirstUsersLoadedActionCreatorTSType = (booleanVariable: boolean) => ({
    type: typeof TOOGLE_IS_FIRST_USERS_LOADED
    booleanVariable: boolean
});

export type SetClickedButtonIdActionCreatorTSType = (userId: UserIdTSType) => ({
    type: typeof SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE
    userId: UserIdTSType
});

export type UnSetClickedButtonIdActionCreatorTSType = (userId: UserIdTSType) => ({
    type: typeof UN_SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE
    userId: UserIdTSType
});

export type IsButtonLoadMoreUsersClickedActionCreatorTSType = (isClicked: boolean) => ({
    type: typeof IS_BUTTON_LOAD_MORE_USERS_CLICKED
    isClicked: boolean
});

export type SetNumbersInFirstLastPaginationSquaresActionCreatorTSType = (firstNumber: FirstNumberTSType, lastNumber: LastNumberTSType) => ({
    type: typeof SET_NUMBERS_IN_FIRST_LAST_PAGINATION_SQUARES
    numberInFirstPaginationSquare: FirstNumberTSType
    numberInLastPaginationSquare: LastNumberTSType
});
// ---------------------- / action creators types -----------------------------------------------------


// -------------------------------------- reducer type -------------------------------------
export type InitialStateTSType = {
    items: UsersArrayTSType

    isPreloaderActive: IsPreloaderActiveTSType
    isButtonLoadMoreUsersClicked: boolean
    currentPage: CurrentPageTSType              // используется только для работы с книпкой внизу "Sow more Users", для пагинации используется свойство созданное при помощи useState
    totalCount: TotalCountTSType                // всего юзеров на сервере
    countOfShownUsers: CountOfShownUsersTSType  // количесвто показываемых на странице юзеров, используется при GET запросе на сервер и получении значения максимально возможных показываемых квавдратиков пагинации в usersPage, также если мы на последней странице списка юзеров, не будет показываться кнопка "Sow more Users"
    error: ErrorTSType
    isFirstUsersLoaded: boolean                 // Если первые юзеры загружены то будем добавлять юзеров в стейт, в противном случае заменим initialState.items, который итзначально содержит один айтем с null, на массив с юзерами полученными в первый раз

    runUseEffectInUsersPageContainer: boolean   // введено для того чтобы: при первом рендере компонента useEffect выполняется всегда, даже если переменная пекреданная ему не поменялась. Чтобы useEffect не запускался каждый раз при рендере(переходе например с другой страницы) вводим условие при котором он булдет запускаться

    clickedButtonsIds: Array<UserIdTSType>      // массив ид по которым кликнули чтобы подписаться отписаться, чтобы показывать лоадер вместо кнопки

    numberInFirstPaginationSquare: FirstNumberTSType
    numberInLastPaginationSquare: LastNumberTSType
};

export type ActionRedecerTSType = {
    type: typeof SET_USERS_ARRAY_TOTAL_COUNT_ERROR_INTO_STATE | typeof SET_CURRENT_PAGE_INTO_STATE | typeof IS_PRELOADER_ACTIVE_INTO_STATE | typeof TOOGLE_FOLLOW_USER | typeof SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE | typeof UN_SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE | typeof TOOGLE_RUN_USE_EFFECT | typeof IS_BUTTON_LOAD_MORE_USERS_CLICKED | typeof TOOGLE_IS_FIRST_USERS_LOADED | typeof SET_NUMBERS_IN_FIRST_LAST_PAGINATION_SQUARES
    usersArray: UsersArrayTSType
    items: UsersArrayTSType

    isPreloaderActive: IsPreloaderActiveTSType
    isButtonLoadMoreUsersClicked: boolean
    currentPage: CurrentPageTSType              // используется только для работы с книпкой внизу "Sow more Users", для пагинации используется свойство созданное при помощи useState
    totalCount: TotalCountTSType                // всего юзеров на сервере
    countOfShownUsers: CountOfShownUsersTSType  // количесвто показываемых на странице юзеров, используется при GET запросе на сервер и получении значения максимально возможных показываемых квавдратиков пагинации в usersPage, также если мы на последней странице списка юзеров, не будет показываться кнопка "Sow more Users"
    error: ErrorTSType
    isFirstUsersLoaded: boolean                 // Если первые юзеры загружены то будем добавлять юзеров в стейт, в противном случае заменим initialState.items, который итзначально содержит один айтем с null, на массив с юзерами полученными в первый раз

    runUseEffectInUsersPageContainer: boolean   // введено для того чтобы: при первом рендере компонента useEffect выполняется всегда, даже если переменная пекреданная ему не поменялась. Чтобы useEffect не запускался каждый раз при рендере(переходе например с другой страницы) вводим условие при котором он булдет запускаться

    clickedButtonsIds: Array<UserIdTSType>      // массив ид по которым кликнули чтобы подписаться отписаться, чтобы показывать лоадер вместо кнопки

    numberInFirstPaginationSquare: FirstNumberTSType
    numberInLastPaginationSquare: LastNumberTSType
    
    isClicked: boolean
    booleanVariable: boolean
    isActive: boolean
    userId: UserIdTSType
    isFollow: boolean
};

export type UsersReducerTStype = (state: InitialStateTSType, action: ActionRedecerTSType) => InitialStateTSType
// -------------------------------------- / reducer type -----------------------------------


// ------------------------------------ Selectors Types -------------------------------------
type CurrentStateTSType = {
    users: InitialStateTSType
}
export type UsersArraySelectorTSType = (state: CurrentStateTSType) => UsersArrayTSType
export type TotalUsersCountSelectorTSType = (state: CurrentStateTSType) => TotalCountTSType
export type UsersErrorSelectorTSType = (state: CurrentStateTSType) => ErrorTSType
export type UsersCurrentPageSelectorTSType = (state: CurrentStateTSType) => CurrentPageTSType
export type IsPreloaderActiveSelectorTSType = (state: CurrentStateTSType) => IsPreloaderActiveTSType
export type IdClickedFollowButtonsArrayTSType = (state: CurrentStateTSType) => Array<UserIdTSType>
export type RunUseEffectTSType = (state: CurrentStateTSType) => boolean
export type IsFirstUsersLoadedTSType = (state: CurrentStateTSType) => boolean
export type IsButtonLoadMoreUsersClickedTSType = (state: CurrentStateTSType) => boolean
export type CountOfShownUsersSelectorTSType = (state: CurrentStateTSType) => CountOfShownUsersTSType
export type NumberInFirstPaginationSquareSelectorTSType = (state: CurrentStateTSType) => FirstNumberTSType
export type NumberInLastPaginationSquareSelectorTSType = (state: CurrentStateTSType) => LastNumberTSType
// ------------------------------------ / Selectors Types -----------------------------------