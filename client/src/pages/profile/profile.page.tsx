import React, { useContext, useEffect, useState } from 'react';
import ProfileImageSection from '../../component/organism/profile-img-card/profile-img-card';
import ProfileDetailCard from '../../component/organism/profile-details/profile-detail';
import { ProfileContext } from '../../context/profile-context';
import ProfileService from '../../service/profile-service';
import EditPopup from '../../component/organism/edit-popup/edit-popup';
import AboutCard from '../../component/organism/about-card/about-card';
import SkillCard from '../../component/organism/skills-card/skill-card';
import CertificateCard from '../../component/organism/certificate-card/certificate-card';
import EducationCard from '../../component/organism/education-card/education-card';
import Header from '../../component/organism/header/header';
import SideBar from '../../component/organism/side-bar/side-bar';
import "./profile.css";
// import ProfessionalDetailCard from '../../component/organism/professional-detail/professional-detail';
import ConnectionCard from '../../component/organism/connection-card/connection-card';

const ProfilePage = () => {
    const {
        userAllData,
        setUserAllData,
        editPopupToggle,
        toggleProfilePage
    } = useContext(ProfileContext);

    // const { accessToken } = useContext(AuthContext);
    const accessToken = localStorage.getItem("Token");
    // console.log(accessToken);
    // let userData: any = {};
    const fetchAllData = async () => {
        try {
            if (accessToken == null) return;

            const result = await ProfileService.fetchAllData(accessToken);
            setUserAllData({
                fullName: result.data.fullName,
                email: result.data.email,
                phone: result.data.phone,
                about: result.data.about,
                skills: result.data.skills,
                certificate: {
                    title: result.data.certificate.title,
                    organisation: result.data.certificate.organisation,
                },
                education: {
                    from: result.data.education.from,
                    to: result.data.education.to,
                    organisation: result.data.education.organisation,
                    degree: result.data.education.degree,
                    about: result.data.education.about,
                }
            });
            // console.log(userAllData);

        } catch (error) {
            console.log(error);
        }
        // todo - convert this into a function which can be import from anywhere;
    }

    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <>
            {/* <div className='page'> */}
            <Header />
            <div className='container-second'>
                <SideBar />
                <div className='main-content-container'>
                    {toggleProfilePage ?
                        <>
                            <div className='profile-bg-banner'>
                                <p>My Profile</p>
                            </div>
                            <div className='profile-main-card'>
                                <div className='profile-sub-container-left'>
                                    <ProfileImageSection />
                                    <ProfileDetailCard name={userAllData.fullName} email={userAllData.email} phone={userAllData.phone} />
                                    <AboutCard userFirstName={userAllData.fullName.substring(0, userAllData.fullName.indexOf(' '))} about={userAllData.about} />
                                </div>
                                <div className='profile-sub-container-rigth'>
                                    <SkillCard skills={userAllData.skills} />
                                    {/* <ProfessionalDetailCard/> */}
                                    <CertificateCard title={userAllData.certificate.title} organisation={userAllData.certificate.organisation} />
                                    <EducationCard />
                                </div>
                            </div>
                        </> :
                        <>
                            <div className='profile-bg-banner'>
                                <p>My Conection</p>
                            </div>
                            <div className='profile-main-card'>
                                {/* <ConnectionCard /> */}
                            </div>
                        </>
                    }
                </div>
                {
                    editPopupToggle && <EditPopup />
                }
            </div >
            {/* </div> */}
        </>
    )
}

export default ProfilePage;
