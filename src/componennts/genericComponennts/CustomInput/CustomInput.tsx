import React from 'react';
import './CustomInput.css';

function CustomInput(props:any) {
    return (
        <input className='custom-input' type={props.type} placeholder={props.placeholder} onChange={(e) => props.onChangeInput(e)} style={{width: props.width,margin:props.margin}}/>
    )
}
export default CustomInput;