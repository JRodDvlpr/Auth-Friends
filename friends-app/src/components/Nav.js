import React from 'react';

import { withRouter } from 'react-router-dom';

const Nav = ({ logout,location, history }) => {

    return (
        <div className='navBar'>
            
            <button onClick={() => history.push('/profile')}>Profile</button>

            <button onClick={() => history.push(`${location.pathname}/addfriend`)}>Add Friend</button>       
            <button onClick={logout}>Logout</button>

        </div>
    )
}

// withRouter will pass updated match, location, and history props to the wrapped component whenever it renders 
export default withRouter(Nav);