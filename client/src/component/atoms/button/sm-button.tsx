import React from 'react'
import "./sm-button.css";

interface ButtonInterface {
    btnName: string;
    onclick: Function;
}

const Button = ({
    btnName,
    onclick
}: ButtonInterface) => {
    return (
        <div className='button-wrap'>
            <button
                className='sm-btn'
                onClick={() => onclick()}
            >
                {btnName}
            </button>
        </div>
    )
}

export default Button;
