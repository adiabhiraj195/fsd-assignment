import React, { useContext } from 'react'
import Button from '../../atoms/button/sm-button';
import { ProfileContext } from '../../../context/profile-context';
import "./skill-card.css";

interface SkillCardInterface {
    skills: Array<string>;
}

const SkillCard = ({ skills }: SkillCardInterface) => {
    const { editPopupToggle, setEditPopupToggle, skillPopup, setSkillPopup } = useContext(ProfileContext);

    const handleEdit = () => {
        setEditPopupToggle(!editPopupToggle);
        setSkillPopup(!skillPopup);
    }
    return (
        <div className='skill-card-wrap'>
            <div className='skill-heading-wrap'>
                <h2 className='skill-heading'>Skills</h2>
                <Button btnName='Edit' onclick={handleEdit} />
            </div>
            <div className='skill-content-wrap'>
                {skills?.map((skill) => {
                    return (
                        <h4 key={skill} className='skill'>{skill}</h4>
                    );
                })}
            </div>
        </div>
    )
}

export default SkillCard;