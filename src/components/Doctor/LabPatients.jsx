import React, { useEffect, useState } from "react";
import "../../styles/admitted-patients.css";
import PatientCard from "./PatientCard";
import axiosInstance from '../../utils/axios.jsx'
import LabPatientCard from "./LabPatientCard.jsx";


const LabPatients = ({ onSelectPatient }) => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axiosInstance.get("/api/collections/patients/records");
        setPatients(response.data.items);

        // Automatically select the first patient if there is one
        if (response.data.items.length > 0 && !selectedPatient) {
          const firstPatient = response.data.items[0];
          setSelectedPatient(firstPatient);
          onSelectPatient(firstPatient);
        }
      } catch (error) {
        console.error("Error fetching patients:", error);
        toast.error("Failed to fetch patients");
      }
    };

    fetchPatients();
  }, [onSelectPatient]);

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    onSelectPatient(patient);
  };

  const handleDischargePatient = (patientId) => {
    setPatients(patients.filter((patient) => patient.id !== patientId));
  
    if (selectedPatient && selectedPatient.id === patientId) {
      setSelectedPatient(null);
    }
  };
  
  return (
    <div className="doctor-admitted-patients">
      <h3>Admitted Patients</h3>
      <div className="patients-list">
        {patients.map((patient) => (
          <LabPatientCard
            key={patient.id}
            patient={patient}
            onSelect={() => handleSelectPatient(patient)}
            isSelected={selectedPatient && selectedPatient.id === patient.id}
            onDischarge={handleDischargePatient}
          />
        ))}
      </div>
    </div>
  );
};

export default LabPatients;
