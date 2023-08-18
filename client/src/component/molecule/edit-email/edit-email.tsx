import React, { useState, useContext } from 'react'
import TextField from '../../atoms/text-field/text-field';
import Button from '../../atoms/button/sm-button';
import ProfileService from '../../../service/profile-service';
import validator from 'validator';
import { ProfileContext } from '../../../context/profile-context';

const EditEmail = () => {
    const [email, setEmail] = useState("");
    const accessToken = localStorage.getItem("Token");
    const { setEditPagePopup, setEditPopupToggle } = useContext(ProfileContext);

    const validate = () => {
        let isValid = true;
        if (!validator.isEmail(email)) {
            isValid = false;
        };

        return isValid;
    }

    const handleUpdate = async () => {
        if (!validate()) {
            setEmail("Enter a valid Email");
            return;
        }
        try {
            if (accessToken == null) {
                console.log("accessToken is null");
                return;
            }
            await ProfileService.emailUpdate(accessToken, { newEmail: email })

            //todo - redirect to login page
        } catch (error) {
            console.log(error);
        }
        console.log("Update Clicked");
    }

    const handleToggle = () => {
        setEditPagePopup("");
        setEditPopupToggle(false);
    }
    const handleInput = (value: string) => {
        setEmail(value);
    }
    return (
        <>
            <div onClick={handleToggle}>X</div>
            <div>
                <TextField
                    id='edit-email'
                    value={email}
                    label='Email'
                    type='text'
                    placeholder='Email'
                    onInput={handleInput}
                />
                <Button btnName='Update' onclick={handleUpdate} />
            </div>
        </>
    )
}

export default EditEmail;
