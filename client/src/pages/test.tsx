import React,{useState} from 'react'
import TextField from '../component/atoms/text-field/text-field';
import API from '../service/api';
import AuthService from '../service/auth-service';

const Test=()=> {
    const [phone, setPhone] = useState<string>("")
 


    const sendData = async (e: any) => {
        e.preventDefault();
        // if (!validate()) {
        //     return;
        // }

        try {
            const result = await AuthService.update({pNumber: phone});
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    const handleOnInputEmail =(value: string)=>{
        setPhone(value);
    }
    return (
    <div>
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
