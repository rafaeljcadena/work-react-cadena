import React from 'react';
import NavBar from './components/NavBar'
import SobreMim from './components/SobreMim'
import Habilidades from './components/Habilidades'
import './styles/App.css';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <SobreMim />
      <Habilidades />
    </div>
  );
}
