import React, { useContext } from 'react'
import Button from '../../atoms/button/sm-button';
import { ProfileContext } from '../../../context/profile-context';
import "./certificate-card.css";

interface CertificateCardInterface {
    title: string;
    organisation: string;
}


const CertificateCard = ({
    title,
    organisation
}: CertificateCardInterface) => {
    const {
        //  editPopupToggle,
        setEditPopupToggle,
        setEditPagePopup
        //    certificatePopup,
        // setCertificatePopup 
    } = useContext(ProfileContext);

    const handleEdit = () => {
        setEditPopupToggle(true);
        setEditPagePopup("certificate");
        // setCertificatePopup(!certificatePopup);
    }
    return (
        <div className='certificate-card-wrap profile-element'>
            <div className='certificate-heading-wrap'>
                <h2 className='certificate-heading'>Cerificates</h2>
                <Button btnName='Edit' onclick={handleEdit} />
            </div>
            <div className='certificate-wrap'>
                <h2>{title}</h2>
                <p>{organisation}</p>
            </div>
        </div>
    )
}

export default CertificateCard;
