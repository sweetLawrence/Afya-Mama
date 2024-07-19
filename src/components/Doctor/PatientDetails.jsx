import React from "react";
import "../../styles/patientdetail.css";
import DOCTOR from "../../assets/images/profile.png";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const PatientDetails = ({ patient }) => {
  console.log(patient)
  return (
    <div className="patientdetails">
      <div className="pic-name">
        <div className="img-container">
          <img src={DOCTOR} alt="doctor's image" />
        </div>
        {/* <p>Ms. Amaya Lance</p> */}
        {/* {patient ?? <p>{patient.first_name} {patient.last_name}</p> :  <p>Lawrence</p>} */}
        <p>{patient ? `Ms. ${patient.first_name} ${patient.last_name}` : "Ms. Alexis Swayer"}</p>
        
      </div>

      <div className="contact-details">
        <p className="title">Contact Details</p>
        <div className="details">
            <PhoneAndroidIcon style={{ color: '#2b50aa', fontSize:"1.3em" }}/>
            {/* <p>0713464634</p> */}
            {/* <p>{patient.phone_number}</p> */}
            <p>{patient ? `${patient.phone}` : "07xxxxxxxx"}</p>
        </div>
        <div className="details">
            <MailOutlineIcon style={{ color: '#2b50aa', fontSize:"1.3em" }}/>
            {/* <p>tsungulawrence@gmail.com</p> */}
            {/* <p>{patient.email}</p> */}
            <p>{patient ? `${patient.email}` : "template@domain"}</p>
        </div>
        {/* <div className="details">
            <PhoneAndroidIcon style={{ color: '#2b50aa' }}/>
            <p>0713464634</p>
        </div> */}
      </div>
    </div>
  );
};

export default PatientDetails;
