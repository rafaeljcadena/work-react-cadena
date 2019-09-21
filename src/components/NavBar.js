import React from 'react';
import NavBarItem from './NavBarItem'
import '../styles/NavBar.css'

export default function NavBar() {
  
  return (
    <div className='navbar'>
      <NavBarItem title='Sobre mim' />
      <NavBarItem title='Habilidades' />
      <NavBarItem title='Projetos' />
      <NavBarItem title='Contato' />
    </div>
  )
}