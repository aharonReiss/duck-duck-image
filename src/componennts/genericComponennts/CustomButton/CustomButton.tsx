import React from 'react';
import './CustomButton.css';

function CustomButton(props:any) {
    return (
        <button className="custom-button" onClick={props.func} style={{background:props.backroundcolor,color:props.color,border:props.border,width:props.width}}>
            {props.text}
        </button>
    )
}
export default CustomButton;