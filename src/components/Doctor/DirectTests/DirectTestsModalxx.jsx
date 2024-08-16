import React, { useState } from "react";
import {
  vital_signs,
  random_blood_sugar,
  general_exam,
} from "../../../utils/testcategories";

const DirectTestsModal = ({ text, closeTestModal, patient }) => {
  const [results, setResults] = useState({});


  const first_trimester_tests = [
    "vital_signs",
    "random_blood_sugar",
    "general_exam",
  ];
  const second_trimester_tests = [
    "vital_signs",
    "random_blood_sugar",
    "general_exam",
  ];

  const text_to_test_Map = {
    "Vital Signs": vital_signs,
    RBS: random_blood_sugar,
    "General Exam": general_exam,
  };

  const tests_controller = {
    "1st": first_trimester_tests,
    "2nd": [...first_trimester_tests, "abdominal_exam", "fhr", "fh"],
    "3rd": [...second_trimester_tests, "cefw"],
  };

  
  const selectedText = text_to_test_Map[text];

  function showInference() {}

  return (
    <div className="direct-tests-modal">
      {Object.keys(text_to_test_Map[text]).map((item) => {
        return (
          <div>
            <form action="">
              <div className="tests">{item}</div>
              <div className="inp">
                <input type="text" 
                
                />
              </div>
              <div className="inference">{showInference()}</div>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default DirectTestsModal;

// import React, { useState } from "react";
// import {
//   vital_signs,
//   random_blood_sugar,
//   general_exam,
// } from "../../../utils/testcategories";

// const DirectTestsModal = ({ text, closeTestModal, patient }) => {
//   const [inputs, setInputs] = useState({});

//   const text_to_test_Map = {
//     "Vital Signs": vital_signs,
//     RBS: random_blood_sugar,
//     "General Exam": general_exam,
//   };

//   const handleChange = (e, item) => {
//     const { value } = e.target;
//     setInputs((prevInputs) => ({ ...prevInputs, [item]: value }));
//   };

//   const inferStatus = (value, range) => {
//     const numValue = parseFloat(value);
//     if (numValue < range[0]) return "Low";
//     if (numValue > range[1]) return "High";
//     return "Normal";
//   };

//   const renderInference = (item) => {
//     const value = inputs[item];
//     const category = text_to_test_Map[text];
//     const options = category[item];

//     if (Array.isArray(options) && typeof options[0] === "number") {
//       // Auto-detect based on range
//       const range = [options[0], options[options.length - 1]];
//       return inferStatus(value, range);
//     }

//     if (Array.isArray(options)) {
//       // Provide a dropdown with options
//       return (
//         <select
//           onChange={(e) => handleChange(e, item)}
//           value={inputs[item] || ""}
//         >
//           <option value="">Select</option>
//           {options.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       );
//     }

//     return null;
//   };

//   return (
//     <div className="direct-tests-modal">
//       {Object.keys(text_to_test_Map[text]).map((item) => {
//         return (
//           <div key={item}>
//             <div className="tests">{item}</div>
//             <div className="inp">
//               <input
//                 type="text"
//                 value={inputs[item] || ""}
//                 onChange={(e) => handleChange(e, item)}
//               />
//             </div>
//             <div className="inference">{renderInference(item)}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default DirectTestsModal;
