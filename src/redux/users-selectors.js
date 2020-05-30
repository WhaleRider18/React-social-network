import { createSelector } from "reselect";

export const getUsersData = (state) => {
    return state.usersPage.UsersData;
}

export const getUsersDataSelector = (state) => {
    return getUsersData().filter( u => true );
}

export const getUsersDataSuperSelector = createSelector(getUsersData, (usersData) => {
    return usersData.filter(u => true);
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}