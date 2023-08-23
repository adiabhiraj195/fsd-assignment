import React, { useState } from 'react'
import TextField from '../../component/atoms/text-field/text-field';
import validator from 'validator';
import AuthService from '../../service/auth-service';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/use-auth';
import "./login.css";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const validate = () => {
        let isValid = true;
        if (!validator.isEmail(email)) {
            isValid = false;
        };
        if (!(password.length >= 8 && password.length <= 24)) {
            isValid = false;
        };

        return isValid;
    }

    const loginUser = async () => {
        // e.preventDefault();
        // if (!validate()) {
        //     return;
        // }

        try {
            const result = await AuthService.login({ email, password });
            // localStorage.setItem("Token", result.data.accessToken);
            login(result.data.accessToken);
            // console.log(result, result.data.accessToken);
            navigate("/profile");
        } catch (error) {
            console.log(error);
        }
    }
    const handleOnInputEmail = (value: string) => {
        setEmail(value);
    };
    const handelOnInputPassword = (value: string) => {
        setPassword(value);
    };
    const handleOnKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') loginUser();
  };
    return (
        <div className='auth-page'>
            <div className='auth-container'>
                <h2>Login!</h2>
                <div className='input-conatiner'>
                    <TextField
                        id='login-email'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onInput={handleOnInputEmail}
                        label='Email'
                    />
                    <TextField
                        id='login-password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onInput={handelOnInputPassword}
                        label='Password'
                    />
                </div>
                <div className='register-link-container'>
                    <Link to={"/"}>register as new user</Link>
                </div>
                <div className='btn-container'>
                    <button className='login-btn' onClick={loginUser}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;