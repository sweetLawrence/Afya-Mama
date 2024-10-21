// import React, { useState } from "react";
// import "animate.css";
// import { commonTests, trimesterTests } from "../../../utils/testcategories";
// import calculateGestationalAgeAndTrimester from "../../../utils/calculate";
// import CloseIcon from "@mui/icons-material/Close";

// const DirectTestsModal = ({ patient, text, closeTestModal }) => {
//   const [results, setResults] = useState({
//     patient_id: patient.id,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setResults({ ...results, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Form submitted", results);
//     closeTestModal();
//   };

//   let trim_ = "";
//   let { trimester } = calculateGestationalAgeAndTrimester(patient.lmp);
//   if (trimester === "1st") {
//     trim_ = "firstTrimester";
//   } else if (trimester === "2nd") {
//     trim_ = "secondTrimester";
//   } else if (trimester === "3rd") {
//     trim_ = "thirdTrimester";
//   }

//   let text_parameter = "";
//   if (text == "Vital Signs") {
//     text_parameter = "VitalSigns";
//   } else if (text == "General Exam") {
//     text_parameter = "GeneralExam";
//   } else if (text == "Abdominal Exam") {
//     text_parameter = "AbdominalExam";
//   } else {
//     text_parameter = text;
//   }

//   const tests = [
//     ...(commonTests[text_parameter] || []),
//     ...(trimesterTests[trim_][text_parameter] || []),
//   ];
//   // alert(text )
//   return (
//     <div className="direct-tests-modal animate__animated animate__fadeIn">
//       <div className="top-case">
//         <h2>{text}</h2>
//         <CloseIcon
//           style={{
//             fontSize: "2em",
//             // border: "1.5px solid #2b50aa",
//             borderRadius: "50%",
//           }}
//           onClick={closeTestModal}
//         />
//       </div>

//       <form className="direct-tests-form" onSubmit={handleSubmit}>
//         {tests.map((test) => (
//           <div className="row" key={test.key}>
//             <label>{test.name}:</label>
//             {test.name.toLowerCase() == "general health" ? (
//               <textarea
//                 name={test.key}
//                 value={results[test.key] || ""}
//                 onChange={handleChange}
//                 placeholder={`${test.name.toLowerCase()}...`}
//                 id="w3review"
//               ></textarea>
//             ) : (
//               <input
//                 type="text"
//                 name={test.key}
//                 value={results[test.key] || ""}
//                 onChange={handleChange}
//                 placeholder={`${test.name.toLowerCase()}...`}
//               />
//             )}
//           </div>
//         ))}

//         <div className="navigations">
//           <button type="submit">Save</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DirectTestsModal;

// import React, { useState } from "react";
// import "animate.css";
// import { commonTests, trimesterTests } from "../../../utils/testcategories";
// import calculateGestationalAgeAndTrimester from "../../../utils/calculate";
// import CloseIcon from "@mui/icons-material/Close";
// import "../../../styles/direct-tests.css"; // Make sure to add your styles here

// const DirectTestsModal = ({ patient, text, closeTestModal }) => {
//   const [results, setResults] = useState({
//     patient_id: patient.id,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setResults({ ...results, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted", results);
//     closeTestModal();
//   };

//   let trim_ = "";
//   let { trimester } = calculateGestationalAgeAndTrimester(patient.lmp);
//   if (trimester === "1st") {
//     trim_ = "firstTrimester";
//   } else if (trimester === "2nd") {
//     trim_ = "secondTrimester";
//   } else if (trimester === "3rd") {
//     trim_ = "thirdTrimester";
//   }

//   let text_parameter = "";
//   if (text === "Vital Signs") {
//     text_parameter = "VitalSigns";
//   } else if (text === "General Exam") {
//     text_parameter = "GeneralExam";
//   } else if (text === "Abdominal Exam") {
//     text_parameter = "AbdominalExam";
//   } else {
//     text_parameter = text;
//   }

//   const tests = [
//     ...(commonTests[text_parameter] || []),
//     ...(trimesterTests[trim_][text_parameter] || []),
//   ];

//   return (
//     <div className="direct-tests-modal animate__animated animate__fadeIn">
//       <div className="top-case">
//         <h2>{text}</h2>
//         <CloseIcon
//           style={{
//             fontSize: "2em",
//             borderRadius: "50%",
//             cursor: "pointer"
//           }}
//           onClick={closeTestModal}
//         />
//       </div>

//       <form className="direct-tests-form" onSubmit={handleSubmit}>
//         <table className="tests-table">
//           <thead>
//             <tr>
//               <th>Test Name</th>
//               <th>Result</th>
//               <th>Comment</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tests.map((test) => (
//               <tr key={test.key}>
//                 <td>{test.name}:</td>
//                 <td>
//                   {test.name.toLowerCase() === "general health" ? (
//                     <textarea
//                       name={test.key}
//                       value={results[test.key] || ""}
//                       onChange={handleChange}
//                       // placeholder={`${test.name.toLowerCase()}...`}
//                     ></textarea>
//                   ) : (
//                     <input
//                       type="text"
//                       name={test.key}
//                       value={results[test.key] || ""}
//                       onChange={handleChange}
//                       className="d-input"
//                       // placeholder={`${test.name.toLowerCase()}...`}
//                     />
//                   )}
//                 </td>
//                 <td>
//                 <input
//                       type="text"
//                       name={test.comment}
//                       // value={results[test.key] || ""}
//                       onChange={handleChange}
//                       className="d-input"
//                       // placeholder={`Comment...`}
//                     />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="navigations">
//           <button type="submit">Save</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DirectTestsModal;

import React, { useState } from "react";
import "animate.css";
import { commonTests, trimesterTests } from "../../../utils/testcategories";
import calculateGestationalAgeAndTrimester from "../../../utils/calculate";
import CloseIcon from "@mui/icons-material/Close";
import axiosInstance from "../../../utils/axios";
import { Toaster, toast } from "sonner";

const DirectTestsModal = ({ patient, text, closeTestModal }) => {
  const { trimester } = calculateGestationalAgeAndTrimester(patient.lmp);
  const currentDate = new Date().toISOString().split("T")[0];

  const [results, setResults] = useState({
    patient_id: patient.id,
    doctorId:localStorage.getItem("medicalLicenseNumber"),
    trimester, 
    testDate: currentDate,

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResults({ ...results, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form submitted", results);
    try {
      const response = await axiosInstance.patch("/tests/direct-tests", results);
      console.log(response)
      toast.success(response.data.message)
     
    } catch (error) {
      console.log(error)
      toast.error("FAILURE")

    }
    

    closeTestModal();
  };

 
  const trimMap = {
    "1st": "firstTrimester",
    "2nd": "secondTrimester",
    "3rd": "thirdTrimester",
  };
  const trim_ = trimMap[trimester] || "";

  const textMap = {
    "Vital Signs": "VitalSigns",
    "General Exam": "GeneralExam",
    "Abdominal Exam": "AbdominalExam",
  };
  const text_parameter = textMap[text] || text;

  const tests = [
    ...(commonTests[text_parameter] || []),
    ...(trimesterTests[trim_][text_parameter] || []),
  ];

  return (
    <div className="direct-tests-modal animate__animated animate__fadeIn">
      <Toaster richColors position="top-center" />
      <div className="top-case">
        <h2>{text}</h2>
        <CloseIcon
          style={{
            fontSize: "2em",
            borderRadius: "50%",
          }}
          onClick={closeTestModal}
        />
      </div>

      <form className="direct-tests-form" onSubmit={handleSubmit}>
        <table className="tests-table">
          <thead>
            <tr>
              <th>Test</th>
              <th>Result</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test) => (
              <tr key={test.key}>
                <td>{test.name}</td>
                <td>
                  <input
                    type="text"
                    name={test.key}
                    value={results[test.key] || ""}
                    onChange={handleChange}
                    className="d-input"
                    placeholder={test.placeholder || ""}
                  />
                </td>
                <td>
                  {test.options.length > 0 ? (
                    <select
                      className="d-select"
                      name={`${test.key}_comment`}
                      value={results[`${test.key}_comment`] || ""}
                      onChange={handleChange}
                    >
                      <option value="" className="d-option">
                        Select
                      </option>
                      {test.options.map((option, idx) => (
                        <option key={idx} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      name={`${test.key}_comment`}
                      value={results[`${test.key}_comment`] || ""}
                      onChange={handleChange}
                      className="d-input"
                      placeholder="Comment"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="navigations">
          <button type="submit">Save</button>
        </div>
      </form>
      
    </div>
  );
};

export default DirectTestsModal;

// import React, { useState } from "react";
// import "animate.css";
// import { commonTests, trimesterTests } from "../../../utils/testcategories";
// import calculateGestationalAgeAndTrimester from "../../../utils/calculate";
// import CloseIcon from "@mui/icons-material/Close";
// import axios from "axios";

// const DirectTestsModal = ({ patient, text, closeTestModal }) => {
//   const [results, setResults] = useState({
//     patient_id: patient.id,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setResults({ ...results, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Structure the data by categories (e.g., vitalsigns, general_exam)
//     const structuredData = {
//       patient_id: results.patient_id,
//       [text.toLowerCase()]: tests.reduce((acc, test) => {
//         acc[test.key] = {
//           result: results[test.key] || "",
//           comment: results[`${test.key}_comment`] || ""
//         };
//         return acc;
//       }, {})
//     };

//     console.log("Submitting data:", structuredData);

//     try {
//       // await axios.patch(`/tests/direct-tests/${results.patient_id}`, structuredData);
//       await axios.patch(`/tests/direct-tests`, structuredData);

//       console.log("Data successfully submitted");
//     } catch (error) {
//       console.error("Error submitting data:", error);
//     }

//     closeTestModal();
//   };

//   const { trimester } = calculateGestationalAgeAndTrimester(patient.lmp);
//   const trimMap = {
//     "1st": "firstTrimester",
//     "2nd": "secondTrimester",
//     "3rd": "thirdTrimester"
//   };
//   const trim_ = trimMap[trimester] || "";

//   const textMap = {
//     "Vital Signs": "VitalSigns",
//     "General Exam": "GeneralExam",
//     "Abdominal Exam": "AbdominalExam",
//   };
//   const text_parameter = textMap[text] || text;

//   const tests = [
//     ...(commonTests[text_parameter] || []),
//     ...(trimesterTests[trim_][text_parameter] || []),
//   ];

//   return (
//     <div className="direct-tests-modal animate__animated animate__fadeIn">
//       <div className="top-case">
//         <h2>{text}</h2>
//         <CloseIcon
//           style={{
//             fontSize: "2em",
//             borderRadius: "50%",
//           }}
//           onClick={closeTestModal}
//         />
//       </div>

//       <form className="direct-tests-form" onSubmit={handleSubmit}>
//         <table className="tests-table">
//           <thead>
//             <tr>
//               <th>Test</th>
//               <th>Result</th>
//               <th>Comment</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tests.map((test) => (
//               <tr key={test.key}>
//                 <td>{test.name}</td>
//                 <td>
//                   <input
//                     type="text"
//                     name={test.key}
//                     value={results[test.key] || ""}
//                     onChange={handleChange}
//                     className="d-input"
//                     placeholder={test.placeholder || ""}
//                   />
//                 </td>
//                 <td>
//                   {test.options.length > 0 ? (
//                     <select
//                       className="d-select"
//                       name={`${test.key}_comment`}
//                       value={results[`${test.key}_comment`] || ""}
//                       onChange={handleChange}
//                     >
//                       <option value="" className="d-option">Select</option>
//                       {test.options.map((option, idx) => (
//                         <option key={idx} value={option}>
//                           {option}
//                         </option>
//                       ))}
//                     </select>
//                   ) : (
//                     <input
//                       type="text"
//                       name={`${test.key}_comment`}
//                       value={results[`${test.key}_comment`] || ""}
//                       onChange={handleChange}
//                       className="d-input"
//                       placeholder="Comment"
//                     />
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="navigations">
//           <button type="submit">Save</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DirectTestsModal;
