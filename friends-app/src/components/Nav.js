import React from 'react';

//Styling Library
import { Button} from 'antd';

import { withRouter } from 'react-router-dom';

const Nav = ({ logout,location, history }) => {

    return (
        <div className='navBar'>
            
            <div>
            <Button onClick={() => history.push('/profile')}>Profile</Button>

            <Button onClick={() => history.push(`${location.pathname}/addfriend`)}>Add Friend</Button>       
            <Button onClick={logout}>Logout</Button>
            </div>

        </div>
    )
}

// withRouter will pass updated match, location, and history props to the wrapped component whenever it renders 
export default withRouter(Nav);