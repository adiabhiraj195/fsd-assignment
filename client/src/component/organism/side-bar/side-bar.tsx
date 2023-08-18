import React from 'react'
import "./side-bar.css";
import { GrNext } from "react-icons/gr";

const SideBar = () => {
    
    const handleLogout = ()=>{

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