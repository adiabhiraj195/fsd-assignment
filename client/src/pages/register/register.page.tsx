import React, { useState, useContext } from 'react'
import TextField from '../../component/atoms/text-field/text-field';
import AuthService from '../../service/auth-service';
import validator from "validator";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { AuthContext } from '../../context/auth-context';

const Register = () => {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password1, setPassword1] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const navigate = useNavigate();
    const { setGEmail } = useContext(AuthContext);

    const validateData = () => {
        let isValid = true;
        if (!validator.isEmail(email)) {
            isValid = false;
        };
        if (!(password1.length >= 8 && password2.length <= 24)) {
            isValid = false;
        }
        if (password1 !== password2) {
            isValid = false;
        };
        return isValid;
    }

    const registerUser = (e: any) => {
        e.preventDefault();
        if (!validateData()) {
            return;
        }
        try {
            AuthService.register({
                fullName,
                email,
                password1,
                password2
            });
            navigate("/detail-form");
            // navigate("/login");

        } catch (error) {
            console.error(error)
        }
    }

    const handleOnInputName = (value: string) => {
        setFullName(value);
        console.log(fullName)
    }
    const handleOnInputEmail = (value: string) => {
        setEmail(value);
        setGEmail(value);
    }
    const handleOnInputPassword1 = (value: string) => {
        setPassword1(value);
    }
    const handleOnInputPassword2 = (value: string) => {
        setPassword2(value);
    }
    return (
        <div className='auth-page'>
            <div className='auth-container'>
                <h2>Register</h2>
                <div className='input-container'>
                    <TextField
                        id='fullName-register'
                        value={fullName}
                        placeholder='Full Name'
                        type='text'
                        onInput={handleOnInputName}
                        label='Full Name'
                    />
                    <TextField
                        id='email-register'
                        value={email}
                        placeholder='Email'
                        type='email'
                        onInput={handleOnInputEmail}
                        label='Email'
                    />
                    <TextField
                        id='passowrd-register'
                        value={password1}
                        placeholder='Password'
                        type='password'
                        onInput={handleOnInputPassword1}
                        label='Password'
                    />
                    <TextField
                        id='confirm-password-register'
                        value={password2}
                        placeholder='Confirm Password'
                        type='password'
                        onInput={handleOnInputPassword2}
                        label='Confirm Password'
                    />
                </div>
                <div className='login-link-container'>
                    <Link to={"/login"}>already have account!</Link>
                </div>
                <div className="btn-container">
                    <button className='register-btn' onClick={registerUser}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register;
