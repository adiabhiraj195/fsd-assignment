import React,{useContext} from 'react'
import "./side-bar.css";
import { GrNext } from "react-icons/gr";
import useAuth from "../../../hooks/use-auth";
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../../context/profile-context';

const SideBar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const { setToggleProfilePage}= useContext(ProfileContext);

    const handleLogout = async() => {
        const logoutResponse = await logout();
        if(logoutResponse){
           return navigate("/login");
        }
        console.log("somthing went wrong")
    }

    const setPageMyProfile = ()=>{
        setToggleProfilePage(true);
    }
    const setPageConnection = ()=>{
        setToggleProfilePage(false);
    }
    return (
        <div className='side-bar-wrap'>
            <div className='side-bar-top'>
                <div className='select-btn-wrap'>
                    <GrNext />
                    <div className='profile-btn' onClick={setPageMyProfile}>
                        <p>My Profile</p>
                    </div>
                </div>
                <div className='select-btn-wrap'>
                    <GrNext />
                    <div className='connections-btn' onClick={setPageConnection}>
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