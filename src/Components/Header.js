import React from 'react'
import Button from './Button'
import '../index.css'

const Header = ({ showForm, changeTextAndColor }) => {
    return (
        <header className='header'>
            <h2 className='app-header'>Task Manager App</h2>
            <Button onClock={showForm} color={changeTextAndColor  ? 'red' : 'green'} text={changeTextAndColor ? 'Close' : 'Add'} />
        </header>
    )
}

export default Header