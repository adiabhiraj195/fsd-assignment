import React,{useContext} from 'react'
import Button from '../../atoms/button/sm-button';
import "./about-card.css";
import { ProfileContext } from '../../../context/profile-context';

interface AboutCaraProps {
    userFirstName: string;
    about: string;
}

const AboutCard = ({
    userFirstName,
    about,
}: AboutCaraProps) => {
    const {editPopupToggle, setEditPopupToggle, aboutPopup, setAboutPopup, setOldAbout} = useContext(ProfileContext);
    
    setOldAbout(about);

    const handlePopup = ()=>{
        setEditPopupToggle(!editPopupToggle);
        setAboutPopup(!aboutPopup);
    }
    return (
        <div className='about-wrap'>
            <div className='about-heading'>
                <h3>About <span>{userFirstName}</span></h3>
                <Button btnName='Edit' onclick={handlePopup} />
            </div>
            <div className='about-para-wrap'>
                <p className='about-para'>
                    {about}
                </p>
            </div>
        </div>
    )
}

export default AboutCard;
