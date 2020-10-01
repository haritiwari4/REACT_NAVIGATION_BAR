import React from 'react';
import "./Button.css";

const button= (props)=>{
    return (
        <button disabled={props.disable} onClick={props.click} type="button" className={`My-btn ${props.color}  ${props.big?'big':''}`}>
            {props.text}
        </button>
    );
}

export default button;