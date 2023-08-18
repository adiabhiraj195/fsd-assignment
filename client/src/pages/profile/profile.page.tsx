import React, { useContext, useEffect, useState } from 'react';
import ProfileImageSection from '../../component/organism/profile-img-card/profile-img-card';
import ProfileDetailCard from '../../component/organism/profile-details/profile-detail';
import { ProfileContext } from '../../context/profile-context';
// import { AuthContext } from '../../context/auth-context';
import ProfileService from '../../service/profile-service';
import EditPopup from '../../component/organism/edit-popup/edit-popup';
import AboutCard from '../../component/organism/about-card/about-card';
import SkillCard from '../../component/organism/skills-card/skill-card';
import CertificateCard from '../../component/organism/certificate-card/certificate-card';
import EducationCard from '../../component/organism/education-card/education-card';

const ProfilePage = () => {
    const {
        userAllData,
        setUserAllData,
        editPopupToggle,
    } = useContext(ProfileContext);

    // const { accessToken } = useContext(AuthContext);
    const accessToken = localStorage.getItem("Token");
    console.log(accessToken);
    // let userData: any = {};
    const fetchAllData = async () => {
        try {
            // console.log("fetchdata");
            // console.log(accessToken)
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
                    organisation:result.data.certificate.organisation,
                },
                education:{
                    from: result.data.education.from,
                    to: result.data.education.to,
                    organisation: result.data.education.organisation,
                    degree: result.data.education.degree,
                    about: result.data.education.about,
                }
            });
            console.log(userAllData);

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
            <ProfileDetailCard name={userAllData.fullName} email={userAllData.email} phone={userAllData.phone} />
            <AboutCard userFirstName={userAllData.fullName.substring(0, userAllData.fullName.indexOf(' '))} about={userAllData.about} />
            <SkillCard skills={userAllData.skills} />
            <CertificateCard title={userAllData.certificate.title} organisation={userAllData.certificate.organisation} />
            <EducationCard/>
            {
                editPopupToggle && <EditPopup />
            }
        </div>
    )
}

export default ProfilePage;
