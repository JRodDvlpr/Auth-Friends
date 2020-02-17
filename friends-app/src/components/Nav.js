import React from 'react';

import { withRouter, Link} from 'react-router-dom';

const Nav = ({ logout }) => {

    return (
        <div className='navBar'>
            
            {localStorage.getItem('token') && (
            <Nav>
              <Link to='/profile'>
                <button>Profile</button>
              </Link>
            </Nav>
            )}

            {localStorage.getItem('token') && (
            <Nav>
              <Link to='/addfriend'>
                <button>Add Friend</button>
              </Link>
            </Nav>
            )}
            

            <button onClick={logout}>Logout</button>

        </div>
    )
}

export default withRouter(Nav);