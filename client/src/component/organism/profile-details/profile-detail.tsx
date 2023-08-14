import React, { useContext } from 'react';
import "./profile-detail.css";
import SubProfileCard from '../../molecule/sub-profile-detail/sub-profile-detail';
import { AuthContext } from '../../../context/auth-context';
import ProfileService from '../../../service/profile-service';
import { ProfileContext } from '../../../context/profile-context';

interface ProfileDetailPropsInterface {
  name: string;
  email: string;
  phone:number | string;
}

const ProfileDetailCard = ({
  name,
  email,
  phone
}: ProfileDetailPropsInterface) => {
  const { accessToken } = useContext(AuthContext);
  const {userAllData} = useContext(ProfileContext);
  console.log(userAllData);
  const getProfileDetails = async () => {
    try {
      if(accessToken == null) return;
      // const result = await ProfileService.
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='profile-detail-wrap'>
      <SubProfileCard label='Your Name' detail={name} />
      <SubProfileCard label='Email' detail={email} />
      <SubProfileCard label='Phone Number' detail={phone} />
    </div>
  )
}

export default ProfileDetailCard;