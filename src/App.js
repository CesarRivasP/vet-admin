import React, { Component } from 'react';
import Header from './components/header';
import './css/bootstrap.min.css';


class App extends Component {
  state = {

  }

  render(){
    return (
      <div className="container">
        <Header title="Administrador de Pacientes de Veterinario" />
      </div>
    );
  }
}

export default App;
