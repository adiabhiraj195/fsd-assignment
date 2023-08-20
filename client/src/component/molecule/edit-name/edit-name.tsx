import React, { useState } from 'react'
import TextField from '../../atoms/text-field/text-field';
import Button from '../../atoms/button/sm-button';
import ProfileService from '../../../service/profile-service';
import "./edit-name.css";

const EditName = () => {
    const [fullName, setFullName] = useState("");
    const accessToken = localStorage.getItem("Token");
    const handleUpdate = async () => {

        try {
            if (accessToken == null) {
                console.log("accessToken is null");
                return;
            }
            await ProfileService.nameUpdate(accessToken, { fullName })
        } catch (error) {
            console.log(error);
        }
        console.log("Update Clicked");
    }


    const handleInput = (value: string) => {
        setFullName(value);
    }
    return (
        <div className='popup-content-wrap'>
            <div className='input-container'>
                <TextField
                    id='edit-name'
                    value={fullName}
                    label='Your Name'
                    type='text'
                    placeholder='Full Name'
                    onInput={handleInput}
                />
            </div>
            <div className='btn-container'>
                <Button btnName='Update' onclick={handleUpdate} />
            </div>
        </div>
    )
}

export default EditName;
