import React from 'react'
import "./sub-profile-detail.css";
import Button from '../../atoms/button/sm-button';

interface SubProfileCardProps {
    label: string;
    detail: string | number;
}

const SubProfileCard = ({
    label,
    detail
}: SubProfileCardProps) => {
    return (
        <div className='profile-sub-detail-wrap'>
            <p className='detail-label'>{label}</p>
            <div className='sub-data-wrap'>
                <h3 className='profile-data'>{detail}</h3>
                <Button btnName='Edit' />
            </div>
        </div>
    )
}

export default SubProfileCard;