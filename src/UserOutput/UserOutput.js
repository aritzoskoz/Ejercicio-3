import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p> (P1) - Username: <b>{props.userName}</b></p>
            <p><em> (P2) - Esto es UserOutput </em></p>
        </div>
    );
};

export default userOutput;