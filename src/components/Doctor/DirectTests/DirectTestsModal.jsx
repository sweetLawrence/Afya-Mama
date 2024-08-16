// import React, { useState } from "react";
// import {
//   vital_signs,
//   random_blood_sugar,
//   general_exam,
// } from "../../../utils/testcategories";

// const DirectTestsModal = ({ text, closeTestModal, patient }) => {
//   const [results, setResults] = useState({});

//   const handleInputChange = () => {};

//   function getInference(test, value, category) {
//     let range = category[test];
//     if (Array.isArray(range)) {
//       if (category === vital_signs && typeof range[0] == "number") {
//         const numeric_value = parseFloat(value);
//         if (isNaN(numeric_value)) {
//           return "Invalid";
//         } else if (numeric_value < range[0]) {
//           return "Low";
//         } else if (numeric_value > range[1]) {
//           return "High";
//         } else {
//           return "Normal";
//         }
//       } else if (category == random_blood_sugar) {
//         return (
//           <select
//             value={value}
//             onChange={(e) => handleInputChange(test, e.target.value)}
//           >
//             <option value="normal">Normal</option>
//             <option value="low">Low</option>
//             <option value="high">High</option>
//           </select>
//         );
//       } else if (category === general_exam) {
//         return (
//           <select
//             value={value}
//             onChange={(e) => handleInputChange(test, e.target.value)}
//           >
//             {range.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         );
//       }
//     }
//   }

//   function handleSubmit() {}

//   return (
//     <div className="direct-tests-modal">
//       <form onSubmit={handleSubmit}>
//         <thead>
//           <tr>Tests</tr>
//           <tr>Results</tr>
//           <tr>Inference</tr>
//         </thead>
//         <tbody>

//         </tbody>
//       </form>
//     </div>
//   );
// };

// export default DirectTestsModal;




import React, { useState } from "react";
import '../../../styles/d-modal.css'
import {
  vital_signs,
  random_blood_sugar,
  general_exam,
} from "../../../utils/testcategories";
import CloseIcon from '@mui/icons-material/Close';

const DirectTestsModal = ({ text, closeTestModal, patient }) => {
  const [results, setResults] = useState({
    patient_id: patient.id
  });

  const handleInputChange = (test, value) => {
    setResults(prevResults => ({
      ...prevResults,
      [test]: value,
      [`${test}_inference`]: getInference(test, value, category),
    }));
  };

  function getInference(test, value, category) {
    let range = category[test];
    if (Array.isArray(range)) {
      if (category === vital_signs && typeof range[0] === "number") {
        const numeric_value = parseFloat(value);
        if (isNaN(numeric_value)) {
          return " ";
        } else if (numeric_value < range[0]) {
          return "Low";
        } else if (numeric_value > range[1]) {
          return "High";
        } else {
          return "Normal";
        }
      } else if (category === random_blood_sugar) {
        return (
          <select
            value={value || "normal"}
            onChange={(e) => handleInputChange(test, e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="low">Low</option>
            <option value="high">High</option>
          </select>
        );
      } else if (category === general_exam) {
        return (
          <select
            value={value || range[0]}
            onChange={(e) => handleInputChange(test, e.target.value)}
          >
            {range.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      }
    }
  }

  const renderTableRows = (category) => {
    return Object.keys(category).map((test) => (
      <tr key={test}>
        <td className="bg-def">{test.replace('_', ' ').toUpperCase()}</td>
        <td>
          <input
            type="text"
            value={results[test] || ''}
            placeholder={`Enter ${test} value`}
            onChange={(e) => handleInputChange(test, e.target.value)}
          />
        </td>
        <td className="bg-df">{getInference(test, results[test], category)}</td>
      </tr>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted results:", results);
    closeTestModal(); // Close the modal after submission
  };

  let category;
  if (text === "Vital Signs") {
    category = vital_signs;
  } else if (text === "RBS") {
    category = random_blood_sugar;
  } else if (text === "General Exam") {
    category = general_exam;
  }

  return (
    <div className="direct-tests-modal d-modal">
        <div className="header-section">
        {/* <button type="button" onClick={closeTestModal}>
          Close
        </button> */}
        <h3>{text}</h3>
        <div className="close-icon" onClick={closeTestModal}>
            <CloseIcon />
        </div>

        </div>
      <form onSubmit={handleSubmit}>
        <table className="hospital-table" border="1">
          <thead>
            <tr>
              <th className=" ">Tests</th>
              <th>Results</th>
              <th>Inference</th>
            </tr>
          </thead>
          <tbody>
            {category ? renderTableRows(category) : null}
          </tbody>
        </table>
        {/* <button type="submit">Submit</button> */}
        <div className="submissions">
        <input type='submit' className="sub" value={"Submit"}/>
        </div>

        
      </form>
    </div>
  );
};

export default DirectTestsModal;
