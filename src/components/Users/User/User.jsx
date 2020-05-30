import React from 'react';
import userAvatar from '../../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';

let User = ({user, followingInProgress, unfollowUser, followUser, ...props}) => {
    return(
            <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={ user.photos.small != null ? user.photos.small : userAvatar} alt='1' width='100' height='100' />
                            </NavLink>
                        </div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some( id => id === user.id)} className='btn' onClick={() => {

                                unfollowUser(user.id);
                                
                                }}>Unfollow</button>
                            : <button disabled={followingInProgress.some( id => id === user.id)} className='btn' onClick={() => {

                                followUser(user.id);
                                
                                }}>Follow</button>
                            }
                        </div>
                    </span>
            </div>
    )   
}

export default User;