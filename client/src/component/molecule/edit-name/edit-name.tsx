import React, { useState, useContext } from 'react'
import TextField from '../../atoms/text-field/text-field';
import Button from '../../atoms/button/sm-button';
import ProfileService from '../../../service/profile-service';
import { ProfileContext } from '../../../context/profile-context';

const EditName = () => {
    const [fullName, setFullName] = useState("");
    const accessToken = localStorage.getItem("Token");
    const { setEditPagePopup, setEditPopupToggle}= useContext(ProfileContext);
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
    
    const handleToggle = ()=>{
        setEditPagePopup("");
        setEditPopupToggle(false);
    }
    const handleInput = (value: string) => {
        setFullName(value);
    }
    return (
        <>
            <div onClick={handleToggle}>X</div>
            <div>
                <TextField
                    id='edit-name'
                    value={fullName}
                    label='Your Name'
                    type='text'
                    placeholder='Full Name'
                    onInput={handleInput}
                />
                <Button btnName='Update' onclick={handleUpdate} />

            </div>
        </>
    )
}

export default EditName;
