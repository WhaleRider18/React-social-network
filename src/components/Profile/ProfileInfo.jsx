import React from 'react';
import Preloader from '../common/preloader.jsx';
import userAvatar from '../../assets/images/avatar.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import p from './Profile.module.css';

const ProfileInfo = ({profile, status, updateStatus, ...props}) => {

    if(!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={p.avatar}><img alt='avatar' src={ profile.photos.small != null ? profile.photos.small : userAvatar}/></div>
            <span>{profile.fullName}</span>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    );

}

export default ProfileInfo;