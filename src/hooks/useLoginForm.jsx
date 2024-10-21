// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const useLoginForm = () => {
//   const [loginData, setLoginData] = useState({
//     username: "",
//     password: "",
//   });

//   const formRef = useRef();
//   const navigation = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       //   const response = await axios.post(
//       //     "https://your-api-url.com/login",
//       //     loginData
//       //   );
//       //   console.log("Response:", response.data);
//       formRef.current.reset();

//       setLoginData({
//         username: "",
//         password: "",
//       });

//       navigation("/dashboard");
//       console.log(loginData);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value,
//     });
//   };

//   return {
//     loginData,
//     handleInputChange,
//     handleSubmit,
//     formRef,
//   };
// };

// export default useLoginForm;

// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Make sure to import axios

// const useLoginForm = () => {
//   const [loginData, setLoginData] = useState({
//     medicalLicenseNumber: "", // Changed from username to medicalLicenseNumber
//     hospitalId: "", // Changed from password to hospitalId
//   });

//   const formRef = useRef();
//   const navigation = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send the login data to the backend
//       const response = await axios.post("http://localhost:3000/login", {
//         medicalLicenseNumber: loginData.medicalLicenseNumber,
//         hospitalId: loginData.hospitalId,
//       });

//       // Assuming the response contains user data
//       const userData = response.data;
//       console.log("XX",response.data)

//       // Redirect based on user role
//       if (userData.role === "doctor") {
//         navigation("/doctor-dashboard");
//       } else if (userData.role === "receptionist") {
//         navigation("/reception-dashboard");
//       } else if (userData.role === "lab") {
//         navigation("/lab-dashboard");
//       } else {
//         alert("Unexpected role: " + userData.role);
//       }

//       // Reset form and loginData state
//       formRef.current.reset();
//       setLoginData({
//         medicalLicenseNumber: "",
//         hospitalId: "",
//       });
//     } catch (error) {
//       console.error("Login failed:", error);
//       alert("Login failed. Please check your medical license number and hospital ID.");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value,
//     });
//   };

//   return {
//     loginData,
//     handleInputChange,
//     handleSubmit,
//     formRef,
//   };
// };

// export default useLoginForm;

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure to import axios

const useLoginForm = () => {
  const [loginData, setLoginData] = useState({
    medicalLicenseNumber: "", // Changed from username to medicalLicenseNumber
    hospitalId: "", // Changed from password to hospitalId
  });

  const formRef = useRef();
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the login data to the backend
      const response = await axios.post("http://localhost:3000/login", {
        medicalLicenseNumber: loginData.medicalLicenseNumber,
        hospitalId: loginData.hospitalId,
      });

      // Assuming the response contains user data
      const userData = response.data.user;
      localStorage.setItem("medicalLicenseNumber", userData.medicalLicenseNumber);
      localStorage.setItem("hospitalId", response.data.hospital_id.hospitalId);
      // console.log("xxx", response.data.hospital_id.hospitalId);

      // Redirect based on user role
      if (userData.role === "doctor") {
        navigation("/doctor_dashboard");
      } else if (userData.role === "receptionist") {
        navigation("/dashboard?q=intake");
      } else if (userData.role === "lab") {
        navigation("/lab_dashboard");
      } else {
        alert("Unexpected role: " + userData.role);
      }

      // Reset form and loginData state
      // formRef.current.reset();
      // setLoginData({
      //   medicalLicenseNumber: "",
      //   hospitalId: "",
      // });
    } catch (error) {
      console.error("Login failed:", error);
      alert(
        "Login failed. Please check your medical license number and hospital ID."
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return {
    loginData,
    handleInputChange,
    handleSubmit,
    formRef,
  };
};

export default useLoginForm;
