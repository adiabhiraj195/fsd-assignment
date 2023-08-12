import React, { useState } from 'react'
import TextField from '../../component/atoms/text-field';

const Register = () => {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password1, setPassword1] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");

    const handleOnInputName = (value:string)=>{
        setFullName(value);
        console.log(fullName)
    }
    const handleOnInputEmail = (value:string)=>{
        setEmail(value);
    }
    const handleOnInputPassword1 = (value:string)=>{
        setPassword1(value);
    }
    const handleOnInputPassword2 = (value:string)=>{
        setPassword2(value);
    }
    return (
        <div className='register-'>
            <TextField
                value={fullName}
                placeholder='Full Name'
                type='text'
                onInput={handleOnInputName}
            />
            <TextField
                value={email}
                placeholder='Email'
                type='email'
                onInput={handleOnInputEmail}
            />
            <TextField
                value={password1}
                placeholder='Password'
                type='password'
                onInput={handleOnInputPassword1}
            />
            <TextField
                value={password2}
                placeholder='Confirm Password'
                type='password'
                onInput={handleOnInputPassword2}
            />
        </div>
    )
}

export default Register;
