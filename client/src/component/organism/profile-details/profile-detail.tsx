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
    userAllData,
    fullNamePopup,
    setFullNamePopup,
    editPopupToggle,
    setEditPopupToggle,
    emailPopup,
    setEmailPopup,
    phonePopup,
    setPhonePopup,
  } = useContext(ProfileContext);
  console.log(userAllData);

  // const getProfileDetails = async () => {
  //   try {
  //     if (accessToken == null) return;
  //     // const result = await ProfileService.
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleFullNamePopup = () => {
    setEditPopupToggle(!editPopupToggle);
    setFullNamePopup(!fullNamePopup);
    // console.log(editPopupToggle, "editPopup", fullNamePopup, "fullNamePopup")
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