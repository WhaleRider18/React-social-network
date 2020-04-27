import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getUsers} from "../../redux/profileReducer";
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if(!userId){
            userId = 2;
        }

        this.props.getUsers(userId);
    }

    render(){
        
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUsers})(WithUrlDataContainerComponent);