import React from 'react'
import {Link} from 'react-router-dom';

//Styling  Library
import { Button } from 'antd';

const Landing = () => {


    return(

        <div className="landingPage">
            <h1>Welcome!</h1>

            <div>
            <Link to='/login'>
            <Button>Log In</Button>
            </Link>
            </div>
        </div>
    )
}

export default Landing;