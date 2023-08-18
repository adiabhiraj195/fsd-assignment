import React, { useState, useContext } from 'react'
import Button from '../../atoms/button/sm-button'
import TextField from '../../atoms/text-field/text-field'
import ProfileService from '../../../service/profile-service'
import { ProfileContext } from '../../../context/profile-context'

const EditCertificate = () => {
    const [title, setTitle] = useState("");
    const [organisation, setOrganisation] = useState("");
    const accessToken = localStorage.getItem("Token");
    const { setEditPagePopup, setEditPopupToggle } = useContext(ProfileContext);

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

    const handleToggle = () => {
        setEditPagePopup("");
        setEditPopupToggle(false);
    }

    const handleInputeTitle = (value: string) => {
        setTitle(value);
    }
    const handleInputeOrganisation = (value: string) => {
        setOrganisation(value);
    }

    return (
        <>
            <div onClick={handleToggle}>X</div>

            <div>
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
                <Button btnName='Update' onclick={handleUpdate} />
            </div>
        </>
    )
}

export default EditCertificate;