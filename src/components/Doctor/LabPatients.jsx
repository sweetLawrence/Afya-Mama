import React, { useEffect, useState } from "react";
import "../../styles/admitted-patients.css";
import PatientCard from "./PatientCard";
import axiosInstance from "../../utils/axios.jsx";
import LabPatientCard from "./LabPatientCard.jsx";

const LabPatients = ({ onSelectPatient }) => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      const hospitalId = localStorage.getItem("hospitalId");
      try {
        // const response = await axiosInstance.get("/api/collections/patients/records");
        // const response = await axiosInstance.get("/patients/lab");
        const response = await axiosInstance.get(`/patients/lab/${hospitalId}`);
        setPatients(response.data);
        console.log("LAB RATS", response);

        // Automatically select the first patient if there is one
        if (response.data.length > 0) {
          //&& !selectedPatient
          const firstPatient = response.data[0];
          setSelectedPatient(firstPatient);
          onSelectPatient(firstPatient);
        }
      } catch (error) {
        console.error("Error fetching patients:", error);
        toast.error("Failed to fetch patients");
      }
    };

    fetchPatients();
  }, []); //onSelectPatient

  const handleSelectPatient = (patient) => {
    // console.log("SELECTED",patient)
    setSelectedPatient(patient);
    onSelectPatient(patient);
  };

  const handleDischargePatient = (patientId) => {
    setPatients(patients.filter((patient) => patient.id !== patientId));

    if (selectedPatient && selectedPatient.id === patientId) {
      setSelectedPatient(null);
    }
  };

  // console.log("Patiens wa lab", patients);
  console.log("XX",selectedPatient);
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

// import React, { useEffect, useState } from "react";
// import "../../styles/admitted-patients.css";
// import LabPatientCard from "./LabPatientCard.jsx";

// import axiosInstance from "../../utils/axios.jsx";

// const LabPatients = ({ onSelectPatient }) => {
//   const [patients, setPatients] = useState([]);
//   const [selectedPatient, setSelectedPatient] = useState(null);

//   useEffect(() => {
//     const fetchPatients = async () => {
//       const hospitalId = localStorage.getItem("hospitalId");
//       try {
//         const response = await axiosInstance.get(`/patients/lab/${hospitalId}`);
//         setPatients(response.data);
//         console.log("LAB PATIENTS", response.data);

//         // Automatically select the first patient if there is one
//         if (response.data.length > 0) {
//           const firstPatient = response.data[0];
//           setSelectedPatient(firstPatient);
//           onSelectPatient(firstPatient);
//         }
//       } catch (error) {
//         console.error("Error fetching patients:", error);
//         // You may want to handle errors here (e.g., showing a toast notification)
//       }
//     };

//     fetchPatients();
//   }, [onSelectPatient]); // Add onSelectPatient to dependency array

//   const handleSelectPatient = (patient) => {
//     setSelectedPatient(patient);
//     onSelectPatient(patient);
//   };

//   const handleDischargePatient = (patientId) => {
//     setPatients(patients.filter((patient) => patient.id !== patientId));

//     if (selectedPatient && selectedPatient.id === patientId) {
//       setSelectedPatient(null);
//     }
//   };

//   return (
//     <div className="doctor-admitted-patients">
//       <h3>Admitted Patients</h3>
//       <div className="patients-list">
//         {patients.map((patient) => (
//           <LabPatientCard
//             key={patient.id}
//             patient={patient}
//             onSelect={() => handleSelectPatient(patient)}
//             isSelected={selectedPatient && selectedPatient.id === patient.id}
//             onDischarge={handleDischargePatient}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LabPatients;




































// import React, { useEffect, useState, useRef, useMemo } from "react";
// import "../../styles/admitted-patients.css";
// import LabPatientCard from "./LabPatientCard.jsx";
// import axiosInstance from "../../utils/axios.jsx";

// const LabPatients = ({ onSelectPatient }) => {
//   const [patients, setPatients] = useState([]);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const selectedPatientRef = useRef(null); // Store the selected patient

//   // Fetch patients data
//   const fetchPatients = async () => {
//     const hospitalId = localStorage.getItem("hospitalId");
//     try {
//       const response = await axiosInstance.get(`/patients/lab/${hospitalId}`);
//       setPatients(response.data);

//       // Preserve the selected patient across refreshes
//       if (selectedPatientRef.current) {
//         const refreshedPatient = response.data.find(
//           (patient) => patient.id === selectedPatientRef.current.id
//         );
//         if (refreshedPatient) {
//           setSelectedPatient(refreshedPatient);
//           onSelectPatient(refreshedPatient);
//         }
//       } else if (response.data.length > 0) {
//         // Automatically select the first patient if none is selected
//         const firstPatient = response.data[0];
//         setSelectedPatient(firstPatient);
//         onSelectPatient(firstPatient);
//       }
//     } catch (error) {
//       console.error("Error fetching patients:", error);
//       // Optionally handle error
//     }
//   };

//   useEffect(() => {
//     fetchPatients();

//     // Refresh every 10 seconds
//     const intervalId = setInterval(fetchPatients, 20000);

//     // Cleanup the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array ensures this runs once on mount

//   // Handle patient selection
//   const handleSelectPatient = (patient) => {
//     setSelectedPatient(patient);
//     selectedPatientRef.current = patient; // Keep reference to the selected patient
//     onSelectPatient(patient);
//   };

//   // Handle patient discharge
//   const handleDischargePatient = (patientId) => {
//     setPatients(patients.filter((patient) => patient.id !== patientId));

//     if (selectedPatient && selectedPatient.id === patientId) {
//       setSelectedPatient(null);
//       selectedPatientRef.current = null;
//     }
//   };

//   // Memoize the selected patient to prevent unnecessary re-renders
//   const memoizedSelectedPatient = useMemo(() => selectedPatient, [selectedPatient]);

//   return (
//     <div className="doctor-admitted-patients">
//       <h3>Admitted Patients</h3>
//       <div className="patients-list">
//         {patients.map((patient) => (
//           <LabPatientCard
//             key={patient.id}
//             patient={patient}
//             onSelect={() => handleSelectPatient(patient)}
//             isSelected={memoizedSelectedPatient && memoizedSelectedPatient.id === patient.id}
//             onDischarge={handleDischargePatient}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LabPatients;





















// import React, { useEffect, useState, useRef, useMemo } from "react";
// import "../../styles/admitted-patients.css";
// import LabPatientCard from "./LabPatientCard.jsx";
// import axiosInstance from "../../utils/axios.jsx";

// const LabPatients = ({ onSelectPatient }) => {
//   const [patients, setPatients] = useState([]);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const selectedPatientRef = useRef(null); // Store the selected patient

//   // Fetch patients data
//   const fetchPatients = async () => {
//     const hospitalId = localStorage.getItem("hospitalId");
//     try {
//       const response = await axiosInstance.get(`/patients/lab/${hospitalId}`);
//       setPatients(response.data);

//       // Preserve the selected patient across refreshes
//       const storedSelectedPatientId = localStorage.getItem("selectedLabPatientId");
//       if (storedSelectedPatientId) {
//         const refreshedPatient = response.data.find(
//           (patient) => patient.id === parseInt(storedSelectedPatientId)
//         );
//         if (refreshedPatient) {
//           setSelectedPatient(refreshedPatient);
//           selectedPatientRef.current = refreshedPatient; // Update the reference
//           onSelectPatient(refreshedPatient);
//         }
//       } else if (response.data.length > 0) {
//         // Automatically select the first patient if none is selected
//         const firstPatient = response.data[0];
//         setSelectedPatient(firstPatient);
//         selectedPatientRef.current = firstPatient; // Update the reference
//         onSelectPatient(firstPatient);
//       }
//     } catch (error) {
//       console.error("Error fetching patients:", error);
//       // Optionally handle error
//     }
//   };

//   useEffect(() => {
//     fetchPatients();

//     // Refresh every 20 seconds
//     const intervalId = setInterval(fetchPatients, 5000);

//     // Cleanup the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array ensures this runs once on mount

//   // Handle patient selection
//   const handleSelectPatient = (patient) => {
//     setSelectedPatient(patient);
//     selectedPatientRef.current = patient; // Keep reference to the selected patient
//     onSelectPatient(patient);
//     localStorage.setItem("selectedLabPatientId", patient.id); // Store selected patient ID in local storage
//   };

//   // Handle patient discharge
//   const handleDischargePatient = (patientId) => {
//     setPatients(patients.filter((patient) => patient.id !== patientId));

//     if (selectedPatient && selectedPatient.id === patientId) {
//       setSelectedPatient(null);
//       selectedPatientRef.current = null;
//       localStorage.removeItem("selectedLabPatientId"); // Clear local storage on discharge
//     }
//   };

//   // Memoize the selected patient to prevent unnecessary re-renders
//   const memoizedSelectedPatient = useMemo(() => selectedPatient, [selectedPatient]);

//   return (
//     <div className="doctor-admitted-patients">
//       <h3>Admitted Patients</h3>
//       <div className="patients-list">
//         {patients.map((patient) => (
//           <LabPatientCard
//             key={patient.id}
//             patient={patient}
//             onSelect={() => handleSelectPatient(patient)}
//             isSelected={memoizedSelectedPatient && memoizedSelectedPatient.id === patient.id}
//             onDischarge={handleDischargePatient}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LabPatients;




















