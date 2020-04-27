const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


let initialState = {            
    DialogData : [
        { id: 1, name: 'Vincent Porter', status: "Offline" }, 
        { id: 2, name: "Mustafa Mayer", status: "Offline"}
    ],
    MessageData : [
        { id: 1, message:"Hello. How are you today? What do you wanna do today?" }, 
        { id: 2, message:"Hi" }
    ],
    newMessageText : 'Hi, how are you?'
}; 

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        
        case ADD_MESSAGE: {
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText : '',
                MessageData : [...state.MessageData, {id: 3, message: body}]
            };
        }
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessage
            };
        }
        default:
            return state;
            
    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessageActionCreator = (text) =>
            ({type: UPDATE_MESSAGE_TEXT, newMessage: text });

export default dialogsReducer;