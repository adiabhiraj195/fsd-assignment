import React, { useState, useContext } from 'react'
import TextField from '../../atoms/text-field/text-field';
import Button from '../../atoms/button/sm-button';
import ProfileService from '../../../service/profile-service';
import validator from 'validator';
import { ProfileContext } from '../../../context/profile-context';

const EditPhone = () => {
    const [phone, setPhone] = useState("");
    const accessToken = localStorage.getItem("Token");
    const { setEditPagePopup, setEditPopupToggle } = useContext(ProfileContext);

    const handleUpdate = async () => {
        if (!validator.isNumeric(phone)) {
            setPhone("Must Enter number")
            return;
        }
        try {
            if (accessToken == null) {
                console.log("accessToken is null");
                return;
            }
            await ProfileService.phoneUpdate(accessToken, { pNumber: phone })
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
        setPhone(value);
    }
    return (
        <>
            <div onClick={handleToggle}>X</div>
            <div>
                <TextField
                    id='edit-phone'
                    value={phone}
                    label='Phone Number'
                    type='text'
                    placeholder='phone Number'
                    onInput={handleInput}
                />
                <Button btnName='Update' onclick={handleUpdate} />
            </div>
        </>
    )
}

export default EditPhone;
