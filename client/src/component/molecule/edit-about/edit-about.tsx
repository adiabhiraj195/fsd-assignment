import React, { useState, useContext } from 'react'
import TextArea from '../../atoms/text-area/text-area';
import Button from '../../atoms/button/sm-button';
import ProfileService from '../../../service/profile-service';
import { ProfileContext } from '../../../context/profile-context';

const EditAbout = () => {
    const { userAllData, setEditPopupToggle, setEditPagePopup } = useContext(ProfileContext);
    const [about, setAbout] = useState<string>(userAllData.about);
    const accessToken = localStorage.getItem("Token");

    const handleInput = (value: string) => {
        setAbout(value);
    }

    const handleEdit = async () => {
        try {
            if (accessToken == null) {
                console.log("accessToken is null");
                return;
            }
            await ProfileService.aboutUpdate(accessToken, { about })
        } catch (error) {
            console.log(error);
        }
    }

    const handleToggle = () => {
        setEditPagePopup("");
        setEditPopupToggle(false);
    }
    return (
        <div className='popup-content-wrap'>
            <div className='input-container'>
                <TextArea
                    value={about}
                    id='edit-about'
                    onInput={handleInput}
                    label='About'
                />
            </div>
            <div className='btn-container'>
                <Button btnName='Update' onclick={handleEdit} />
            </div>
        </div>
    )
}

export default EditAbout;