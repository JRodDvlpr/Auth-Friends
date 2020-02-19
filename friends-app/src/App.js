import React from 'react';

//react-router
import {Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

// Components
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import UserProfile from './components/UserProfile';
import Landing from './components/Landing';
import Friends from './components/Friends';


const App = () => {

  
  return (
    <div className="App">


      {/* This should redirect the user if they have logged in already and have their token */}
      {   
      sessionStorage.getItem('token') ? <Redirect to="/friends" /> : null
      }
    

      <Switch>

        <PrivateRoute exact path="/friends" component={UserProfile} />
        <PrivateRoute exact path="/friends/:id" component={Friends} />
        
        <Route exact path='/login' component={Login} />
        <Route path='/' component={Landing} />
        
      </Switch>
      
    </div>
  );
}

export default App;
