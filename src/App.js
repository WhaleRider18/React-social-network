import React from 'react';
// import logo from './logo.svg';
import './App.css';

import store from './redux/redux-store.js';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogContainer from './components/Dialog/DialogContainer';
import UsersContainer from './components/Users/UsersContainer';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { Route } from 'react-router-dom';
import {initializeApp} from './redux/app-reducer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from './components/common/preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized){
      return <Preloader />
    }
    if (this.props.location.pathname === "/login"){
      return (
          <div className="loginPage">
            <Route path="/login" render={() => <Login /> } />
          </div>
      )
    } else {
       return (
        <div className="App">
          <HeaderContainer />
          <Navbar />
            <div className ="maincontent">
              <Route path="/profile/:userId?" render={() => <ProfileContainer /*store={props.store}*/ />} />
              <Route path="/users" render={() => <UsersContainer /> } />
              <Route /*exact*/ path="/dialog" render={ () => <DialogContainer /*store={props.store}*/ /> }
                                                                      /*messagePage={props.state.messagePage}
                                                                      dispatch={props.dispatch}*/ /*component={Dialog}*/ />
            </div>
          <Footer />
        </div>
       )
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized  
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);

let MainApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
        <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp;

