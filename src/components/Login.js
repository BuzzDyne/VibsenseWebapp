import React, {useState} from 'react'
import {auth} from '../firebase'

import './Login.css';

function Login() {

    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');

    const loginHandle = e => {
        e.preventDefault();
        // Login logic here...
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //Logged in
            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className="LoginContainer">
            <h3>Login Page</h3>
            <form>
                <h5>Email</h5>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" />

                <h5>Password</h5>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                <br></br>
                <button onClick={loginHandle}>Log In</button>
            </form>
        </div>
    )
}

export default Login
