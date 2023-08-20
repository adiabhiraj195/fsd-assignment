import React, { useContext, useState } from 'react'
import Button from '../../atoms/button/sm-button';
import TextField from '../../atoms/text-field/text-field';
import TextArea from '../../atoms/text-area/text-area';
import { ProfileContext } from '../../../context/profile-context';
import ProfileService from '../../../service/profile-service';

const EditEducation = () => {
    const { userAllData } = useContext(ProfileContext);
    const [organisation, setOrganisation] = useState(userAllData.education.organisation);
    const [course, setCourse] = useState(userAllData.education.degree);
    const [from, setFrom] = useState(userAllData.education.from);
    const [to, setTo] = useState(userAllData.education.to);
    const [about, setAbout] = useState(userAllData.education.about);

    const accessToken = localStorage.getItem("Token");

    const handleUpdate = async () => {
        try {
            if (accessToken == null) return;
            await ProfileService.educationUpdate(accessToken, {
                organisation,
                degree: course,
                from,
                to,
                about
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleOrganisation = (value: string) => {
        setOrganisation(value);
    }
    const handleCourse = (value: string) => {
        setCourse(value);
    }
    const handleFrom = (value: string) => {
        setFrom(value);
    }
    const handleTo = (value: string) => {
        setTo(value);
    }
    const handleAbout = (value: string) => {
        setAbout(value);
    }
    return (
        <div className='popup-content-wrap'>
            <div className='input-container'>
                <TextField
                    label='Organisation'
                    type='text'
                    id='edit-organisation'
                    value={organisation}
                    placeholder='Organisation'
                    onInput={handleOrganisation}
                />
                <TextField
                    label='Course'
                    type='text'
                    id='edit-course'
                    value={course}
                    placeholder='Course'
                    onInput={handleCourse}
                />
                <TextField
                    label='From'
                    type='text'
                    id='edit-from'
                    value={from}
                    placeholder='Form'
                    onInput={handleFrom}
                />
                <TextField
                    label='To'
                    type='text'
                    id='edit-to'
                    value={to}
                    placeholder='To'
                    onInput={handleTo}
                />
                <TextArea
                    id='edit-about'
                    value={about}
                    onInput={handleAbout}
                    label='About'
                />
            </div>
            <div className='btn-container'>
                <Button btnName='Update' onclick={handleUpdate} />
            </div>
        </div>
    )
}

export default EditEducation;