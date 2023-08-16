import React, { useContext } from 'react'
import Button from '../../atoms/button/sm-button';
import { ProfileContext } from '../../../context/profile-context';

interface CertificateCardInterface {
    title: string;
    organisation: string;
}


const CertificateCard = ({
    title,
    organisation
}: CertificateCardInterface) => {
    const { editPopupToggle, setEditPopupToggle, certificatePopup, setCertificatePopup } = useContext(ProfileContext);

    const handleEdit = () => {
        setEditPopupToggle(!editPopupToggle);
        setCertificatePopup(!certificatePopup);
    }
    return (
        <div>
            <div>
                <h2>Cerificates</h2>
                <Button btnName='Edit' onclick={handleEdit} />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{organisation}</p>
            </div>
        </div>
    )
}

export default CertificateCard;
