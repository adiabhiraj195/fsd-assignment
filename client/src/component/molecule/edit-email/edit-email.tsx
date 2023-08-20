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

    const handleInput = (value: string) => {
        setEmail(value);
    }
    return (
        <div className='popup-content-wrap'>
            <div className='input-container'>
                <TextField
                    id='edit-email'
                    value={email}
                    label='Email'
                    type='text'
                    placeholder='Email'
                    onInput={handleInput}
                />
            </div>
            <div className='btn-container'>
                <Button btnName='Update' onclick={handleUpdate} />
            </div>
        </div>
    )
}

export default EditEmail;
