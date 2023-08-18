import React, { useContext } from 'react';
import "./header.css";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import ProfileImage from "../../../assets/image/profile.png";
import { ProfileContext } from '../../../context/profile-context';

const Header = () => {
    const { userAllData } = useContext(ProfileContext);

    return (
        <div className='header-wrap'>
            <div className='dashbord-wrap'>
                <h1>Dashbord</h1>
            </div>
            <div className='header-profile-wrap'>
                <div className='bell-icon'>
                    <IoNotificationsOutline />
                </div>
                <div className='header-profile'>
                    <image href={ProfileImage}></image>
                    <div className='profile-info'>
                        <p>Welcome back,</p>
                        <h2>{userAllData.fullName}</h2>
                    </div>
                    <div className='down-arraow'>
                        <BsChevronDown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;