import React, { useEffect, useState } from "react";
import "../../styles/maternalprofile.css";
import calculateGestationalAgeAndTrimester from "../../utils/calculate";

const MaternalProfile = ({ patient }) => {
  const [patientDetails, setPatientDetails] = useState({
    age: "",
    trimester: "",
    weeks: "",
  });

  useEffect(() => {
    if (patient) {
      const { weeks, trimester, age } = calculateGestationalAgeAndTrimester(
        patient.lmp,
        patient.date_of_birth
      );
      console.log(typeof weeks)
      setPatientDetails({ weeks, trimester, age });
    }
  }, [patient]);

  return (
    <div className="maternalprofile">
      <p className="title">Overview:</p>

      <div className="all-items">
        <div className="item">
          <div className="item-title">Age</div>
          <div className="item-value">
            {" "}
            {patient ? ` ${patientDetails.age}` : "XX"}
          </div>
          {/* <p>{patient ? `Ms. ${patient.first_name} ${patient.last_name}` : "Ms. Alexis Swayer"}</p> */}
        </div>
        <div className="item">
          <div className="item-title">Date Of Birth</div>
          <div className="item-value">
            {" "}
            {patient ? ` ${patient.date_of_birth}` : "XX"}
          </div>
        </div>
        <div className="item">
          <div className="item-title">Emergency Person</div>
          {/* <div className="item-value">Mark Milniah</div> */}
          <div className="item-value">
            {" "}
            {patient ? ` ${patient.emergency_phone}` : "XX"}
          </div>
        </div>
        <div className="item">
          <div className="item-title">Trimester</div>
          <div className="item-value">
            {patient ? ` ${patientDetails.trimester}` : "XX"}
          </div>
        </div>
        <div className="item">
          <div className="item-title">Parity</div>
          {/* <div className="item-value">0+2</div> */}
          <div className="item-value">
            {" "}
            {patient ? ` 0+${patient.parity}` : "XX"}
          </div>
        </div>
        <div className="item">
          <div className="item-title">Week</div>
          <div className="item-value">
            {patient ? ` ${patientDetails.weeks}` : "XX"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaternalProfile;
