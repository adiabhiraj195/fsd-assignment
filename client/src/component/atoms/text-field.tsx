import React from 'react'

interface TextFieldProps {
    value: string | number;
    placeholder: string;
    type: "text" | "password" | "email";
    onInput: Function;

}

const TextField = ({
    value,
    type,
    placeholder,
    onInput,

}: TextFieldProps) => {


    return (
        <div>
            <input
                value={value}
                type={type}
                placeholder={placeholder}
                onInput={(e)=> onInput((e.target as HTMLTextAreaElement).value)}
                className='input-field'
            />
        </div>
    )
}

export default TextField;