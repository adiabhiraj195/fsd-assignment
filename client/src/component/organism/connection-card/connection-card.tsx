import React from 'react';
import profile from '../../../assets/image/profile.png';
import "./connection-card.css";

interface ConnectionInterface {
    connectionName : String;
    as: String;
    organisation: String;
    isConnected?: Boolean;
}

const ConnectionCard = ({
    connectionName,
    as,
    organisation,
    isConnected
}: ConnectionInterface) => {

    const handleConnection = () => {
        console.log("connection clicked");
    }
    return (
        <div className='connection-card-wrap'>
            <div className='connection-card-detail'>
                <h2>{connectionName}</h2>
                <div className='connection-work-wrap'>
                    <p>{as}</p>
                    <p>{organisation}</p>
                </div>
                <div className='connection-btn-wrap'>
                    {/* <button onClick={handleConnection}>{isConnected? "Remove Connection": "Connect"}</button> */}
                    <button onClick={handleConnection}>Remove Connection</button>
                </div>

            </div>
            <div className='conector-profile-image'>
                <img src={profile}></img>
            </div>
        </div>
    )
}
export default ConnectionCard;