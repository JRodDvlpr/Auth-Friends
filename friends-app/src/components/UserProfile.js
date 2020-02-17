import React from 'react';

//react-router
import {withRouter} from 'react-router-dom';

// components
import PrivateRoute from './PrivateRoute';

import FriendsList from './FriendsList';
import AddFriend from './AddFriend';

const UserProfile = props => {

   

    return (
        <div className='userprofile'>

            
            <PrivateRoute exact path='/profile'>
                <FriendsList />
            </PrivateRoute>

            <PrivateRoute exact path="profile/addfriend" component={AddFriend}>
               
            </PrivateRoute>
        </div>
    )
}


export default withRouter(UserProfile);
