import React, { useState } from "react";
import "../../styles/labresults.css";
import NextAppointment from "../../Modals/NextAppointment";
import Ultrasound from "../../Modals/Ultrasound";

const LabResults = ({patient}) => {
  const [ultrasound, setUltrasound] = useState(false);
  const [appointment, setAppointment] = useState(false);

  function openModal(modalType) {
    switch (modalType) {
      case "ultrasound":
        setUltrasound(true);
        break;

      case "nextAppointment":
        setAppointment(true);
        break;

      default:
        break;
    }
  }
  return (
    <div className="labresults">
      {/* <div className="title">Lab Results:</div> */}
      <div className="all-results">
        <div className="results" onClick={() => openModal("nextAppointment")}>
          <div className="name">Next Appointment Date</div>
          {/* <div className="value">120/80mmHg</div> */}
        </div>
        <div className="results" onClick={() => openModal("ultrasound")}>
          <div className="name">Upload Ultrasound</div>
          {/* <div className="value">12.5 g/dl</div> */}
        </div>
      </div>

      {ultrasound && <Ultrasound setUltrasound={setUltrasound} patient={patient}/>}
      {appointment && <NextAppointment setAppointment={setAppointment} patient={patient}/>}
    </div>
  );
};

export default LabResults;
