import React, { useState, useContext } from 'react'
import TextField from '../../atoms/text-field/text-field';
import Button from '../../atoms/button/sm-button';
import ProfileService from '../../../service/profile-service';
import { ProfileContext } from '../../../context/profile-context';

const EditSkills = () => {
    const { userAllData } = useContext(ProfileContext);
    const [newSkill, setNewSkill] = useState("");
    const accessToken = localStorage.getItem("Token");

    const handleUpdate = async () => {

        try {
            if (accessToken == null) {
                console.log("accessToken is null");
                return;
            }
            await ProfileService.skillUpdate(accessToken, { newSkill });
            setNewSkill("");
        } catch (error) {
            console.log(error);
        }
        console.log("Update Clicked");
    }

    const handleInput = (value: string) => {
        setNewSkill(value);
    }
    return (
        <div className='popup-content-wrap'>
            <ul>
                {userAllData.skills?.map((skill) => {
                    return (
                        <li>

                            <h3>{skill}</h3>
                            {/* <Button /> */}
                        </li>
                    )
                })}
            </ul>
            <div className='input-container'>
                <TextField
                    id='edit-phone'
                    value={newSkill}
                    type='text'
                    placeholder='New Skill'
                    onInput={handleInput}
                />
            </div>
            <div className='btn-container'>
                <Button btnName='Update' onclick={handleUpdate} />
            </div>

        </div>
    )
}

export default EditSkills;
