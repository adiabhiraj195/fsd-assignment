import React, { useContext } from 'react'
import Button from '../../atoms/button/sm-button';
import { ProfileContext } from '../../../context/profile-context';

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
        <div>
            <div>
                <h2>Skills</h2>
                <Button btnName='Edit' onclick={handleEdit} />
            </div>
            <div>
                {skills?.map((skill) => {
                    return (
                        <h4>{skill}</h4>
                    );
                })}
            </div>
        </div>
    )
}

export default SkillCard;