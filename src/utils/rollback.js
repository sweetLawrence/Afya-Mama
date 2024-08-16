
// const commonTests = {
//     VitalSigns: [
//       { name: 'Blood Pressure', key: 'bloodPressure' },
//       { name: 'Heart Rate', key: 'heartRate' },
//       { name: 'Respiratory Rate', key: 'respiratoryRate' },
//       { name: 'Oxygen Saturation', key: 'oxygenSaturation' },
//       { name: 'Temperature', key: 'temperature' }
//     ],
//     BMI: [
//       { name: 'BMI', key: 'bmi' }
//     ],
//     RBS: [
//       { name: 'RBS', key: 'rbs' }
//     ],
//     GeneralExam: [
//       { name: 'General Health', key: 'generalExam' }
//     ]
//   };
  
//   const trimesterTests = {
//     firstTrimester: {
//       AbdominalExam: [], 
//       FHR: [], 
//       FH: [], 
//       CEFW: [] 
//     },
//     secondTrimester: {
//       AbdominalExam: [
//         { name: 'Fundal Height', key: 'abdominalExam' }
//       ],
//       FHR: [
//         { name: 'FHR', key: 'fhr' }
//       ],
//       FH: [
//         { name: 'FH', key: 'fh' }
//       ],
//       CEFW: []
//     },
//     thirdTrimester: {
//       AbdominalExam: [
//         { name: 'Fundal Height', key: 'abdominalExam' }
//       ],
//       FHR: [
//         { name: 'FHR', key: 'fhr' }
//       ],
//       FH: [
//         { name: 'FH', key: 'fh' }
//       ],
//       CEFW: [
//         { name: 'CEFW', key: 'cefw' }
//       ]
//     }
//   };
  
//   export { commonTests, trimesterTests };
  







// const commonTests = {
//   VitalSigns: [
//     { name: 'Blood Pressure (120/80mmHg)', key: 'bloodPressure'},
//     { name: 'Heart Rate (60-100 bpm)', key: 'heartRate' },
//     { name: 'Respiratory Rate (12-18 breaths/min)', key: 'respiratoryRate' },
//     { name: 'Oxygen Saturation', key: 'oxygenSaturation' },
//     { name: 'Temperature (36.5-37.5°C)', key: 'temperature' }
//   ],
//   BMI: [
//     { name: 'BMI', key: 'bmi' }
//   ],
//   RBS: [
//     { name: 'RBS', key: 'rbs' }
//   ],
//   // GeneralExam: [
//   //   { name: 'Pallor (No pallor/Pallor)', key: 'pallor' },
//   //   { name: 'Jaundice (No jaundice/Scleral jaundice)', key: 'jaundice' },
//   //   { name: 'Lymphadenopathy (No lymphadenopathy/Cervical, inguinal lymph nodes present)', key: 'lymphadenopathy' },
//   //   { name: 'Cyanosis (No cyanosis/Central or peripheral cyanosis present)', key: 'cyanosis' },
//   //   { name: 'Weight (Normal/Obese)', key: 'weight' },
//   //   { name: 'Height', key: 'height' },
//   //   { name: 'BMI (Normal/Obese/Underweight)', key: 'bmiEvaluation' },
//   //   { name: 'Vital Signs (Values and comments)', key: 'vitalSignsEvaluation' },
//   //   { name: 'Temperature (36.5-37.5°C)', key: 'temperatureEvaluation' },
//   //   { name: 'Pulse (60-100 bpm)', key: 'pulseEvaluation' },
//   //   { name: 'Respiratory Rate (12-18 breaths/min)', key: 'respiratoryRateEvaluation' }
//   // ]
//   GeneralExam: [
//     { name: 'Pallor', key: 'pallor' },
//     { name: 'Jaundice', key: 'jaundice' },
//     { name: 'Lymphadenopathy', key: 'lymphadenopathy' },
//     { name: 'Cyanosis', key: 'cyanosis' },
//     { name: 'Weight', key: 'weight' },
//     { name: 'Height', key: 'height' },
//     { name: 'BMI', key: 'bmiEvaluation' },
//     { name: 'Vital Signs', key: 'vitalSignsEvaluation' },
//     { name: 'Temperature', key: 'temperatureEvaluation' },
//     { name: 'Pulse', key: 'pulseEvaluation' },
//     { name: 'Respiratory Rate', key: 'respiratoryRateEvaluation' }
//   ]
// };

// const trimesterTests = {
//   firstTrimester: {
//     AbdominalExam: [], 
//     FHR: [], 
//     FH: [], 
//     CEFW: [] 
//   },
//   secondTrimester: {
//     AbdominalExam: [
//       { name: 'Fundal Height', key: 'fundalHeight' }
//     ],
//     FHR: [
//       { name: 'Fetal Heart Rate (FHR)', key: 'fhr' }
//     ],
//     FH: [
//       { name: 'Fundal Height (FH)', key: 'fh' }
//     ],
//     CEFW: []
//   },
//   thirdTrimester: {
//     AbdominalExam: [
//       { name: 'Fundal Height', key: 'fundalHeight' }
//     ],
//     FHR: [
//       { name: 'Fetal Heart Rate (FHR)', key: 'fhr' }
//     ],
//     FH: [
//       { name: 'Fundal Height (FH)', key: 'fh' }
//     ],
//     CEFW: [
//       { name: 'Clinical Estimated Fetal Weight (CEFW)', key: 'cefw' }
//     ]
//   }
// };

// export { commonTests, trimesterTests };



const commonTests = {
    VitalSigns: [
      { name: 'Blood Pressure', key: 'bloodPressure', placeholder: '120/80mmHg', options: ['Normal', 'High', 'Low'] },
      { name: 'Heart Rate', key: 'heartRate', placeholder: '60-100 bpm', options: ['Normal', 'High', 'Low'] },
      { name: 'Respiratory Rate', key: 'respiratoryRate', placeholder: '12-18 breaths/min', options: ['Normal', 'High', 'Low'] },
      { name: 'Oxygen Saturation', key: 'oxygenSaturation', placeholder: '95-100%', options: ['Normal', 'Low'] },
      { name: 'Temperature', key: 'temperature', placeholder: '36.5-37.5°C', options: ['Normal', 'High', 'Low'] }
    ],
    BMI: [
      { name: 'BMI', key: 'bmi', placeholder: 'Value', options: ['Normal', 'Obese', 'Underweight'] }
    ],
    RBS: [
      { name: 'RBS', key: 'rbs', placeholder: 'Value', options: ['Normal', 'High', 'Low'] }
    ],
    GeneralExam: [
      { name: 'Pallor', key: 'pallor', options: ['No pallor', 'Pallor'] },
      { name: 'Jaundice', key: 'jaundice', options: ['No jaundice', 'Scleral jaundice'] },
      { name: 'Lymphadenopathy', key: 'lymphadenopathy', options: ['No lymphadenopathy', 'Cervical, inguinal lymph nodes present'] },
      { name: 'Cyanosis', key: 'cyanosis', options: ['No cyanosis', 'Central cyanosis', 'Peripheral cyanosis'] },
      { name: 'Weight', key: 'weight', placeholder: 'kg', options: ['Normal', 'Obese'] },
      { name: 'Height', key: 'height', placeholder: 'cm', options: [] }
    ]
  };
  
  const trimesterTests = {
    firstTrimester: {
      AbdominalExam: [], 
      FHR: [], 
      FH: [], 
      CEFW: [] 
    },
    secondTrimester: {
      AbdominalExam: [
        { name: 'Fundal Height', key: 'fundalHeight', placeholder: 'cm', options: ['Normal', 'Abnormal'] }
      ],
      FHR: [
        { name: 'Fetal Heart Rate', key: 'fhr', placeholder: '110-160 bpm', options: ['Normal', 'High', 'Low'] }
      ],
      FH: [
        { name: 'Fundal Height', key: 'fh', placeholder: 'cm', options: ['Normal', 'Abnormal'] }
      ],
      CEFW: []
    },
    thirdTrimester: {
      AbdominalExam: [
        { name: 'Fundal Height', key: 'fundalHeight', placeholder: 'cm', options: ['Normal', 'Abnormal'] }
      ],
      FHR: [
        { name: 'Fetal Heart Rate', key: 'fhr', placeholder: '110-160 bpm', options: ['Normal', 'High', 'Low'] }
      ],
      FH: [
        { name: 'Fundal Height', key: 'fh', placeholder: 'cm', options: ['Normal', 'Abnormal'] }
      ],
      CEFW: [
        { name: 'Clinical Estimated Fetal Weight', key: 'cefw', placeholder: 'kg', options: ['Normal', 'Abnormal'] }
      ]
    }
  };
  
  export { commonTests, trimesterTests };
  




  // DIrect tests

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

const DirectTestsModal = ({ patient, text, closeTestModal }) => {
  const [results, setResults] = useState({
    patient_id: patient.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResults({ ...results, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", results);
    closeTestModal();
  };

  const { trimester } = calculateGestationalAgeAndTrimester(patient.lmp);
  const trimMap = {
    "1st": "firstTrimester",
    "2nd": "secondTrimester",
    "3rd": "thirdTrimester"
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
                      <option value="" className="d-option">Select</option>
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








import React, { useState } from "react";
import { vital_signs, random_blood_sugar, general_exam } from "../../../utils/testcategories";

const DirectTestsModal = () => {
  const [results, setResults] = useState({});
  const [inferences, setInferences] = useState({});

  const handleInputChange = (test, value) => {
    setResults((prev) => ({ ...prev, [test]: value }));

    if (vital_signs[test]) {
      const ranges = vital_signs[test];
      const numericalValue = parseFloat(value);

      let inference = "Normal";
      if (numericalValue < ranges[0]) {
        inference = "Low";
      } else if (numericalValue > ranges[ranges.length - 1]) {
        inference = "High";
      }

      setInferences((prev) => ({ ...prev, [test]: inference }));
    }
  };

  const renderTestInput = (test) => {
    if (vital_signs[test]) {
      return (
        <div key={test} className="test-item">
          <label>{test}</label>
          <input
            type="number"
            onChange={(e) => handleInputChange(test, e.target.value)}
          />
          <p>Inference: {inferences[test]}</p>
        </div>
      );
    }

    if (random_blood_sugar[test] !== undefined) {
      return (
        <div key={test} className="test-item">
          <label>{test}</label>
          <input
            type="text"
            onChange={(e) => handleInputChange(test, e.target.value)}
          />
          <select
            onChange={(e) =>
              setResults((prev) => ({ ...prev, [test]: e.target.value }))
            }
          >
            <option value="fasting">Fasting</option>
            <option value="random">Random</option>
          </select>
        </div>
      );
    }

    if (general_exam[test]) {
      return (
        <div key={test} className="test-item">
          <label>{test}</label>
          <select
            onChange={(e) =>
              setResults((prev) => ({ ...prev, [test]: e.target.value }))
            }
          >
            {general_exam[test].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="direct-tests-modal">
      <div className="test">
        {Object.keys(vital_signs).map((test) => renderTestInput(test))}
        {Object.keys(random_blood_sugar).map((test) => renderTestInput(test))}
        {Object.keys(general_exam).map((test) => renderTestInput(test))}
      </div>
      <div className="results">
        <h3>Results</h3>
        <pre>{JSON.stringify(results, null, 2)}</pre>
      </div>
      <div className="inference">
        <h3>Inference</h3>
        <pre>{JSON.stringify(inferences, null, 2)}</pre>
      </div>
    </div>
  );
};

export default DirectTestsModal;