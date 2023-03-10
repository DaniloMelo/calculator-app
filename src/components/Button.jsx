import React from "react";
import './Button.css'

export default props => {

    let cssClasses = 'button '
    cssClasses += props.double ? 'double ' : ''
    cssClasses += props.operation ? 'operation ' : ''

    // function operations(props){
    //     if(props.label === '+'){
    //         console.log('cliclou na soma')
    //     }else if(props.label === '-'){
    //         console.log('clicou na subtracao')
    //     }else if(props.label === '*'){
    //         console.log('clicou na multiplicacao')
    //     }else if(props.label === '/'){
    //         console.log('clicou na divisao')
    //     }else{
    //         return props.label
    //     }
    // }



    return (
        <button className={cssClasses} onClick={e => props.click(props.label)}>
            {props.label}
        </button>
    )
}

