import React from 'react';
import '../styles/NavBarItem.css'

export default function NavBarItem(props) {

  return (
    <div className='navbar-item'>
      <h1>{props.title}</h1>
    </div>
  )
}