import React, { Component } from 'react';
import Header from './components/header';
import NewAppoitment from './components/new-appoitment';
import AppointmentList from './components/appointment-list';
import './css/bootstrap.min.css';


class App extends Component {
  state = {
    appointments: []
  }

  createNewAppointment = (data) => {
    console.log(data);
    // copiar el state actual. Siempre se recomienda al hacer modificaciones
    const appointments = [ ...this.state.appointments, data ];
    // despues se agrega el nuevo state
    this.setState({
      appointments
    })
  }

  // elimina las citas del state

  render(){
    return (
      <div className="container">
        <Header title="Administrador de Pacientes de Veterinario" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppoitment createNewAppointment={this.createNewAppointment} />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <AppointmentList appointments={this.state.appointments} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
