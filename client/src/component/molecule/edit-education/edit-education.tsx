import React, {useContext, useState} from 'react'
import Button from '../../atoms/button/sm-button';
import TextField from '../../atoms/text-field/text-field';
import TextArea from '../../atoms/text-area/text-area';
import { ProfileContext } from '../../../context/profile-context';
import ProfileService from '../../../service/profile-service';

const EditEducation =()=> {
    const {educationData}= useContext(ProfileContext);
    const [organisation, setOrganisation] = useState(educationData.organisation);
    const [course, setCourse] = useState(educationData.degree);
    const [from, setFrom] = useState(educationData.from);
    const [to, setTo] = useState(educationData.to);
    const [about, setAbout] = useState(educationData.about);

    const accessToken = localStorage.getItem("Token");

    const handleUpdate = async()=>{
        try {
            if(accessToken==null) return;
            await ProfileService.educationUpdate(accessToken, {
                organisation,
                degree: course,
                from,
                to,
                about
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleOrganisation = (value: string)=>{
        setOrganisation(value);
    }
    const handleCourse = (value: string)=>{
        setCourse(value);
    }
    const handleFrom = (value: string)=>{
        setFrom(value);
    }
    const handleTo = (value: string)=>{
        setTo(value);
    }
    const handleAbout = (value: string)=>{
        setAbout(value);
    }
  return (
    <div>   
        <TextField 
            label='Organisation'
            type='text'
            id='edit-organisation'
            value={organisation}
            placeholder='Organisation'
            onInput={handleOrganisation}
        />
        <TextField
              label='Course'
              type='text'
              id='edit-course'
              value={course}
              placeholder='Course'
              onInput={handleCourse}
        />
        <TextField
              label='From'
              type='text'
              id='edit-from'
              value={from}
              placeholder='Form'
              onInput={handleFrom}
        />
        <TextField
              label='To'
              type='text'
              id='edit-to'
              value={to}
              placeholder='To'
              onInput={handleTo}
        />
        <TextArea
            id='edit-about'
            value={about}
            onInput={handleAbout}
            label='About'
        />

        <Button btnName='Update' onclick={handleUpdate}/>
    </div>
  )
}

export default EditEducation;