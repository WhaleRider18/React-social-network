import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Users from './Users';
import Preloader from '../common/preloader.jsx';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

import {followUser, unfollowUser, setCurrentPage, toggleIsFollowingProgress, getUsers} from "../../redux/usersReducer";
import {getUsersDataSuperSelector, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from "../../redux/users-selectors";

class UserApiComponent extends React.Component {
    
    componentDidMount () {
            const {currentPage, pageSize} = this.props;
            this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const pageSize = this.props;
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, pageSize);
    };

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users      totalUsersCount = {this.props.totalUsersCount}
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

/*let mapStateToProps = (state) => {
    return {
        UsersData: state.usersPage.UsersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
} */ // данные, которые мы берем из store

let mapStateToProps = (state) => {
    return {
        //UsersData: getUsersData(state),
        UsersData: getUsersDataSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
} // данные, которые мы берем из store

export default compose (
    connect(mapStateToProps, {followUser, unfollowUser, setCurrentPage, toggleIsFollowingProgress, getUsers}),
    withAuthRedirect
)(UserApiComponent);