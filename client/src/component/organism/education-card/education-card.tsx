import React, { useContext } from 'react'
import Button from '../../atoms/button/sm-button';
import { ProfileContext } from '../../../context/profile-context';
import "./education-card.css";

const EducationCard = () => {
    const {
        userAllData,
        // editPopupToggle,
        setEditPagePopup,
        setEditPopupToggle,
        // educationPopup,
        // setEducationPopup
    } = useContext(ProfileContext);

    const handleEdit = () => {
        setEditPopupToggle(true);
        setEditPagePopup("education");
        // setEducationPopup(!educationPopup);
    }
    return (
        <div className='education-card-wrap profile-element'>
            <div className='education-heading-wrap'>
                <h2>Education</h2>
                <Button btnName='Edit' onclick={handleEdit} />
            </div>
            <div className='education-content-wrap'>
                <h1 className='education-organisation'>{userAllData.education.organisation}</h1>
                <div className='education-timestamp-wrap'>
                    <h2 className='timestamp'>({userAllData.education.from}-{userAllData.education.to})</h2>
                    <h2 className='education-degree'>{userAllData.education.degree}</h2>
                </div>
                <p className='education-about'>{userAllData.education.about}</p>
            </div>

        </div>
    )
}

export default EducationCard;