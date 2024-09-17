import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axios";
import "./styles/patientstable.css";

const LabPatientsTable = ({ onSelectPatient }) => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axiosInstance.get(
          "/api/collections/patients/records"
        );
        setPatients(response.data.items);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  const filteredPatients = patients.filter(
    (patient) =>
      patient.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.national_id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lab-patients-table">
      {/* <h2>Patients Sent to Lab</h2> */}
      <div className="search_bar">
        <input
          className="lab-input"
          type="text"
          placeholder="Search patient by name or ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="patients-table-wrapper">
        <table className="patients-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>National ID</th>
              <th>Trimester</th>
              <th>Sent By</th>
              <th>Check-in Time</th>
            </tr>
          </thead>

          <tbody>
            {filteredPatients.map((patient) => (
              <tr
                key={patient.id}
                className="patients-row"
                onClick={() => onSelectPatient(patient)}
              >
                <td>{`${patient.first_name} ${patient.last_name}`}</td>
                <td>{patient.national_id}</td>
                <td>{patient.trimester}</td>
                <td>{patient.sent_by}</td>
                <td>{`${patient.time}, ${patient.date}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LabPatientsTable;
