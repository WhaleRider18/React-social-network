import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let initialState = {
    PostData : [
        { id: 1, message: "Hi, this is message 1", like: "10" },
        { id: 2, message: "Hi, this is message 2", like: "3" },
        { id: 3, message: "Hi, this is message 3", like: "5" },
        { id: 4, message: "Hi, this is message 4", like: "0" },
        { id: 5, message: "Hi, this is message 5", like: "42" }
    ],
    newPostText : 'Post demo',
    profile : null
};

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                PostData: [...state.PostData, {id:5, message: state.newPostText, like: 0}]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText : action.newText
            };
        }
        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => 
            ({type: UPDATE_NEW_POST_TEXT, newText: text });

export const setUserProfile = (profile) =>
            ({type: SET_USER_PROFILE, profile });

export const getUsers = (userId) => {

    return (dispatch) => {

        profileAPI.getProfile(userId)
            .then(response => {
            dispatch(setUserProfile(response.data));
            });
        }
            
};
            
export default profileReducer;