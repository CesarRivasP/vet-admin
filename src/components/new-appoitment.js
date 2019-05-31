import React, { Component } from 'react';
import uuid from 'uuid';


class NewAppoitment extends Component {
  state = {
    appointment: {
      pet: '',
      owner: '',
      date: '',
      hour: '',
      symptom: ''
    },
    error: false
  }

  petRef = React.createRef();
  ownerRef = React.createRef();
  dateRef = React.createRef();
  hourRef = React.createRef();
  symptomRef = React.createRef();


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
  }

  render(){
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para una nueva cita
          </h2>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row pl-5">
              <label htmlFor="pet" className="col-sm-4 col-lg-2 col-form-label">Mascota</label>
              <div className="col-sm-8 col-lg-8">
                <input
                  ref={this.petRef}
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
            <div className="form-group row pl-5">
              <label htmlFor="owner" className="col-sm-4 col-lg-3 col-form-label">Nombre del dueño</label>
              <div className="col-sm-8 col-lg-7">
                <input
                  ref={this.ownerRef}
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
            <div className="form-group row pl-5">
              <label htmlFor="date" className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-3">
                <input
                  ref={this.dateRef}
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
                  ref={this.hourRef}
                  type="time"
                  className="form-control"
                  name="hour"
                  id="hour"
                  onChange={this.handleChange}
                  value={this.state.appointment.hour}
                />
              </div>
            </div>
            <div className="form-group row pl-5">
              <label htmlFor="symptom" className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
              <div className="col-sm-8 col-lg-8">
                <textarea
                  ref={this.symptomRef}
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

            <input type="submit" value="Nueva cita" className="py-1 mt-2 btn btn-success ml-5"/>
          </form>
        </div>
      </div>
    );
  }
}

export default NewAppoitment;
