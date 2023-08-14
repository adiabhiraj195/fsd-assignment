import React, { useContext, useEffect, useState } from 'react'
import ProfieDetailCard from '../../component/organism/profile-details/profile-detail';
import ProfileImageSection from '../../component/organism/profile-img-card/profile-img-card';
import ProfileDetailCard from '../../component/organism/profile-details/profile-detail';
import { ProfileContext } from '../../context/profile-context';
import { AuthContext } from '../../context/auth-context';
import ProfileService from '../../service/profile-service';

const ProfilePage = () => {
    const { userAllData, setUserAllData } = useContext(ProfileContext);
    const [fullName, setFullName] = useState<string>("error");
    const [email, setEmail] = useState<string>("error");
    const [phone, setPhone] = useState<number| string>("error");

    // const { accessToken } = useContext(AuthContext);
    const accessToken = localStorage.getItem("Token");
    // console.log(accessToken);
    let userData: any = {};
    const fetchAllData = async () => {
        try {
            // console.log("fetchdata");
            // console.log(accessToken)
            if (accessToken == null) return;
            const result = await ProfileService.fetchAllData(accessToken);
            setUserAllData(result.data);
            userData = result.data;
            setFullName(result.data.fullName)
            setEmail(result.data.email)
            setPhone(result.data.pNumber)
            // console.log(userData.fullName);

            //todo - assign data to profileContext
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <div>
            <ProfileImageSection />
            <ProfileDetailCard name={fullName} email={email} phone={phone}/>
        </div>
    )
}

export default ProfilePage;
