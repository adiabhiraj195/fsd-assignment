import React from 'react'

interface TextAreaProps {
    id: string;
    value: string | number;
    placeholder?: string;
    onInput: Function;
    label?: string;

}

const TextArea = ({
    id,
    value,
    placeholder,
    onInput,
    label,

}: TextAreaProps) => {
    return (
        <div>
            {label && <label className='input-label'>{label}</label>}

            <textarea
                id={id}
                value={value}
                placeholder={placeholder}
                onInput={(e) => onInput((e.target as HTMLTextAreaElement).value)}
                className='input-field'
                cols={5}
                rows={6}
            />
        </div>
    )
}

export default TextArea;