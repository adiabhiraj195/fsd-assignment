import React, { useState } from 'react'
import TextField from '../../component/atoms/text-field/text-field';
import AuthService from '../../service/auth-service';
import validator from "validator";
import { useNavigate } from "react-router-dom";
import Button from '../../component/atoms/button/sm-button';

const Register = () => {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password1, setPassword1] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const navigate = useNavigate();

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
            navigate("/login");

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
    }
    const handleOnInputPassword1 = (value: string) => {
        setPassword1(value);
    }
    const handleOnInputPassword2 = (value: string) => {
        setPassword2(value);
    }
    return (
        <div className='register-page'>
            <div className='auth-container'>
                <TextField
                    id='fullName-register'
                    value={fullName}
                    placeholder='Full Name'
                    type='text'
                    onInput={handleOnInputName}
                />
                <TextField
                    id='email-register'
                    value={email}
                    placeholder='Email'
                    type='email'
                    onInput={handleOnInputEmail}
                />
                <TextField
                    id='passowrd-register'
                    value={password1}
                    placeholder='Password'
                    type='password'
                    onInput={handleOnInputPassword1}
                />
                <TextField
                    id='confirm-password-register'
                    value={password2}
                    placeholder='Confirm Password'
                    type='password'
                    onInput={handleOnInputPassword2}
                />

                <button onClick={registerUser}>Register</button>
                {/* <Button btnName='Upload Photo' /> */}
            </div>
        </div>
    )
}

export default Register;
