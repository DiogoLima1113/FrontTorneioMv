import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Jogos from './Jogos';
import Jogadores from './Jogadores';
import Times from './Times'
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={ Jogos } />
          <Route path='/jogadores' component={ Jogadores } />
          <Route path='/times' component={ Times } />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
