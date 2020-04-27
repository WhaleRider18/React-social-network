import React from 'react';

import d from './../Dialog.module.css';

const DialogMessage = (props) => {
    return (
        <div className={d.item}>
            <p>{props.message}</p>
        </div>
    );
}

export default DialogMessage;