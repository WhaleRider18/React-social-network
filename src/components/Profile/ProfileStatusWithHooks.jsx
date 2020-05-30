import React, {useState, useEffect} from 'react';
import p from './Profile.module.css';

const ProfileStatusWithHooks = (props) => {

        let [editMode, setEditMode] = useState(false);
        let [status, setStatus] = useState(props.status);

        useEffect( () => {
            setStatus(props.status);
        }, [props.status]);

        const activateEditMode = () => {
            setEditMode(true);
        }

        const deactivateEditMode = () => {
            setEditMode(false);
            props.updateStatus(status);
        }

        const onStatusChange = (e) => {
            setStatus( e.currentTarget.value );
        }

        return (
            <div className={p.status}>
                { !editMode &&
                    <div>
                        <span onDoubleClick={ activateEditMode } >{props.status || "No status" }</span>
                    </div>
                }
                { editMode &&
                    <div>
                        <input 
                            autoFocus={true}
                            onChange={onStatusChange}
                            value={status}
                            onBlur={ deactivateEditMode }
                            className='formControl' />
                    </div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks;