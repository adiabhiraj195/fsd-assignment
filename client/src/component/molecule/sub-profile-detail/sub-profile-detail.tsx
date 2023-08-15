import React, { useContext } from 'react'
import "./sub-profile-detail.css";
import Button from '../../atoms/button/sm-button';
import { ProfileContext } from '../../../context/profile-context';

interface SubProfileCardProps {
    label: string;
    detail: string | number;
    toggleEdit: Function;
}

const SubProfileCard = ({
    label,
    detail,
    toggleEdit
}: SubProfileCardProps) => {
    // const { fullNamePopup, setProfilePopup } = useContext(ProfileContext);

    // const toggleEdit = () => {
    //     setProfilePopup(!profilePopup);
    //     console.log(profilePopup)
    // }
    return (
        <div className='profile-sub-detail-wrap'>
            <p className='detail-label'>{label}</p>
            <div className='sub-data-wrap'>
                <h3 className='profile-data'>{detail}</h3>
                <Button btnName='Edit' onclick={toggleEdit} />
            </div>
        </div>
    )
}

export default SubProfileCard;