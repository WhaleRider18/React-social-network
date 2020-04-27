import React from 'react';

import d from './Dialog.module.css';

import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';


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

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateMessageText(text);
    }

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
                    <div className={d.enterPost}>
                        <textarea className='formControl' onChange={onMessageChange} value={props.messagePage.newMessageText} ></textarea>
                        <button className='btn' onClick = { onAddMessage } >Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialog;