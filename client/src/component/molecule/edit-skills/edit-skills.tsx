import React, { useState, useContext } from 'react'
import TextField from '../../atoms/text-field/text-field';
import Button from '../../atoms/button/sm-button';
import ProfileService from '../../../service/profile-service';
import { ProfileContext } from '../../../context/profile-context';

const EditSkills = () => {
    const { skills } = useContext(ProfileContext);
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
        <div>
            {skills?.map((skill) => {
                return (
                    <>
                        <h3>{skill}</h3>
                        {/* <Button /> */}
                    </>
                )
            })}
            <TextField
                id='edit-phone'
                value={newSkill}
                type='text'
                placeholder='New Skill'
                onInput={handleInput}
            />
            <Button btnName='Update' onclick={handleUpdate} />

        </div>
    )
}

export default EditSkills;
