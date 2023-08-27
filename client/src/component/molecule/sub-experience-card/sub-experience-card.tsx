import React from 'react'

interface SubExpCardInterface {
    from: Number;
    to: Number;
    organisation: String;
    as: String;
    position: String;
    index?: Number
}

const SubExperienceCard = ({
    from,
    to,
    organisation,
    as,
    position,
    index,
}: SubExpCardInterface) => {
    return (
        <div className='experience-wrap'>
            <div className='experience-heading-wrap'>
                <p></p>
            </div>
        </div>
    )
}

export default SubExperienceCard;