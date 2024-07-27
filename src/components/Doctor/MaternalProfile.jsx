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
      console.log(typeof weeks);
      setPatientDetails({ weeks, trimester, age });
    }
  }, [patient]);

  let borderColor = ""
  if(patient && patient.hiv_status=="+"){
    borderColor = '#f178ab'
  }
  else{
    borderColor = '#dbf0f0';
  }


  return (
    <div className="maternalprofile" style={{borderColor:borderColor}}>
      <p className="title">Overview:</p>

      <div className="all-items">
        <div className="item">
          <div className="item-title">Age</div>
          <div className="item-value">
            {" "}
            {patient ? ` ${patientDetails.age}` : "xx"}
          </div>
          {/* <p>{patient ? `Ms. ${patient.first_name} ${patient.last_name}` : "Ms. Alexis Swayer"}</p> */}
        </div>
        <div className="item">
          <div className="item-title">Date Of Birth</div>
          <div className="item-value">
            {" "}
            {patient ? ` ${patient.date_of_birth}` : "yyyy-mm-dd"}
          </div>
        </div>
        <div className="item">
          <div className="item-title">Emergency Contact</div>
          {/* <div className="item-value">Mark Milniah</div> */}
          <div className="item-value">
            {" "}
            {patient ? ` ${patient.emergency_phone}` : "xxxxxxxxxx"}
          </div>
        </div>
        <div className="item">
          <div className="item-title">Trimester</div>
          <div className="item-value">
            {patient ? ` ${patientDetails.trimester}` : "xxx"}
          </div>
        </div>
        <div className="item">
          <div className="item-title">Parity</div>
          {/* <div className="item-value">0+2</div> */}
          <div className="item-value">
            {" "}
            {patient ? ` 0+${patient.parity}` : "xx"}
          </div>
        </div>
        <div className="item">
          <div className="item-title">Week</div>
          <div className="item-value">
            {patient ? ` ${patientDetails.weeks}` : "xx"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaternalProfile;
