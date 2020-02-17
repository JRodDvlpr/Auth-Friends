import React, {useState} from 'react';

import axios from 'axios';

const Login = ({history}) => {

    // Input State
    const [inputs, setInput] = useState({
        username: '',
        password: ''
    });

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
            history.push('/profile');
        })
        .catch(err => console.log(Error))
    }

    

    return (

        <form className='loginForm' onSubmit={loginHandle}>

            <h1>{isLoading ? 'Loggin In to your profile..' : 'Login'}</h1>

            <input type='text' name='username' value={inputs.username} onChange={inputHandle} placeholder="Username" required />

            <input type='password' name='password' value={inputs.password} onChange={inputHandle} placeholder='Password' required />

            <button>Login</button>


        </form>
    )
}

export default Login;