import React, { useContext } from 'react';
import "./profile-detail.css";
import SubProfileCard from '../../molecule/sub-profile-detail/sub-profile-detail';
import { AuthContext } from '../../../context/auth-context';
import ProfileService from '../../../service/profile-service';
import { ProfileContext } from '../../../context/profile-context';

interface ProfileDetailPropsInterface {
  name: string;
  email: string;
  phone: number | string;
}

const ProfileDetailCard = ({
  name,
  email,
  phone
}: ProfileDetailPropsInterface) => {
  // const { accessToken } = useContext(AuthContext);
  const {
    //   userAllData,
    fullNamePopup,
    setFullNamePopup,
    editPopupToggle,
    setEditPopupToggle,
    emailPopup,
    setEmailPopup,
    phonePopup,
    setPhonePopup,
    // setEditPagePopup
  } = useContext(ProfileContext);
  
  const handleFullNamePopup = () => {
    setEditPopupToggle(!editPopupToggle);
    // setEditPagePopup("name");
    setFullNamePopup(!fullNamePopup);
  }

  const handleEmailPopup = () => {
    setEditPopupToggle(!editPopupToggle);
    setEmailPopup(!emailPopup);
  }

  const handlePhonePopup = () => {
    setEditPopupToggle(!editPopupToggle);
    setPhonePopup(!phonePopup);
  }

  return (
    <div className='profile-detail-wrap'>
      <SubProfileCard label='Your Name' detail={name} toggleEdit={handleFullNamePopup} />
      <SubProfileCard label='Email' detail={email} toggleEdit={handleEmailPopup} />
      <SubProfileCard label='Phone Number' detail={phone} toggleEdit={handlePhonePopup} />
    </div>
  )
}

export default ProfileDetailCard;