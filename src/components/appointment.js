import React from 'react';

const Appointment = ({ appointment, deleteAppointment }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{ appointment.pet }</h3>

      <p className="card-text">
        <span>Nombre del Dueño: </span>{ appointment.owner }
      </p>
      <p className="card-text">
        <span>Fecha </span>{ appointment.date }
      </p>
      <p className="card-text">
        <span>Hora: </span>{ appointment.hour }
      </p>
      <p className="card-text">
        <span>Sintomas: </span>{ appointment.symptom }
      </p>

      <button
        className="btn btn-danger button-delete"
        onClick={() => deleteAppointment(appointment.id)}> {/* Asi si espera el click */}
        {/* onClick={deleteAppointment(appointment.id)}> Asi se ejecuta automaticamente sin el click */}
        Borrar &times;
      </button>
    </div>
  </div>
);

export default Appointment;
