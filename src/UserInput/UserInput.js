import React from 'react';

const userInput = (props) => {

    const inputStyle = {
        margin: '10px',
        padding: '15px',
        border: '4px solid black',
        background: 'yellow',
    };

    return <input 
        type="text" 
        style={inputStyle}
        onChange={props.changed} 
        value={props.currentName} />;
};

export default userInput;