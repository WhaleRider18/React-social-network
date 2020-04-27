import React from 'react';

import d from './../Dialog.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = "/dialog/" + props.id;

    return (
        <NavLink to={path} className={d.dialogfrom}>
            <h5>{props.name}</h5>
            <small>{props.status}</small>
        </NavLink>
    );
}

export default DialogItem;