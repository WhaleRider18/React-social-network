import React from 'react';
import {Field, reduxForm} from 'redux-form';

import d from './Dialog.module.css';

import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import { Redirect } from 'react-router-dom';
import {FormControl} from '../../components/common/FormControls/FormControls';
import {required, maxLengthCreator} from '../../utils/validators/validators';


const Dialog = (props) => {

    let DialogElements = 
        props.messagePage.DialogData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} status={dialog.status} /> );

    let Messages = 
        props.messagePage.MessageData.map ( messages => <DialogMessage message={messages.message} key={messages.id} /> );

    /*[
        <DialogItem id={DialogData[0].id} name={DialogData[0].name} status={DialogData[0].status} />,
        <DialogItem id={DialogData[1].id} name={DialogData[1].name} status={DialogData[1].status} />
    ];*/

    //let newDialogElement = React.createRef(); // создаем ссылку

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    if( !props.isAuth ) return <Redirect to={'/login'} />; 

    return (
        <div className={d.dialogcontent}>
            <div className='card'>
                <div className='cardHeader'><h5>Dialog List</h5></div>
                <div className='cardContent'>
                    {DialogElements}
                </div>
            </div>
            <div className='card'>
                <div className='cardHeader'><h5>Dialog Messages</h5></div>
                <div className='cardContent'>
                    {Messages}
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}

let maxlength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form className={d.enterPost} onSubmit={props.handleSubmit}>
            <Field 
                component={FormControl} 
                types={'textarea'}
                name={'newMessageBody'} 
                placeholder={"Enter your message"}
                validate={[ required, maxlength50 ]}/>
            <button className='btn'>Send</button>
        </form>
    )
} 

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialog;