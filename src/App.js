import React, { Component } from 'react';
import Header from './components/header';
import NewAppoitment from './components/new-appoitment';
import AppointmentList from './components/appointment-list';
import './css/bootstrap.min.css';


class App extends Component {
  state = {
    appointments: []
  }

  // Cuando la aplicacion cargue
  componentDidMount(){
    const appointmentsLS = localStorage.getItem('appointments');

    // en caso de que haya algo
    if(appointmentsLS){
      this.setState({
        appointments: JSON.parse(appointmentsLS)  //para que lo convierta en un array de objetos
      })
    }
  }

  // Cuando agregamos o eliminamos una nueva cita
  componentDidUpdate(){
                        //nombre de la llave | hay que convertir el array de objetos
    localStorage.setItem('appointments', JSON.stringify(this.state.appointments))
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
  deleteAppointment = (id) => {
    console.log(id);
    // NUnca se le deben hacer cambios directamente al state
    // Siempre que se vaya a modificar hay que realizar una copia
    const currentAppointments = [ ...this.state.appointments ];

    // utilizar para sacar el id del array
    const appointments = currentAppointments.filter((appointment) => appointment.id !== id); //con el filter, este
    // guarda en esta constante los elementos que coincidan en la comparacion y deja en el array anterior si ese elemento
    // Aqui se quiere almacenar las citas que sean diferentes a la que fue seleccionada para ser elininada

    // actualizar el state
    this.setState({
      appointments
    })
  }

  render(){
    return (
      <div className="container">
        <Header title="Administrador de Pacientes de Veterinario" />
        <div className="row">
          <div className="col-md-9 mx-auto">
            <NewAppoitment createNewAppointment={this.createNewAppointment} />
          </div>
          <div className="mt-3 col-md-9 mx-auto">
            <AppointmentList appointments={this.state.appointments} deleteAppointment={this.deleteAppointment} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
