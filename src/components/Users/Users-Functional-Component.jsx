import React from 'react';
import * as axios from 'axios';

import User from './User/User';

const Users = (props) => {

    let getUsers = () => {
        if(props.UsersData.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger;
                props.setUsers(response.data.items);
            }); 
        };
    };

    let Users = 
    props.UsersData.map( u => <User
                                        followUser={props.followUser}
                                        unfollowUser={props.unfollowUser}
                                        followed= {u.followed}
                                        name = {u.name} 
                                        status= {u.status} 
                                        id={u.id} 
                                        key={u.id} /> );

    return (
            <div className='card'>
                <div className='cardHeader'><h5>Users List</h5></div>
                <div className='cardContent'>
                    <button className='btn' onClick={getUsers}>Get Useps</button>
                    {Users}
                </div>
            </div>
    );

    debugger;
};

export default Users;