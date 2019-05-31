import React from 'react';
import Appointment from './appointment';

const AppointmentList = ({ appointments, deleteAppointment }) => (
  <div className="card mt-0 py-3 card-style">
    <div className="card-body pl-10">
      <h2 className="card-title text-center title-form">
        Administra las citas aqui
      </h2>

      <div className="lista-citas">
        {
          appointments.map((appointment) => (
            <Appointment key={appointment.id} appointment={appointment} deleteAppointment={deleteAppointment} />
          ))
        }
      </div>
    </div>
  </div>
);

export default AppointmentList;
