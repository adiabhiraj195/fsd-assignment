import React,{useContext} from 'react'
import { ProfileContext } from '../../../context/profile-context';
import EditName from '../../molecule/edit-name/edit-name';
import EditEmail from '../../molecule/edit-email/edit-email';
import EditPhone from '../../molecule/edit-phone/edit-phone';

const EditPopup = () =>{
    const {
        fullNamePopup,
        emailPopup,
        phonePopup,
    } = useContext(ProfileContext);
  return (
    <div>
        <div>
            {fullNamePopup && <EditName/>}
            {emailPopup && <EditEmail/>}
            {phonePopup && <EditPhone/>}
        </div>
    </div>
  )
}

export default EditPopup;