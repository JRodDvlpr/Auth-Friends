  
import React from 'react';


import { withRouter } from 'react-router-dom';

// components
import PrivateRoute from './PrivateRoute';

import Nav from './Nav';
import FriendsList from './FriendsList';
import AddFriend from './AddFriend';

const UserProfile = props => {

    // logout will remove the token, push to history we redirect to the login page
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

// withRouter will pass updated match, location, and history props to the wrapped component whenever it renders

export default withRouter(UserProfile);