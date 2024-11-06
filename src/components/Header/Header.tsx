import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='main-header'>
    
    <div className='col-1'>
        <h1>6 November</h1>

        <h2>2024 Wednesday</h2>
        
    </div>
    <div className='col-2'>
    <button className='add-button'>+</button>        
    </div>

    </div>
  )
}

export default Header