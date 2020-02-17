  
import React from 'react';


import { withRouter } from 'react-router-dom';

// components
import PrivateRoute from './PrivateRoute';

import Nav from './Nav';
import FriendsList from './FriendsList';
import AddFriend from './AddFriend';

const UserProfile = props => {

    const logout = () => {
    sessionStorage.removeItem('token');
    props.history.push('/login');
  }

  return (
    <div className="profile">
      <Nav logout={logout} />

      <PrivateRoute exact path="/profile">
        <FriendsList />
      </PrivateRoute>

      <PrivateRoute exact path="/profile/addfriend">
        <AddFriend />
      </PrivateRoute>
    </div>
  )
}

//Needed to use 'withRouter' so I can access the props.history
//Could also instead use the useHistory hook.
export default withRouter(UserProfile);