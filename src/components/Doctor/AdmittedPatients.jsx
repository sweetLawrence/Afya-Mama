import React, { useEffect, useState } from "react";
import "../../styles/admitted-patients.css";
import SearchInput from "./SearchInput";
import PatientCard from "./PatientCard";
import axiosInstance from "../../utils/axios";

const AdmittedPatients = ({ onSelectPatient }) => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axiosInstance.get(
          "/api/collections/patients/records"
        );
        setPatients(response.data.items);
      } catch (error) {
        console.error("Error fetching patients:", error);
        toast.error("Failed to fetch patients");
      }
    };

    fetchPatients();
  }, []);



  const handleDischarge = (patientId) => {
    // Handle discharge logic here, e.g., update the status in the backend and update the local state
    setPatients(patients.filter((patient) => patient.id !== patientId));
  };

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    onSelectPatient(patient);
  };


  return (
    <div className="doctor-admitted-patients">
      {/* <SearchInput /> */}
      <h3>Admitted Patients</h3>
      <div className="patients-list">
        {patients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onDischarge={handleDischarge}
            onSelect={() => handleSelectPatient(patient)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdmittedPatients;
