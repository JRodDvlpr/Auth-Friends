import React, {useState} from 'react';

//Styling Library
import { Button, Form, Spin, Input, message, Icon} from 'antd';

import axios from 'axios';

const Login = ({history}) => {

    // Input State
    const [inputs, setInput] = useState({
        username: '',
        password: ''
        
    });

    const success = () => {
        message.success('You have logged in successfully');
    };

    // loader 
    const [isLoading, setIsLoading] = useState(false);

    // Form Input Handle
    const inputHandle = e => {
        setInput({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    // Form Submit Handle
    const loginHandle = e => {
        e.preventDefault();

        // Letting user know they are being logged in
        setIsLoading(true);

        axios.post("http://localhost:5000/api/login", inputs)
        .then(res => {
            console.log(res);
            //server should respond with a token if the payload is successful
            localStorage.setItem('token', res.data.payload);
            console.log(res)
            //redirect to profile 
            history.push('/friends');
        })
        .catch(err => console.log(Error))
    }

    

    return (

        <Form className='loginForm' onSubmit={loginHandle}>

            <h1>{isLoading ? <Spin className='spinner'/> : 'Login'}</h1>

            <div className='loginInput'>
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type='text' name='username' value={inputs.username} onChange={inputHandle} placeholder="Username" required />

            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}}/>} type='password' name='password' value={inputs.password} onChange={inputHandle} placeholder='Password' required />

            </div>

            <Button id='loginbtn' type="primary" onClick={success}icon="poweroff" htmlType="submit">Login</Button>


        </Form>
    )
}

export default Login;