import React from 'react';
import './App.css';
import NavBarTorneio from './Components/NavBar';
import Jogos from './Jogos';

function App() {
  return (
    <div className="App">
      <NavBarTorneio />

      <Jogos />

    </div>
  );
}

export default App;
