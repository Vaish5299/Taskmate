
import React from 'react';
import Logo from  "../assets/taskmate_logo.jpg";

function Header () {
 

  return (
    <header >
      <div className='logo'>
      <img src={Logo} alt="taskmate logo"/>
     <h3>Taskmate</h3>
      </div>
      
    </header>
  )
}

export default Header
