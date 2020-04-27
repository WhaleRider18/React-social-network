import React from 'react';
// import logo from './logo.svg';
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogContainer from './components/Dialog/DialogContainer';
import UsersContainer from './components/Users/UsersContainer';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { Route } from 'react-router-dom';

const App = (props) => {

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
            <Route path="/login" render={() => <Login /> } />
          </div>
        <Footer />
      </div>
  );
}

export default App;
