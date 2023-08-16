import React, { useContext } from 'react'
import Button from '../../atoms/button/sm-button';
import { ProfileContext } from '../../../context/profile-context';


const EducationCard = () => {
    const { educationData, editPopupToggle, setEditPopupToggle, educationPopup, setEducationPopup} = useContext(ProfileContext);

    const handleEdit  = () => {
        setEditPopupToggle(!editPopupToggle);
        setEducationPopup(!educationPopup);
    }
    return (
        <div>
            <div>
                <h2>Education</h2>
                <Button btnName='Edit' onclick={handleEdit} />
            </div>
            <h1>{educationData.organisation}</h1>
            <div>
                <h2>({educationData.from}-{educationData.to})</h2>
                <h2>{educationData.degree}</h2>
            </div>
            <p>{educationData.about}</p>

        </div>
    )
}

export default EducationCard;