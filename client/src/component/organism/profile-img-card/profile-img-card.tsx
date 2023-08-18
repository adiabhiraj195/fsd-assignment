import React from 'react'
import ProfileImage from '../../atoms/profile-image/profile-img';
import Button from '../../atoms/button/sm-button';
import "./profile-img-card.css";

const ProfileImageSection = () => {
    const handleClick = () => {
        console.log("Upload Photo");
    }
    return (
        <div className='profile-img-wrap profile-element'>
            <ProfileImage />
            <Button btnName='Upload Photo' onclick={handleClick} />
        </div>
    )
}

export default ProfileImageSection;