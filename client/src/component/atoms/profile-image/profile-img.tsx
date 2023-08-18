import React from 'react';
import profile from "../../../assets/image/profile.png";
import "./profile-img.css";

const ProfileImage = ()=> {

    //todo - image upload to cloudinary

  return (
    <div className='profile-img-container'>
            <img src={profile}></img>
    </div>
  )
}

export default ProfileImage;
