import React from 'react'
import "./side-bar.css";
import { GrNext } from "react-icons/gr";
import useAuth from "../../../hooks/use-auth";
import { useNavigate } from 'react-router-dom';
const SideBar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async() => {
        const logoutResponse = await logout();
        if(logoutResponse){
           return navigate("/login");
        }
        console.log("somthing went wrong")
    }
    return (
        <div className='side-bar-wrap'>
            <div className='side-bar-top'>
                <div className='select-btn-wrap'>
                    <GrNext />
                    <div className='profile-btn'>
                        <p>My Profile</p>
                    </div>
                </div>
                <div className='select-btn-wrap'>
                    <GrNext />
                    <div className='connections-btn'>
                        <p>My Connections</p>
                    </div>
                </div>
            </div>
            <div className='side-bar-bottom '>
                <button className='logout-btn' onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    )
}

export default SideBar;