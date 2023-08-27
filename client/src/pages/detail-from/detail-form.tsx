import React, { useState } from 'react';
import TextArea from '../../component/atoms/text-area/text-area';
import TextField from '../../component/atoms/text-field/text-field';
import ProfileService from '../../service/profile-service';
import { useNavigate } from 'react-router-dom';
import "./detail-form.css";

const DetailForm = () => {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [skill, setSkill] = useState("");
    const [course, setCourse] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [eOrganisation, setEOrganisation] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [eCourse, setECourse] = useState("");
    const [eAbout, setEAbout] = useState("");
    const [about, setAbout] = useState("");
    const navigate = useNavigate();
    const accessToken = localStorage.getItem("Token");

    const handleSubmit = () => {
        if (accessToken == null) return;
        try {
            ProfileService.sendAllData(accessToken, {
                fullName,
                phone,
                skill,
                course,
                organisation,
                eOrganisation,
                from,
                to,
                eCourse,
                eAbout,
                about
            });
            navigate("/profile");
            console.log("Submit click");
        } catch (error) {
            console.log(error);
        }
    }

    const handleFullName = (value: string) => {
        setFullName(value);
    }
    const handlePhone = (value: string) => {
        setPhone(value);
    }
    const handleSkill = (value: string) => {
        setSkill(value);
    }
    const handleCourse = (value: string) => {
        setCourse(value);
    }
    const handleOrganisation = (value: string) => {
        setOrganisation(value);
    }
    const handleEOrganisation = (value: string) => {
        setEOrganisation(value);
    }
    const handleFrom = (value: string) => {
        setFrom(value);
    }
    const handleTo = (value: string) => {
        setTo(value);
    }
    const handleECourse = (value: string) => {
        setECourse(value);
    }
    const handleEAbout = (value: string) => {
        setEAbout(value);
    }
    const handleAbout = (value: string) => {
        setAbout(value);
    }
    return (
        <div className='form-page'>
            <h3 className='form-email-head'>example@email.com</h3>
            <div className='form-main-container'>
                <div className='form-wraper'>
                    <div className='form-page-left-wrap'>
                        <div className='input-container'>
                            <TextField
                                label='Full Name'
                                placeholder='full name'
                                id='form-fullname-input'
                                type='text'
                                value={fullName}
                                onInput={handleFullName}
                            />
                        </div>
                        <div className='input-container'>
                            <TextField
                                label='Phone Number'
                                placeholder='number'
                                id='form-phone-input'
                                type='text'
                                value={phone}
                                onInput={handlePhone}
                            />
                        </div>
                        <div className='input-container'>
                            <TextField
                                label='Add one skill'
                                placeholder='skill'
                                id='form-skill-input'
                                type='text'
                                value={skill}
                                onInput={handleSkill}
                            />
                        </div>
                        <div className='input-container'>
                            <h2>Certificate</h2>
                            <TextField
                                label='Course'
                                placeholder='course'
                                id='form-course-input'
                                type='text'
                                value={course}
                                onInput={handleCourse}
                            />
                            <TextField
                                label='Organisation'
                                placeholder='organisation'
                                id='form-organisation-input'
                                type='text'
                                value={organisation}
                                onInput={handleOrganisation}
                            />
                        </div>
                        <div className='input-container'>
                            <TextArea
                                id='form-about-input'
                                label='About'
                                placeholder='about'
                                value={about}
                                onInput={handleAbout}
                            />
                        </div>
                    </div>
                    <div className='form-container-right-wrap'>

                        <div className='input-container'>
                            <h2>Education</h2>
                            <TextField
                                label='Organisation'
                                placeholder='organisation'
                                id='form-education-organisation-input'
                                type='text'
                                value={eOrganisation}
                                onInput={handleEOrganisation}
                            />
                            <div className='education-timeperiod-input-wrap'>
                                <TextField
                                    label='From'
                                    placeholder='from'
                                    id='form-from-input'
                                    type='text'
                                    value={from}
                                    onInput={handleFrom}
                                />
                                <TextField
                                    label='To'
                                    placeholder='to'
                                    id='form-to-input'
                                    type='text'
                                    value={to}
                                    onInput={handleTo}
                                />
                            </div>
                            <TextField
                                label='Course'
                                placeholder='course'
                                id='form-education-course-input'
                                type='text'
                                value={eCourse}
                                onInput={handleECourse}
                            />
                            <TextArea
                                id='form-education-about-input'
                                label='About'
                                placeholder='about course'
                                value={eAbout}
                                onInput={handleEAbout}
                            />
                        </div>
                    </div>
                </div>
                <div className='input-container form-btn-wrap'>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default DetailForm;