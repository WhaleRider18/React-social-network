import {connect} from 'react-redux';
import Dialog from './Dialog';

import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogsReducer';

//import store from '../../redux/redux-store';

/*const DialogContainer = () => {

   /* let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch( addMessageActionCreator() );
    }

    let updateMessageText = (text) => {
        props.store.dispatch( updateMessageActionCreator(text) );
    } 

    return (
        <StoreContext.Consumer>
        {
            (store) =>{
                let state = store.getState();

                let addMessage = () => {
                    store.dispatch( addMessageActionCreator() );
                }
            
                let updateMessageText = (text) => {
                    store.dispatch( updateMessageActionCreator(text) );
                }

                return (
                    <Dialog addMessage={addMessage} 
                        updateMessageText={updateMessageText} 
                        DialogData={state.messagePage.DialogData}
                        MessageData={state.messagePage.MessageData} 
                        newMessageText={state.messagePage.newMessageText} />
                    )
            }
        }
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch( addMessageActionCreator() );
        },
        updateMessageText: (text) => {
            dispatch( updateMessageActionCreator(text) );
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;