import React, { Component } from 'react';

class NewAppoitment extends Component {
  render(){
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para una nueva cita
          </h2>

          <form>
            <div className="form-group row">
              <label htmlFor="pet" className="col-sm-4 col-lg-2 col-form-label">Mascota</label>
              <div className="col-sm-8 col-lg-9">
                <input type="text" className="form-control" placeholder="Mascota" name="pet" id="pet"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="owner" className="col-sm-4 col-lg-3 col-form-label">Nombre del dueño</label>
              <div className="col-sm-8 col-lg-8">
                <input type="text" className="form-control" placeholder="Nombre del dueño de la mascota" id="owner" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="date" className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-3">
                <input type="date" className="form-control" name="date" id="date"/>
              </div>
              <label htmlFor="hour" className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-3">
                <input type="time" className="form-control" name="hour" id="hour"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="symptom" className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
              <div className="col-sm-8 col-lg-8">
                <textarea className="form-control" placeholder="Describe los sintomas" name="symptom" id="symptom" cols="30" rows="3">

                </textarea>
              </div>
            </div>

            <input type="submit" value="Added new appointment" className="py-3 mt-2 btn btn-success"/>
          </form>
        </div>
      </div>
    );
  }
}

export default NewAppoitment
