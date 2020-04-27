import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from '../common/preloader.jsx';

import {followUser, unfollowUser, setCurrentPage, toggleIsFollowingProgress, getUsers} from "../../redux/usersReducer";

class UserApiComponent extends React.Component {
    
    componentDidMount () {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users   totalUsersCount = {this.props.totalUsersCount}
                        pageSize = {this.props.pageSize}
                        currentPage = {this.props.currentPage}
                        UsersData = {this.props.UsersData}
                        followUser = {this.props.followUser}
                        unfollowUser = {this.props.unfollowUser}
                        onPageChanged = {this.onPageChanged}
                        ifFetching = {this.props.isFetching}
                        toggleIsFollowingProgress = {this.props.toggleIsFollowingProgress}
                        followingInProgress = {this.props.followingInProgress}
        />
        </>
    }
};

let mapStateToProps = (state) => {
    return {
        UsersData: state.usersPage.UsersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
} // данные, которые мы берем из store 

/*let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => { 
            dispatch( followUserActionCreator(userId) );
        },
        unfollowUser: (userId) => {
            dispatch( unfollowUserActionCreator(userId) );
        },
        setUsers: (users) => {
            dispatch( setUsersActionCreator(users) );
        },
        setCurrentPage: (pageNumber) => {
            dispatch( setCurrentPageActionCreator(pageNumber) );
        },
        setTotalUsersCount: (totalCount) => {
            dispatch( setTotalUsersCountActionCreator(totalCount) );
        },
        toggleIsFetching: (isFetching) => {
            dispatch( toggleIsFetchingActionCreator(isFetching) );
        }
    }
} */ 
// коллбеки, которые мы будем dispatch-ить

const UsersContainer = connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers
})(UserApiComponent); //connect избавляет от создания колбеков с необходимостью их диспатчить

export default UsersContainer;