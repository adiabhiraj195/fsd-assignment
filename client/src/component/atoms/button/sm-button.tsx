import React from 'react'
import "./sm-button.css";

interface ButtonInterface {
    btnName: string;
    onClick?: Function;
}

const Button = ({
    btnName,
    onClick
}: ButtonInterface) => {
    return (
        <div className='button-wrap'>
            <button
                className='sm-btn'
                onClick={()=>onClick}
            >
                {btnName}
            </button>
        </div>
    )
}

export default Button;
