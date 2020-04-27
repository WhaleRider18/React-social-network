import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


let initialState = {

    UsersData : [            
       /* { 
            id: 1, 
            followed: false, 
            fullName: "Dmitriy", 
            status: "I am a boss", 
            location : {city: "Minsk", country: "Belarus"} 
        },
        { 
            id: 2, 
            followed: true, 
            fullName: "Sasha", 
            status: "I am a boss too", 
            location : {city: "Moscow", country: "Russia"} 
        },
        { 
            id: 3, 
            followed: false, 
            fullName: "Andrew", 
            status: "I am a boss three", 
            location : {city: "Kiev", country: "Ukraine"} 
        } */
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
                UsersData: state.UsersData.map( u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u;
                })
            }; 
        }
        case UNFOLLOW : {
            return {
                ...state,
                UsersData: state.UsersData.map( u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u;
                })
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

export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {
   
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }

};

export const followUser = (userId) => {

    return (dispatch) => {
   
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.followUserAPI(userId)
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    }
};

export const unfollowUser = (userId) => {

    return (dispatch) => {
   
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unfollowUserAPI(userId)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    }
};


            
export default usersReducer;