import React from 'react';

const Buttom = ({ color, text, onClick}) => {
    return <button onClick={onClick} style={{backgroundColor: color}} className="btn">{text}</button>
}