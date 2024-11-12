// import React, { useState } from 'react';

// const NextAppointment = ({setAppointment,patient}) => {
//   const [appointmentDate, setAppointmentDate] = useState('');

//   const handleDateChange = (event) => {
//     setAppointmentDate(event.target.value);
//   };

//   const handleSubmit = () => {
//     if (appointmentDate) {
//       // Perform submission action here, e.g., API call
//       console.log("Appointment date submitted:", appointmentDate);
//       alert("Appointment date set successfully!");
//       setAppointmentDate('');
//       setAppointment(false);
//     } else {
//       alert("Please select an appointment date.");
//     }
//   };

//   return (
//     <div className="d-modal appointment">
//       <div className="modal-content">
//         <h3>Set Next Appointment Date</h3>
//         <p>{patient?.first_name} {patient?.last_name}</p>
//         <div className="input-box">
//           <input
//             type="date"
//             name="appointment-date"
//             id="apt-date"
//             value={appointmentDate}
//             onChange={handleDateChange}
//           />
//         </div>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default NextAppointment;





















import React, { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../utils/axios';

const NextAppointment = ({ setAppointment, patient }) => {
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  const handleSubmit = async () => {
    if (appointmentDate && patient?.id) {
      const appointmentData = {
        patientId: patient.id,
        appointmentDate: appointmentDate,
      };

      try {
        
        const response = await axiosInstance.patch('/patients/appointments', appointmentData);

        if (response.status === 200) {
          console.log("Appointment date submitted:", appointmentData);
          alert("Appointment date set successfully!");
          setAppointmentDate('');
          setAppointment(false);
        } else {
          alert("Failed to set appointment date.");
        }
      } catch (error) {
        console.error("Error submitting appointment date:", error);
        alert("An error occurred while setting the appointment.");
      }
    } else {
      alert("Please select an appointment date and ensure patient ID is available.");
    }
  };

  return (
    <div className="d-modal appointment">
      <div className="modal-content">
        <h3>Set Next Appointment Date</h3>
        <p>{patient?.first_name} {patient?.last_name}</p>
        <div className="input-box">
          <input
            type="date"
            name="appointment-date"
            id="apt-date"
            value={appointmentDate}
            onChange={handleDateChange}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default NextAppointment;
