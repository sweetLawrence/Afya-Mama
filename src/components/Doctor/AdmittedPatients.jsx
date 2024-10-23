// import React, { useEffect, useState } from "react";
// import "../../styles/admitted-patients.css";
// import SearchInput from "./SearchInput";
// import PatientCard from "./PatientCard";
// import axiosInstance from "../../utils/axios";

// const AdmittedPatients = ({ onSelectPatient }) => {
//   const [patients, setPatients] = useState([]);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [labAction, setLabAction] = useState(true);

//   useEffect(() => {
//     const fetchPatients = async () => {
//       const hospitalId = localStorage.getItem("hospitalId");
//       try {
//         const response = await axiosInstance.get(
//           // "/api/collections/patients/records"
//           `/patients/admitted-patients/${hospitalId}`
//         );
//         // setPatients(response.data.items);
//         setPatients(response.data);
//         // alert("REQ MADE")
//         console.log(response.data)


//         if (response.data.length > 0) {
//           const firstPatient = response.data[0];
//           setSelectedPatient(firstPatient);
//           onSelectPatient(firstPatient);
//         }

//       } catch (error) {
//         console.error("Error fetching patients:", error);
//         toast.error("Failed to fetch patients");
//       }
//     };

  
//       fetchPatients();
 
//   }, [labAction]);



//   // const handleDischarge = (patientId) => {
    
//   //   setPatients(patients.filter((patient) => patient.id !== patientId));
//   // };

//   const handleDischarge = async (patientId) => {
//     try {
//       // Make a DELETE request to remove the patient from the AdmittedPatients table
//       const response = await axiosInstance.delete(`/patients/discharge/${patientId}`);
  
//       if (response.status === 200) {
//         // Remove the patient from the local state after successful deletion
//         setPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== patientId));
  
//         // Optionally, refresh the list by refetching the patients after discharge
//         const hospitalId = localStorage.getItem("hospitalId");
//         const updatedResponse = await axiosInstance.get(`/patients/admitted-patients/${hospitalId}`);
//         setPatients(updatedResponse.data);
  
//         console.log("Patient successfully discharged.");
//       } else {
//         console.error("Failed to discharge the patient.");
//       }
//     } catch (error) {
//       console.error("Error discharging the patient:", error);
//       // Optionally, show an error message or toast
//     }
//   };
  

//   const handleSelectPatient = (patient) => {
//     // console.log("SELECTED",patient)
//     setSelectedPatient(patient);
//     onSelectPatient(patient);
//   };



//   const handleSendToLab = async (patientId) => {
//     try {
//       // Make an API request to update the status in the backend
//       const response = await axiosInstance.patch(`/patients/send-to-lab`, {
//         patientId:patientId
//       });

//       setLabAction(!labAction);
    

//       // alert(response?.data.status)
//       // setLabStatus(response?.data.status)

//       // if (response.status === 200) {
//       //   setPatients((prevPatients) =>
//       //     prevPatients.map((patient) =>
//       //       patient.id === patientId ? { ...patient, status: "in_lab" } : patient
//       //     )
//       //   );
//       // }
//     } catch (error) {
//       console.error("Error sending patient to lab:", error);
//       // Handle error (e.g., show toast)
//     }
//   };


//   return (
//     <div className="doctor-admitted-patients">
//       {/* <SearchInput /> */}
//       <h3>Admitted Patients</h3>
//       <div className="patients-list">
//         {patients.map((patient) => (
//           <PatientCard
//             key={patient.id}
//             patient={patient}
//             onDischarge={handleDischarge}
//             onSendToLab={handleSendToLab}
//             onSelect={() => handleSelectPatient(patient)}
//             isSelected={selectedPatient && selectedPatient.id === patient.id}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdmittedPatients;




//OG CODE ABOVE

























// import React, { useEffect, useState, useMemo } from "react";
// import "../../styles/admitted-patients.css";
// import axiosInstance from "../../utils/axios";
// import PatientCard from "./PatientCard";

// const AdmittedPatients = ({ onSelectPatient }) => {
//   const [patients, setPatients] = useState([]);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [labAction, setLabAction] = useState(true);

//   // Function to fetch patients
//   const fetchPatients = async () => {
//     const hospitalId = localStorage.getItem("hospitalId");
//     try {
//       const response = await axiosInstance.get(
//         `/patients/admitted-patients/${hospitalId}`
//       );
//       setPatients(response.data);

//       // Ensure selected patient state is preserved
//       if (selectedPatient) {
//         const updatedPatient = response.data.find(
//           (p) => p.id === selectedPatient.id
//         );
//         if (updatedPatient) {
//           setSelectedPatient(updatedPatient);
//           onSelectPatient(updatedPatient);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching patients:", error);
//     }
//   };

//   // Polling mechanism to refresh every 10 seconds
//   useEffect(() => {
//     fetchPatients();
//     const interval = setInterval(fetchPatients, 60000); // Refresh every 60 seconds
//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [labAction, selectedPatient]);

//   // Function to handle discharge
//   const handleDischarge = async (patientId) => {
//     try {
//       await axiosInstance.delete(`/patients/discharge/${patientId}`);
//       setPatients((prev) => prev.filter((patient) => patient.id !== patientId));
//     } catch (error) {
//       console.error("Error discharging the patient:", error);
//     }
//   };

//   // Function to send patient to lab
//   const handleSendToLab = async (patientId) => {
//     try {
//       await axiosInstance.patch(`/patients/send-to-lab`, { patientId });
//       setLabAction(!labAction); // Toggle action to trigger re-fetch
//     } catch (error) {
//       console.error("Error sending patient to lab:", error);
//     }
//   };

//   // Memoized selected patient to avoid unnecessary re-renders
//   const memoizedSelectedPatient = useMemo(() => selectedPatient, [
//     selectedPatient,
//   ]);

//   return (
//     <div className="doctor-admitted-patients">
//       <h3>Admitted Patients</h3>
//       <div className="patients-list">
//         {patients.map((patient) => (
//           <PatientCard
//             key={patient.id}
//             patient={patient}
//             onDischarge={handleDischarge}
//             onSendToLab={handleSendToLab}
//             onSelect={() => setSelectedPatient(patient)}
//             isSelected={memoizedSelectedPatient?.id === patient.id}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdmittedPatients;






























// import React, { useEffect, useState, useMemo } from "react";
// import "../../styles/admitted-patients.css";
// import axiosInstance from "../../utils/axios";
// import PatientCard from "./PatientCard";

// const AdmittedPatients = ({ onSelectPatient }) => {
//   const [patients, setPatients] = useState([]);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [isFetching, setIsFetching] = useState(false); // Track fetching state
//   const [labAction, setLabAction] = useState(true);

//   // Function to fetch patients
//   const fetchPatients = async () => {
//     setIsFetching(true); // Set fetching state to true
//     const hospitalId = localStorage.getItem("hospitalId");
//     try {
//       const response = await axiosInstance.get(
//         `/patients/admitted-patients/${hospitalId}`
//       );
//       setPatients(response.data);

//       // Preserve the selected patient across refreshes
//       if (selectedPatient) {
//         const updatedPatient = response.data.find(
//           (p) => p.id === selectedPatient.id
//         );
//         if (updatedPatient) {
//           setSelectedPatient(updatedPatient);
//           onSelectPatient(updatedPatient);
//         }
//       } else if (response.data.length > 0) {
//         // Automatically select the first patient if none is selected
//         const firstPatient = response.data[0];
//         setSelectedPatient(firstPatient);
//         onSelectPatient(firstPatient);
//       }
//     } catch (error) {
//       console.error("Error fetching patients:", error);
//     } finally {
//       setIsFetching(false); // Reset fetching state
//     }
//   };

//   // Polling mechanism to refresh every 60 seconds
//   useEffect(() => {
//     fetchPatients();
//     const interval = setInterval(fetchPatients, 20000); // Refresh every 60 seconds
//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [labAction]); // Removed selectedPatient from dependency array

//   // Function to handle discharge
//   const handleDischarge = async (patientId) => {
//     try {
//       await axiosInstance.delete(`/patients/discharge/${patientId}`);
//       setPatients((prev) => prev.filter((patient) => patient.id !== patientId));
//       // Clear selection if the discharged patient is selected
//       if (selectedPatient?.id === patientId) {
//         setSelectedPatient(null);
//       }
//     } catch (error) {
//       console.error("Error discharging the patient:", error);
//     }
//   };

//   // Function to send patient to lab
//   const handleSendToLab = async (patientId) => {
//     try {
//       await axiosInstance.patch(`/patients/send-to-lab`, { patientId });
//       setLabAction(!labAction); // Toggle action to trigger re-fetch
//     } catch (error) {
//       console.error("Error sending patient to lab:", error);
//     }
//   };

//   // Memoized selected patient to avoid unnecessary re-renders
//   const memoizedSelectedPatient = useMemo(() => selectedPatient, [selectedPatient]);

//   // Function to handle patient selection
//   const handleSelectPatient = (patient) => {
//     if (!isFetching) { // Only allow selection if not fetching
//       setSelectedPatient(patient);
//       onSelectPatient(patient);
//     }
//   };

//   return (
//     <div className="doctor-admitted-patients">
//       <h3>Admitted Patients</h3>
//       <div className="patients-list">
//         {patients.map((patient) => (
//           <PatientCard
//             key={patient.id}
//             patient={patient}
//             onDischarge={handleDischarge}
//             onSendToLab={handleSendToLab}
//             onSelect={() => handleSelectPatient(patient)} // Use the new handleSelectPatient function
//             isSelected={memoizedSelectedPatient?.id === patient.id}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdmittedPatients;













import React, { useEffect, useState, useMemo } from "react";
import "../../styles/admitted-patients.css";
import axiosInstance from "../../utils/axios";
import PatientCard from "./PatientCard";

const AdmittedPatients = ({ onSelectPatient }) => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isFetching, setIsFetching] = useState(false); // Track fetching state
  const [labAction, setLabAction] = useState(true);

  // Function to fetch patients
  const fetchPatients = async () => {
    setIsFetching(true); // Set fetching state to true
    const hospitalId = localStorage.getItem("hospitalId");
    try {
      const response = await axiosInstance.get(
        `/patients/admitted-patients/${hospitalId}`
      );
      setPatients(response.data);

      // Check if there's a stored selected patient ID in local storage
      const storedSelectedPatientId = localStorage.getItem("selectedPatientId");
      if (storedSelectedPatientId) {
        const updatedPatient = response.data.find(
          (p) => p.id === parseInt(storedSelectedPatientId)
        );
        if (updatedPatient) {
          setSelectedPatient(updatedPatient);
          onSelectPatient(updatedPatient);
        }
      } else if (response.data.length > 0) {
        // Automatically select the first patient if none is selected
        const firstPatient = response.data[0];
        setSelectedPatient(firstPatient);
        onSelectPatient(firstPatient);
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setIsFetching(false); // Reset fetching state
    }
  };

  // Polling mechanism to refresh every 60 seconds
  useEffect(() => {
    fetchPatients();
    const interval = setInterval(fetchPatients, 20000); // Refresh every 20 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [labAction]); // Removed selectedPatient from dependency array

  // Function to handle discharge
  const handleDischarge = async (patientId) => {
    try {
      await axiosInstance.delete(`/patients/discharge/${patientId}`);
      setPatients((prev) => prev.filter((patient) => patient.id !== patientId));
      // Clear selection if the discharged patient is selected
      if (selectedPatient?.id === patientId) {
        setSelectedPatient(null);
        localStorage.removeItem("selectedPatientId"); // Clear local storage on discharge
      }
    } catch (error) {
      console.error("Error discharging the patient:", error);
    }
  };

  // Function to send patient to lab
  const handleSendToLab = async (patientId) => {
    try {
      await axiosInstance.patch(`/patients/send-to-lab`, { patientId });
      setLabAction(!labAction); // Toggle action to trigger re-fetch
    } catch (error) {
      console.error("Error sending patient to lab:", error);
    }
  };

  // Memoized selected patient to avoid unnecessary re-renders
  const memoizedSelectedPatient = useMemo(() => selectedPatient, [selectedPatient]);

  // Function to handle patient selection
  const handleSelectPatient = (patient) => {
    if (!isFetching) { // Only allow selection if not fetching
      setSelectedPatient(patient);
      onSelectPatient(patient);
      localStorage.setItem("selectedPatientId", patient.id); // Store selected patient ID in local storage
    }
  };

  return (
    <div className="doctor-admitted-patients">
      <h3>Admitted Patients</h3>
      <div className="patients-list">
        {patients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onDischarge={handleDischarge}
            onSendToLab={handleSendToLab}
            onSelect={() => handleSelectPatient(patient)} // Use the new handleSelectPatient function
            isSelected={memoizedSelectedPatient?.id === patient.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AdmittedPatients;
