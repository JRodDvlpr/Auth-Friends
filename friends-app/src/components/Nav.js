import React from 'react';

//Styling Library
import { Button} from 'antd';

import { withRouter } from 'react-router-dom';

const Nav = ({ logout}) => {

    return (
        <div className='navBar'>
            
            <div className="navbtn">
           
            <Button onClick={logout}>Logout</Button>
            </div>

        </div>
    )
}

// withRouter will pass updated match, location, and history props to the wrapped component whenever it renders 
export default withRouter(Nav);