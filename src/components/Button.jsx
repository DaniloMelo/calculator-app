import React from "react";
import './Button.css'

export default props => {

    let cssClasses = 'button '
    cssClasses += props.double ? 'double ' : ''
    cssClasses += props.triple ? 'triple ' : ''
    cssClasses += props.operation ? 'operation ' : ''

    return (
        <button className={cssClasses} onClick={e => props.click(props.label)}>
            {props.label}
        </button>
    )
}

