import React, { useContext } from 'react'
import { ProfileContext } from '../../../context/profile-context';
import EditName from '../../molecule/edit-name/edit-name';
import EditEmail from '../../molecule/edit-email/edit-email';
import EditPhone from '../../molecule/edit-phone/edit-phone';
import EditAbout from '../../molecule/edit-about/edit-about';
import EditSkills from '../../molecule/edit-skills/edit-skills';
import EditCertificate from '../../molecule/edit-certificate/edit-certificate';
import EditEducation from '../../molecule/edit-education/edit-education';

const EditPopup = () => {
  const {
    fullNamePopup,
    emailPopup,
    phonePopup,
    aboutPopup,
    skillPopup,
    certificatePopup,
    educationPopup
  } = useContext(ProfileContext);
  return (
    <div>
      <div>
        {fullNamePopup && <EditName />}
        {emailPopup && <EditEmail />}
        {phonePopup && <EditPhone />}
        {aboutPopup && <EditAbout />}
        {skillPopup && <EditSkills />}
        {certificatePopup && <EditCertificate />}
        {educationPopup && <EditEducation/>}
      </div>
    </div>
  )
}
export default EditPopup;