import React, { useState } from 'react'
import ProfileService from '../service/profile-service';
import ProfieDetailCard from '../component/organism/profile-details/profile-detail';
import TextField from '../component/atoms/text-field/text-field';

const Test = () => {
    const [phone, setPhone] = useState<string>("")


    const accessToken = localStorage.getItem("Token");
    console.log(accessToken);
    const sendData = async (e: any) => {
        e.preventDefault();
        // if (!validate()) {
        //     return;
        // }

        try {
            if (accessToken == null) return;
            const result = await ProfileService.update(accessToken, { pNumber: phone });
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    const handleOnInputEmail = (value: string) => {
        setPhone(value);
    }
    return (
        <div>
            {/* <ProfieDetailCard /> */}
            <TextField
                id='test'
                type='text'
                placeholder='phone'
                value={phone}
                onInput={handleOnInputEmail}
            />
            <button onClick={sendData}>Send</button>
        </div>
    )
}

export default Test;
