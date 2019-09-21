import React from 'react';


export default function SobreMim(){

  return (
    <div className='container'>
      <div style={{ display: 'flex', alignItems: 'center', height: '100vh', paddingTop: '81px' }}>
        <div className='photo-container'>
          <img className='photo-perfil' src='https://picsum.photos/seed/picsum/200/300' alt='' />
        </div>
        <div className='text-container'>
          <p>Olá, aqui fica a descrição do sobre mim</p>
        </div>
      </div>
    </div>

  )
}