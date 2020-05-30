import React from 'react';
import Paginations from '../common/Paginations/Paginations';
import User from './User/User';
import u from './users.module.css';

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, UsersData, ...props}) => {

    return(
        <div className='card'>
            <div className='cardHeader'><h5>Users List</h5></div>
            <div className='cardContent'>
                <div className={u.users}>
                {
                    UsersData.map( u => <User 
                                            user={u} 
                                            key={u.id}
                                            followingInProgress={props.followingInProgress}
                                            unfollowUser={props.unfollowUser}
                                            followUser={props.followUser} /> )
                }
                </div>
                <Paginations 
                    currentPage = {currentPage} 
                    onPageChanged = {onPageChanged} 
                    totalUsersCount={totalUsersCount} 
                    pageSize = {pageSize} />
            </div>
        </div>
    )   
}

export default Users;