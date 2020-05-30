import React from 'react';

import p from './Profile.module.css';

import MyPostsContainer from './MyPosts/MyPostsContainer';

import ProfileInfo from './ProfileInfo';

const Profile = (props) => {

    return (
        <div className={p.profilecontent}>
            <div className="card">
                <div className="cardHeader cardHeaderImage"></div>
            </div>
            <div className="card">
                <div className="cardHeader"><h5>Profile</h5></div>
                <div className="cardContent">
                        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
            <div className="card">
                <div className="cardHeader"><h5>Posts</h5></div>
                <div className="cardContent">
                    <MyPostsContainer /*store={props.store}*/ /*PostData={props.profilePage.PostData}
                             newPostText={props.profilePage.newPostText}
                             dispatch={props.dispatch}*/ />
                </div>
            </div>
        </div>
    );
}

export default Profile;