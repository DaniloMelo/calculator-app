import React, { useState } from 'react'
import './Calculator.css'
import Display from './components/Display'
import Button from './components/Button'

function Calculator(props) {
    const [displayValue, setDisplayValue] = useState(0)
    const [saveValue, setSaveValue] = useState(0)
    const [operator, setOperator] = useState(0)

    function clearDisplay() {
        setDisplayValue(0)
    }

    function getDigit(d) {
        displayValue === 0 ? setDisplayValue(d) : setDisplayValue(displayValue + d)
    }

    function percentage() {
        setDisplayValue(displayValue / 100)
    }

    function switchPositiveNegative() {
        displayValue > 0 ? setDisplayValue(-displayValue) : setDisplayValue(Math.abs(displayValue))
    }

    function operatorHandler(opr) {
        setOperator(opr)
        setSaveValue(displayValue)
        setDisplayValue(0)
    }

    function calc() {
        if (operator === '+') {
            setDisplayValue(parseFloat(saveValue) + parseFloat(displayValue))
        } else if (operator === '-') {
            setDisplayValue(saveValue - displayValue)
        } else if (operator === '*') {
            setDisplayValue(saveValue * displayValue)
        } else if (operator === '/') {
            setDisplayValue(saveValue / displayValue)
        }
    }

    return (
        <div className='calculator'>
            <Display value={displayValue} />
            <Button label='AC' click={clearDisplay} />
            <Button label='+/-' click={switchPositiveNegative} />
            <Button label='%' click={percentage} />
            <Button label='/' click={operatorHandler} operation />
            <Button label='7' click={getDigit} />
            <Button label='8' click={getDigit} />
            <Button label='9' click={getDigit} />
            <Button label='*' click={operatorHandler} operation />
            <Button label='4' click={getDigit} />
            <Button label='5' click={getDigit} />
            <Button label='6' click={getDigit} />
            <Button label='-' click={operatorHandler} operation />
            <Button label='1' click={getDigit} />
            <Button label='2' click={getDigit} />
            <Button label='3' click={getDigit} />
            <Button label='+' click={operatorHandler} operation />
            <Button label='0' click={getDigit} double />
            <Button label='.' click={getDigit} />
            <Button label='=' click={calc} operation />
        </div>
    )
}

export default Calculator


