import React, { Component } from 'react';
import './App.css';

import { ListaDeMensagens } from './components/ListaDeMensagens'
import { Formulario } from './components/Formulario'

class App extends Component {
  render() {
    return (
    <div className="App">
      <ListaDeMensagens />
      <Formulario />
    </div>
  );}
}

export default App;
