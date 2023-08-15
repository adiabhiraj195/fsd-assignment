import React, { useState } from 'react'
import TextField from '../../component/atoms/text-field/text-field';
import validator from 'validator';
import AuthService from '../../service/auth-service';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/use-auth';

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

    const loginUser = async (e: any) => {
        e.preventDefault();
        // if (!validate()) {
        //     return;
        // }

        try {
            const result = await AuthService.login({ email, password });
            // localStorage.setItem("Token", result.data.accessToken);
            login(result.data.accessToken);
            console.log(result, result.data.accessToken);
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
    return (
        <div className='auth-page'>
            <div className='auth-container'>
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

                <button onClick={loginUser}>Login</button>
            </div>
        </div>
    )
}

export default Login;