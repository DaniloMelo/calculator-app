import React from "react";
import './Button.css'

function Button(props) {
    let cssClasses = 'button '
    cssClasses += props.double ? 'double ' : ''
    cssClasses += props.operation ? 'operation ' : ''

    return (
        <button className={cssClasses} onClick={e => props.click(props.label)}>
            {props.label}
        </button>
    )
}

export default Button