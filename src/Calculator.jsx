import React from 'react'
import './Calculator.css'
import Display from './components/Display'

export default props => {
    return (
        <div className='calculator'>
            <Display value={100} />
        </div>
    )
}