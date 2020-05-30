const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {            
    DialogData : [
        { id: 1, name: 'Vincent Porter', status: "Offline" }, 
        { id: 2, name: "Mustafa Mayer", status: "Offline"}
    ],
    MessageData : [
        { id: 1, message:"Hello. How are you today? What do you wanna do today?" }, 
        { id: 2, message:"Hi" }
    ]
}; 

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        
        case ADD_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                MessageData : [...state.MessageData, {id: 3, message: body}]
            };
        }
        default:
            return state;
            
    }

}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;