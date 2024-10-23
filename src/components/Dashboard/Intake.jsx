import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import NewPatient from "./NewPatient";
import { useSearchParams } from "react-router-dom";
import { Toaster, toast } from "sonner";
import "animate.css";

import afyamamalogo from "../../assets/images/afyamama.png";
import CheckinCard from "../CheckinCard";
import axiosInstance from "../../utils/axios";

const Intake = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const formOpenParam = searchParams.get("form") === "open";
  const [formOpen, setFormOpen] = useState(formOpenParam);
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [idSearchTerm, setIdSearchTerm] = useState("");
  const [patientFound, setPatientFound] = useState(false);
  const [foundPatient, setFoundPatient] = useState([]);
  const [admittedPatients, setAdmittedPatients] = useState([]);
  const idSearchInputRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [fetchAction, setFetchAction] = useState(false);

  function openIntakeForm() {
    setFormOpen(true);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("form", "open");

    setSearchParams(newSearchParams);
  }

  useEffect(() => {
    if (formOpen) {
      searchParams.set("form", "open");
    } else {
      searchParams.delete("form");
    }
    setSearchParams(searchParams);
  }, [formOpen, searchParams, setSearchParams]);




//   useEffect(() => {
//     const fetchAdmittedPatients = async () => {
//       const hospitalId = localStorage.getItem("hospitalId");
//         try {
//             const response = await axios.get(`/patients/admitted-patients/${hospitalId}`);
//             setAdmittedPatients(response.data);
//             setLoading(false);
//         } catch (err) {
//             // setError(err.response?.data?.message || 'An error occurred');
//             setLoading(false);
//         }
//     };

//     fetchAdmittedPatients();
// }, [fetchAction]);


  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const hospitalId = localStorage.getItem("hospitalId");
        const response = await axiosInstance.get(
          `/patients/admitted-patients/${hospitalId}`
        );
        setPatients(response.data);
        // console.log("Responzzz", response.data)
      } catch (error) {
        console.error("Error fetching patients:", error);
        toast.error("Failed to fetch patients");
      }
    };

    fetchPatients();
  }, [fetchAction]);

  const handleSearchKeyDown = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await axiosInstance.get(
          `/patients/check/${idSearchTerm}`
        );
        setIdSearchTerm(" ");

        const patient = response.data;
        console.log(patient);

        if (patient) {
          setFoundPatient((prev) => [...prev, patient]); // Add to admitted patients
          localStorage.setItem("patientId", patient.patient.id);
          toast.success(
            `Patient with National Id Number ${idSearchTerm} Found`
          );

          setPatientFound(true);

          setIdSearchTerm(""); // Clear state
          idSearchInputRef.current.value = "";
        } else {
          toast.error("Patient not found");
        }
      } catch (error) {
        toast.error("Patient not found");
        console.error("Error fetching patient:", error);
      }
    }
  };

  const filteredPatients = patients.filter(
    (patient) =>
      patient.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.national_id.toLowerCase().includes(searchTerm.toLowerCase())
  );

//   const filteredPatients = admittedPatients.filter(patient =>
//     patient.firstName.toLowerCase().includes(filter.toLowerCase()) ||
//     patient.lastName.toLowerCase().includes(filter.toLowerCase()) ||
//     patient.nationalId.toLowerCase().includes(filter.toLowerCase())
// );

  // console.log("PATIENTZZZZZ", admittedPatients);

  const handleAdmission = async () => {
    const patientId = localStorage.getItem("patientId");

    if (!patientId) {
      toast.error("No patient selected for admission");
      return;
    }

    const formatDateToYYYYMMDD = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
  };

  const admissionDate = formatDateToYYYYMMDD(new Date());

    try {
      const response = await axiosInstance.post("/patients/admit-patient", {
        patientId: patientId,
        admissionDate: String(admissionDate),
        receptionStaffId: localStorage.getItem("medicalLicenseNumber"),
        hospitalId: localStorage.getItem("hospitalId"),
      });

      if (response.status === 201) {
        toast.success("Patient admitted successfully");
        setPatientFound(false);
        setFetchAction(!fetchAction);
      }

      console.log("ADMISSION RESPONSE",response)
     
    } catch (error) {
      console.error("Error admitting patient:", error);
      // toast.error("Failed to admit patient");
      setPatientFound(false);
      toast.error(error.response?.data?.message)
      console.error(error.response?.data?.message || 'An error occurred');
    }
  };

  const patientName = `${foundPatient[0]?.patient.first_name} ${foundPatient[0]?.patient.last_name}`;

  return (
    <div className="intake">
      {formOpen && <div className="backdrop"></div>}

      <div className="top">
        <div className="icon">
          <SearchIcon style={{ color: "#3c4043" }} />
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search Patient By National ID"
          onChange={(e) => setIdSearchTerm(e.target.value)}
          onKeyDown={handleSearchKeyDown} // Attach keyDown event
          ref={idSearchInputRef}
        />
      </div>

      {patientFound && (
        <div className="found-patient-admit">
          <div className="p-name">{patientName}</div>
          <button onClick={handleAdmission}>Admit</button>
        </div>
      )}

      <div className="middle">
        <div className="card-wrapper">
          <div onClick={openIntakeForm} className="card xdf">
            <AddIcon className="gradient-mask" style={{ fontSize: "7em" }} />
          </div>
          <p>New Patient</p>
        </div>

        <div className="admitted-patients">
          <h2>Admitted Patients</h2>
          <div className="search_bar">
            <input
              type="text"
              placeholder="search patient"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="patients-table-wrapper">
            <table className="patients-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Check-in Time</th>
                </tr>
              </thead>

              
              {/* <tbody>
               

                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td
                      style={{
                        color: "#336BFF",
                        fontWeight: "600",
                        border: "none",
                      }}
                    >
                      {patient.first_name} {patient.last_name}
                    </td>
                    <td
                      style={{
                        color: "#336BFF",
                        fontWeight: "600",
                        border: "none",
                        background: "",
                      }}
                    >
                      {patient.national_id}
                    </td>
                    <td
                      style={{
                        color: "#336BFF",
                        fontWeight: "600",
                        border: "none",
                      }}
                    >
                      {patient.time},{patient.date}
                    </td>
                  </tr>
                ))}
              </tbody> */}

              
              
              <tbody>
                {filteredPatients.map((patient) => (
                  <tr
                    key={patient.id}
                    className="animate__animated animate__fadeInUp"
                  >
                    <td
                      style={{
                        color: "#336BFF",
                        fontWeight: "600",
                        border: "none",
                      }}
                    >
                      {patient.first_name} {patient.last_name}
                    </td>
                    <td
                      style={{
                        color: "#336BFF",
                        fontWeight: "600",
                        border: "none",
                        background: "",
                      }}
                    >
                      {patient.national_id}
                    </td>
                    <td
                      style={{
                        color: "#336BFF",
                        fontWeight: "600",
                        border: "none",
                      }}
                    >
                      {patient.time}, {patient.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="left statistics">
          {/* Statistics section content */}
        </div>
        <div className="right recent-activities">
          <h2>Recent Activities</h2>
          <table>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Activity</th>
                <th>Officer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>06/28/2024 @ 4:29pm</td>
                <td>Patient added</td>
                <td>Dr. J'onn</td>
              </tr>
              <tr>
                <td>06/28/2024 @ 4:35pm</td>
                <td>New Patient Admitted</td>
                <td>Dr. Mercy</td>
              </tr>
              <tr>
                <td>06/28/2024 @ 4:43pm</td>
                <td>Lab results Logged</td>
                <td>Dr. Moana</td>
              </tr>
              <tr>
                <td>06/28/2024 @ 4:49pm</td>
                <td>Patient 0331 discharged</td>
                <td>Dr. Danvers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Toaster richColors position="top-center" />
      {formOpen ? (
        <NewPatient
          setFormOpen={setFormOpen}
          fetchAction={fetchAction}
          setFetchAction={setFetchAction}
          patients={patients}
          setPatients={setPatients}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Intake;
