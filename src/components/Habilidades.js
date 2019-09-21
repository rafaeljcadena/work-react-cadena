import React from 'react';
import '../styles/Habilidades.css'
import HabilidadeItem from './HabilidateItem'

export default function Habilidates(){
  

  return (
    <div>
      <div className='habilidades-container'>
        <div className='container'>
          <HabilidadeItem progress='30' nome='Python' />
          <HabilidadeItem progress='40' nome='React' />
          <HabilidadeItem progress='50' nome='Node' />
        </div>
      </div>
    </div>  
  )
}