import React from 'react'
import ProfileImage from '../../atoms/profile-image/profile-img';
import Button from '../../atoms/button/sm-button';
import "./profile-img-card.css";

const ProfileImageSection = () => {
    return (
        <div className='profile-img-wrap'>
            <ProfileImage />
            {/* <Button btnName='Upload Photo' />  */}
        </div>
    )
}

export default ProfileImageSection;