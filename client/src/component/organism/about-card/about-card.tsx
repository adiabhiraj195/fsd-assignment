import React from 'react'
import Button from '../../atoms/button/sm-button';
import "./about-card.css";

interface AboutCaraProps {
    userFirstName: string;
}

const AboutCard = ({
    userFirstName,
}: AboutCaraProps) => {
    return (
        <div className='about-wrap'>
            <div className='about-heading'>
                <h3>About <span>{userFirstName}</span></h3>
                <Button btnName='Edit' />
            </div>
            <div className='about-para-wrap'>
                <p className='about-para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officiis sint, in incidunt ab fugiat asperiores, tempore, voluptatum repudiandae dolores veritatis dolorum doloremque earum!
                </p>
            </div>
        </div>
    )
}

export default AboutCard;
