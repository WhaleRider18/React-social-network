import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';


let initialState = {
    PostData : [
        { id: 1, message: "Hi, this is message 1", like: "10" },
        { id: 2, message: "Hi, this is message 2", like: "3" },
        { id: 3, message: "Hi, this is message 3", like: "5" },
        { id: 4, message: "Hi, this is message 4", like: "0" },
        { id: 5, message: "Hi, this is message 5", like: "42" }
    ],
    profile : null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: {
            return {
                ...state,
                PostData: [...state.PostData, {id: 6, message: action.newPostBody, like: 0}]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                PostData: state.PostData.filter( p => p.id !== action.postId)

            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});

export const setUserProfile = (profile) =>
            ({type: SET_USER_PROFILE, profile });

export const setStatus = (status) =>
            ({type: SET_STATUS, status });

export const deletePost = (postId) =>
            ({type: DELETE_POST, postId });


export const getUsers = (userId) => async (dispatch) => {

        let response = await profileAPI.getProfile(userId);

        dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {

        let response = await profileAPI.getStatus(userId);

        dispatch(setStatus(response.data));

};

export const updateStatus = (status) => async (dispatch) => {

        let response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0 ){
             dispatch(setStatus(status));
        }

};
            
export default profileReducer;