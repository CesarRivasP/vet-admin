import React, { Component } from 'react';
import Header from './components/header';
import NewAppoitment from './components/new-appoitment';
import './css/bootstrap.min.css';


class App extends Component {
  state = {

  }

  render(){
    return (
      <div className="container">
        <Header title="Administrador de Pacientes de Veterinario" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppoitment />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
