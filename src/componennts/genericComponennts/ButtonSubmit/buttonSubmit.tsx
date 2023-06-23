import React from 'react';
import './buttonSubmit.css';

function ButtonSubmit(props:any) {
    return (
        <button className="button-submit" type='submit' onClick={(e) => props.func(e)}>
            {props.text}
        </button>
    )
}
export default ButtonSubmit;