import {
    SET_USERS_ARRAY_TOTAL_COUNT_ERROR_INTO_STATE, SET_CURRENT_PAGE_INTO_STATE,
    IS_PRELOADER_ACTIVE_INTO_STATE, TOOGLE_FOLLOW_USER,
    SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE, UN_SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE,
    TOOGLE_RUN_USE_EFFECT, IS_BUTTON_LOAD_MORE_USERS_CLICKED, TOOGLE_IS_FIRST_USERS_LOADED,
    SET_NUMBERS_IN_FIRST_LAST_PAGINATION_SQUARES
} from "./actionTypes";

import {
    SetUsersArrayActionCreatorTSType, SetCurrentPageActionCreatorTSType,
    SetIsPreloaderActiveActionCreatorTSType, FollowUserActionCreatorTSType,
    ToogleRunUseEffectActionCreatorTSType, ToogleIsFirstUsersLoadedActionCreatorTSType,
    SetClickedButtonIdActionCreatorTSType, UnSetClickedButtonIdActionCreatorTSType,
    IsButtonLoadMoreUsersClickedActionCreatorTSType, SetNumbersInFirstLastPaginationSquaresActionCreatorTSType
} from "./typeScriprtTypes";


export const setUsersArray: SetUsersArrayActionCreatorTSType = (usersArray, totalCount, error) => {
    return {
        type: SET_USERS_ARRAY_TOTAL_COUNT_ERROR_INTO_STATE,
        usersArray: [...usersArray],
        totalCount: totalCount,
        error: error
    }
};

export const setCurrentPage: SetCurrentPageActionCreatorTSType = (currentPage) => ({type: SET_CURRENT_PAGE_INTO_STATE, currentPage});

export const setIsPreloaderActive: SetIsPreloaderActiveActionCreatorTSType = (isActive) => ({type: IS_PRELOADER_ACTIVE_INTO_STATE, isActive});

export const followUser: FollowUserActionCreatorTSType = (userId, isFollow) => ({type: TOOGLE_FOLLOW_USER, userId, isFollow});

export const toogleRunUseEffect: ToogleRunUseEffectActionCreatorTSType = (booleanVariable) => ({type: TOOGLE_RUN_USE_EFFECT, booleanVariable});

export const toogleIsFirstUsersLoaded: ToogleIsFirstUsersLoadedActionCreatorTSType = (booleanVariable) => ({type: TOOGLE_IS_FIRST_USERS_LOADED, booleanVariable});

export const setClickedButtonId: SetClickedButtonIdActionCreatorTSType = (userId) => ({type: SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE, userId});        // чтобы показывать лоадер вместо кнопки

export const unSetClickedButtonId: UnSetClickedButtonIdActionCreatorTSType = (userId) => ({type: UN_SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE, userId});   // чтобы показывать кнопку вместо лоадера

export const isButtonLoadMoreUsersClicked: IsButtonLoadMoreUsersClickedActionCreatorTSType = (isClicked) => ({type: IS_BUTTON_LOAD_MORE_USERS_CLICKED, isClicked});   // чтобы загрузку вместо кликнтуой кнопки и наоборот

export const setNumbersInFirstLastPaginationSquares: SetNumbersInFirstLastPaginationSquaresActionCreatorTSType = (firstNumber, lastNumber) => ({
    type: SET_NUMBERS_IN_FIRST_LAST_PAGINATION_SQUARES, numberInFirstPaginationSquare: firstNumber, numberInLastPaginationSquare: lastNumber
});