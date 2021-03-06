import {
    UsersArraySelectorTSType, TotalUsersCountSelectorTSType,
    UsersErrorSelectorTSType, UsersCurrentPageSelectorTSType,
    IsPreloaderActiveSelectorTSType, IdClickedFollowButtonsArrayTSType,
    CountOfShownUsersSelectorTSType,
    NumberInFirstPaginationSquareSelectorTSType, NumberInLastPaginationSquareSelectorTSType,
    RunUseEffectSelectorTSType, IsFirstUsersLoadedSelectorTSType,
    IsButtonLoadMoreUsersClickedSelectorTSType
} from "./typeScriprtTypes";

export const getUsersArraySelector: UsersArraySelectorTSType =  (state) => {
    return state.users.items;
}

export const getTotalUsersCountSelector: TotalUsersCountSelectorTSType =  (state) => {
    return state.users.totalCount;
}

export const getUsersErrorSelector: UsersErrorSelectorTSType =  (state) => {
    return state.users.error;
}

export const getUsersCurrentPageSelector: UsersCurrentPageSelectorTSType =  (state) => {
    return state.users.currentPage;
}

export const getIsPreloaderActiveSelector: IsPreloaderActiveSelectorTSType =  (state) => {
    return state.users.isPreloaderActive;
}

export const getIdClickedFollowButtonsArray: IdClickedFollowButtonsArrayTSType =  (state) => {
    return state.users.clickedButtonsIds;
}

export const getRunUseEffect: RunUseEffectSelectorTSType =  (state) => {
    return state.users.runUseEffectInUsersPageContainer;
}

export const getIsFirstUsersLoaded: IsFirstUsersLoadedSelectorTSType =  (state) => {
    return state.users.isFirstUsersLoaded;
}

export const getIsButtonLoadMoreUsersClicked: IsButtonLoadMoreUsersClickedSelectorTSType =  (state) => {
    return state.users.isButtonLoadMoreUsersClicked;
}

export const getCountOfShownUsers: CountOfShownUsersSelectorTSType =  (state) => {
    return state.users.countOfShownUsers;
}

export const getNumberInFirstPaginationSquare: NumberInFirstPaginationSquareSelectorTSType =  (state) => {
    return state.users.numberInFirstPaginationSquare;
}

export const getNumberInLastPaginationSquare: NumberInLastPaginationSquareSelectorTSType =  (state) => {
    return state.users.numberInLastPaginationSquare;
}