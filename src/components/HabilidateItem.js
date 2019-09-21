import React from 'react';
import '../styles/HabilidadeItem.css'

export default function HabilidateItem({ nome, progress }){
  

  return (
    <div className='habilidade-item-container' style={{  }}>
      <div className='habilidade-item__label'>
        {nome}
      </div>
      <div className='habilidade-item__progress'>
        <div className='habilidade-item__progress--completed' style={{ width: `${progress || 0}%` }}></div>
      </div>
    </div>
  )
}