import React from 'react';
import u from './users.module.css';
import userAvatar from '../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pagesCount = props.totalUsersCount / props.pageSize;

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    } 

    return(
        <div className='card'>
            <div className='cardHeader'><h5>Users List</h5></div>
                <div className='cardContent'>
                {
                    props.UsersData.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={ u.photos.small != null ? u.photos.small : userAvatar} alt='1' width='100' height='100' />
                            </NavLink>
                        </div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some( id => id === u.id)} className='btn' onClick={() => {

                                props.unfollowUser(u.id);
                                
                                }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some( id => id === u.id)} className='btn' onClick={() => {

                                props.followUser(u.id);
                                
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    </div>)
                }
                <div>
                    {pages.map( p => {
                        return <div key={p}><span className={props.currentPage === p ? u.selectedPage : u.page} onClick={(e) => { props.onPageChanged(p) }}>{p}</span><br /></div>
                    })}
                </div>
            </div>
        </div>
    )   
}

export default Users;