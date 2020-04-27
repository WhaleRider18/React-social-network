import React from 'react';
import Preloader from '../common/preloader.jsx';

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div><img alt="avatar" src={props.profile.photos.small} /></div>
            <span>{props.profile.fullName}</span>
        </div>
    );

}

export default ProfileInfo;