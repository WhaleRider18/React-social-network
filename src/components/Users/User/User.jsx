import React from 'react';

const User = (props) => {

    let onFollowUser = () => {
        props.followUser(props.id);
    };

    let onUnfollowUser = () => {
        props.unfollowUser(props.id);
    };
    
    return (
        <div>
            {props.name}
            {props.status}
            {props.followed 
                ? <button className='btn' onClick={onUnfollowUser} >Unfollow</button> 
                : <button className='btn' onClick={onFollowUser} >Follow</button> 
            }
        </div>
    );
}

export default User;