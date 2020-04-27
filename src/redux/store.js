import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let store = {
    _state : {
        profilePage : {
            PostData : [
                { id: 1, message: "Hi, this is message 1", like: "10" },
                { id: 2, message: "Hi, this is message 2", like: "3" },
                { id: 3, message: "Hi, this is message 3", like: "5" },
                { id: 4, message: "Hi, this is message 4", like: "0" },
                { id: 5, message: "Hi, this is message 5", like: "42" }
            ],
            newPostText : 'trah'
        },
        messagePage : {
            DialogData : [
                { id: 1, name: 'Vincent Porter', status: "Offline" }, 
                { id: 2, name: "Mustafa Mayer", status: "Offline"}
            ],
            MessageData : [
                { id: 1, message:"Hello. How are you today? What do you wanna do today?" }, 
                { id: 2, message:"Hi" }
            ],
            newMessageText : 'Hi, how are you?'
        },
    },
    getState(){                 //получить state
        return this._state; 
    },
    _callSubscriber() {         //подписаться (ререндр дерева)
        console.log('State was changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer; // набюдатель, паттерн //publiser-subscriber по этому же паттерну работает addEventListener
    },

    dispatch(action) {
        // { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);

        this._callSubscriber(this._state);

        /*if ( action.type === ADD_POST ) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.PostData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if ( action.type === UPDATE_NEW_POST_TEXT ) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if ( action.type === ADD_MESSAGE ){
            let newMessage = {
                id: 3,
                message: this._state.messagePage.newMessageText
            };
            this._state.messagePage.MessageData.push(newMessage);
            this._state.messagePage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_MESSAGE_TEXT){
            this._state.messagePage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }*/
    }
};

//export const addPostActionCreator = () => {
//    return {type: ADD_POST};
//}

export default store;

window.store = store;


