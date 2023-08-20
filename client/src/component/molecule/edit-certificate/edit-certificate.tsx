import React, { useState } from 'react';
import Button from '../../atoms/button/sm-button';
import TextField from '../../atoms/text-field/text-field';
import ProfileService from '../../../service/profile-service';

const EditCertificate = () => {
    const [title, setTitle] = useState("");
    const [organisation, setOrganisation] = useState("");
    const accessToken = localStorage.getItem("Token");

    const handleUpdate = async () => {
        try {
            if (accessToken == null) {
                console.log("accessToken is null");
                return;
            }
            await ProfileService.certificateUpdate(accessToken, { title, organisation })

        } catch (error) {

        }
    }

    const handleInputeTitle = (value: string) => {
        setTitle(value);
    }
    const handleInputeOrganisation = (value: string) => {
        setOrganisation(value);
    }

    return (
        <div className='popup-content-wrap'>
            <div className='input-container'>
                <TextField
                    value={title}
                    label='Title'
                    id='edit-title'
                    onInput={handleInputeTitle}
                    type='text'
                />
                <TextField
                    value={organisation}
                    label='Organisation'
                    id='edit-organisation'
                    onInput={handleInputeOrganisation}
                    type='text'
                />
            </div>
            <div className='btn-container'>
                <Button btnName='Update' onclick={handleUpdate} />
            </div>
        </div>
    )
}

export default EditCertificate;