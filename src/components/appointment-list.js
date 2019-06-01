import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Appointment from './appointment';

const AppointmentList = ({ appointments, deleteAppointment }) => (
  <div className="card mt-0 py-3 card-style">
    <div className="card-body pl-5">
      <h2 className="card-title text-center title-form">
        Administra las citas aqui
      </h2>
      <Divider />

      <div className="lista-citas mt-4">
        {
          appointments.map((appointment) => (
            <Appointment key={appointment.id} appointment={appointment} deleteAppointment={deleteAppointment} />
          ))
        }
      </div>
    </div>
  </div>
);

AppointmentList.propTypes = {
  appointments: PropTypes.array.isRequired,
  deleteAppointment: PropTypes.func.isRequired
}

export default AppointmentList;
