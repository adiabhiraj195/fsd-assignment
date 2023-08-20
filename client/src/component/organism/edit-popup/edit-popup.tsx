import React, { useContext } from 'react'
import { ProfileContext } from '../../../context/profile-context';
import EditName from '../../molecule/edit-name/edit-name';
import EditEmail from '../../molecule/edit-email/edit-email';
import EditPhone from '../../molecule/edit-phone/edit-phone';
import EditAbout from '../../molecule/edit-about/edit-about';
import EditSkills from '../../molecule/edit-skills/edit-skills';
import EditCertificate from '../../molecule/edit-certificate/edit-certificate';
import EditEducation from '../../molecule/edit-education/edit-education';
import "./edit-popup.css";
import { GrClose } from "react-icons/gr";

const EditPopup = () => {
  const { editPagePopup, setEditPagePopup, setEditPopupToggle } = useContext(ProfileContext);

  const handleToggle = () => {
    setEditPagePopup("");
    setEditPopupToggle(false);
  }
  return (
    <div className='edit-pg-bg'>
      <div className='edit-card-container'>
        <div className='popup-content'>
          <div className='popup-close' onClick={handleToggle}><GrClose /></div>
          {editPagePopup == "name" && <EditName />}
          {editPagePopup == "email" && <EditEmail />}
          {editPagePopup == "phone" && <EditPhone />}
          {editPagePopup == "about" && <EditAbout />}
          {editPagePopup == "skills" && <EditSkills />}
          {editPagePopup == "certificate" && <EditCertificate />}
          {editPagePopup == "education" && <EditEducation />}
        </div>
      </div>
    </div>
  )
}
export default EditPopup;