import React, { useContext, useEffect, useState } from 'react';
import ProfileImageSection from '../../component/organism/profile-img-card/profile-img-card';
import ProfileDetailCard from '../../component/organism/profile-details/profile-detail';
import { ProfileContext } from '../../context/profile-context';
// import { AuthContext } from '../../context/auth-context';
import ProfileService from '../../service/profile-service';
import EditPopup from '../../component/organism/edit-popup/edit-popup';
import AboutCard from '../../component/organism/about-card/about-card';
import SkillCard from '../../component/organism/skills-card/skill-card';
import CertificateCard from '../../component/organism/certificate-card/cerificate-card';
import EducationCard from '../../component/organism/education-card/education-card';

const ProfilePage = () => {
    const {
        // userAllData,
        // setUserAllData,
        editPopupToggle,
        skills,
        setSkills,
        educationData,
        setEducationData,
    } = useContext(ProfileContext);
    const [fullName, setFullName] = useState<string>("error");
    const [email, setEmail] = useState<string>("error");
    const [phone, setPhone] = useState<number | string>("error");
    const [about, setAbout] = useState<string>("error");
    const [certificatesTitle, setCertificateTitle] = useState("error");
    const [certificatesOrganisation, setCertificateOrganisation] = useState("error");

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
            // setUserAllData({
            //     fullName: result.data.fullName,
            //     email: result.data.email,
            // });
            // userData = result.data;
            setFullName(result.data.fullName);
            setEmail(result.data.email);
            setPhone(result.data.phone);
            setAbout(result.data.about);
            setSkills(result.data.skills);
            setCertificateTitle(result.data.certificate.title);
            setCertificateOrganisation(result.data.certificate.organisation);
            setEducationData({
                from: result.data.education.from,
                to: result.data.education.to,
                about: result.data.education.about,
                organisation: result.data.education.organisation,
                degree: result.data.education.degree
            })

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
            <ProfileDetailCard name={fullName} email={email} phone={phone} />
            <AboutCard userFirstName={fullName.substring(0, fullName.indexOf(' '))} about={about} />
            <SkillCard skills={skills} />
            <CertificateCard title={certificatesTitle} organisation={certificatesOrganisation} />
            <EducationCard/>
            {
                editPopupToggle && <EditPopup />
            }
        </div>
    )
}

export default ProfilePage;
