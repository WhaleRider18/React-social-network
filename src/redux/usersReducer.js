import {usersAPI} from '../api/api';
import {updateObjectInArray} from '../utils/object-helpers';

const FOLLOW = 'FOLLOW';    
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


let initialState = {

    UsersData : [
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

};

const usersReducer = (state = initialState, action) => {

    switch(action.type){
        case FOLLOW : {
            return {
                ...state,
                UsersData: updateObjectInArray(state.UsersData, action.userId, 'id', { followed: true } )
            }; 
        }
        case UNFOLLOW : {
            return {
                ...state,
                UsersData: updateObjectInArray(state.UsersData, action.userId, 'id', { followed: false } )
            }; 
        }
        case SET_USERS : {
            return { ...state, UsersData: action.users }
        }
        case SET_CURRENT_PAGE : {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT : {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case TOGGLE_IS_FETCHING : {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return { 
                ...state, 
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId] 
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});

export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING , isFetching});

export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (page, pageSize) => {

    return async (dispatch) => {
   
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
    }

};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator ) => {

    dispatch(toggleIsFollowingProgress(true, userId));

    let responce = await apiMethod(userId);

    if(responce.data.resultCode === 0){
        dispatch(actionCreator(userId))
    }

    dispatch(toggleIsFollowingProgress(false, userId));

}

export const followUser = (userId) => {

    return async (dispatch) => {
        
        let apiMethod =  usersAPI.followUserAPI.bind(usersAPI);
        let actionCreator = followSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);

    }
};

export const unfollowUser = (userId) => {

    return async (dispatch) => {

        let apiMethod =  usersAPI.unfollowUserAPI.bind(usersAPI);
        let actionCreator = unfollowSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);

    }

};


            
export default usersReducer;