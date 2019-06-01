import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import uuid from 'uuid';

const stateInitial = {
  appointment: {
    pet: '',
    owner: '',
    date: '',
    hour: '',
    symptom: ''
  },
  error: false
};

class NewAppoitment extends Component {
  state = { ...stateInitial }

  handleChange = (e) => {
    this.setState({
      appointment: {
        ...this.state.appointment,
        [e.target.name]: e.target.value
      }
    })
  }

  // Cuando el usuario envia el formulario
  handleSubmit = (e) => {
    e.preventDefault();

    // extraer los valores del state
    const { pet, owner, date, hour, symptom } = this.state.appointment;

    // validar que todos los campos esten llenos
    if(pet === '' || owner === '' || date === '' || hour === '' || symptom === ''){
      this.setState({ error: true })
      // Detener la ejecucion con un return
      return;
    }

    // generar objeto con los datos
    const newAppoitment = { ...this.state.appointment };
    newAppoitment.id = uuid()

    // agregar la cita al state de App.js
    this.props.createNewAppointment(newAppoitment);

    // COlocar en el state, el state inicial
    this.setState({
      ...stateInitial
    })
  }

  render(){

    // extraer valor de state
    const { error } = this.state;

    return (
      <div className="card mt-5 py-3 card-style">
        <div className="card-body">
          <h2 className="card-title text-center mb-3 title-form">
            Llena el formulario para una nueva cita
          </h2>
          <Divider />

          {
            error ?
              <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div>
              :
              null
          }

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row center-form center-form mt-5">
              <label htmlFor="pet" className="col-sm-4 col-lg-2 col-form-label">Mascota</label>
              <div className="col-sm-8 col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mascota"
                  name="pet"
                  id="pet"
                  onChange={this.handleChange}
                  value={this.state.appointment.pet}
                />
              </div>
            </div>
            <div className="form-group row center-form center-form">
              <label htmlFor="owner" className="col-sm-4 col-lg-3 col-form-label">Nombre del dueño</label>
              <div className="col-sm-8 col-lg-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del dueño de la mascota"
                  name="owner"
                  id="owner"
                  onChange={this.handleChange}
                  value={this.state.appointment.owner}
                />
              </div>
            </div>
            <div className="form-group row center-form center-form">
              <label htmlFor="date" className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-3">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  id="date"
                  onChange={this.handleChange}
                  value={this.state.appointment.date}
                />
              </div>
              <label htmlFor="hour" className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-3">
                <input
                  type="time"
                  className="form-control"
                  name="hour"
                  id="hour"
                  onChange={this.handleChange}
                  value={this.state.appointment.hour}
                />
              </div>
            </div>
            <div className="form-group row center-form center-form">
              <label htmlFor="symptom" className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
              <div className="col-sm-8 col-lg-8">
                <textarea
                  className="form-control"
                  placeholder="Describe los sintomas"
                  name="symptom"
                  id="symptom"
                  cols="30"
                  rows="3"
                  onChange={this.handleChange}
                  value={this.state.appointment.symptom} >
                </textarea>
              </div>
            </div>

            <input type="submit" value="Nueva cita" className="btn mt-3 ml-5 p-2 button-form"/>
          </form>
        </div>
      </div>
    );
  }
}

NewAppoitment.propTypes = {
  createNewAppointment: PropTypes.func.isRequired
}

export default NewAppoitment;
