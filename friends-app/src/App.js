import React from 'react';

//react-router
import {Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

// Components
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
// import AddFriend from './components/AddFriend';
// import Nav from './components/Nav';





const App = () => {

  
  return (
    <div className="App">


      {/* This should redirect the user if they have logged in already and have their token */}
      {   
      sessionStorage.getItem('token') ? <Redirect to="/profile" /> : null
      }
    

      <Switch>
        <PrivateRoute path="/profile">
          <UserProfile />
        </PrivateRoute>

        <Route path='/' component={Login} />
      </Switch>
      
    </div>
  );
}

export default App;
