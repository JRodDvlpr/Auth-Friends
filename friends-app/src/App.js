import React from 'react';

//react-router
import {Route, Switch } from 'react-router-dom';

import './App.css';

// Components
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
// import AddFriend from './components/AddFriend';
import Nav from './components/Nav';




function App() {

  
  return (
    <div className="App">
      <Nav />

      
        <Switch>
        <PrivateRoute exact path='/profile' component={UserProfile}>
        </PrivateRoute>

        <Route exact path='/login' component={Login}/>
        </Switch>
      
    </div>
  );
}

export default App;
