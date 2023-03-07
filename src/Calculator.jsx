import React from 'react'
import './Calculator.css'
import Display from './components/Display'
import Button from './components/Button'

export default props => {

    function clearDisplay(){
        console.log('Cleanning...')
    }

    function getOperation(opr){
        console.log(opr)
    }

    function getDigit(digit){
        console.log(digit)
    }

    return (
        <div className='calculator'>
            <Display value={100} />
            <Button label='AC' click={clearDisplay} triple />
            <Button label='/' click={getOperation} operation/>
            <Button label='7' click={getDigit} />
            <Button label='8' click={getDigit} />
            <Button label='9' click={getDigit} />
            <Button label='*' click={getOperation} operation/>
            <Button label='4' click={getDigit} />
            <Button label='5' click={getDigit} />
            <Button label='6' click={getDigit} />
            <Button label='-' click={getOperation} operation/>
            <Button label='1' click={getDigit} />
            <Button label='2' click={getDigit} />
            <Button label='3' click={getDigit} />
            <Button label='+' click={getOperation} operation/>
            <Button label='0' click={getDigit} double/>
            <Button label='.' click={getDigit} />
            <Button label='=' click={getOperation} operation/>
        </div>
    )
}