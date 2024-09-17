// import React, { useState } from "react";

// const LabTestInputSection = ({ trimester }) => {
//   const [testResults, setTestResults] = useState({
//     rbs: "",
//     hb: "",
//     bloodGroup: "",
//     hiv: "",
//     vdrl: "",
//     urinalysis: {
//       ph: "",
//       specificGravity: "",
//       blood: "",
//       proteins: "",
//       glucose: "",
//       ketones: "",
//       leukocyteEsterase: "",
//       nitrites: "",
//       bilirubin: "",
//       urobilinogen: "",
//     },
//     bmi: "",
//     bp: "",
//     rr: "",
//     pr: "",
//     spo2: "",
//     temperature: "",
//     ogtt: "",
//     fhr: "",
//     fundalHeight: "",
//     cefw: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTestResults((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Test Results: ", testResults);
//   };

//   return (
//     <div className="lab-test-input-section">
//       <h2>Lab Test Input for Trimester {trimester}</h2>

//       <form onSubmit={handleSubmit}>
//         {/* Common Tests for All Trimesters */}
//         <div>
//           <label>RBS: </label>
//           <input
//             type="text"
//             name="rbs"
//             value={testResults.rbs}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Hb: </label>
//           <input
//             type="text"
//             name="hb"
//             value={testResults.hb}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Blood Group: </label>
//           <input
//             type="text"
//             name="bloodGroup"
//             value={testResults.bloodGroup}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>HIV: </label>
//           <select name="hiv" value={testResults.hiv} onChange={handleChange}>
//             <option value="">Select</option>
//             <option value="reactive">Reactive</option>
//             <option value="non-reactive">Non-Reactive</option>
//           </select>
//         </div>
//         <div>
//           <label>VDRL: </label>
//           <select name="vdrl" value={testResults.vdrl} onChange={handleChange}>
//             <option value="">Select</option>
//             <option value="reactive">Reactive</option>
//             <option value="non-reactive">Non-Reactive</option>
//           </select>
//         </div>
//         <div>
//           <label>BMI: </label>
//           <input
//             type="text"
//             name="bmi"
//             value={testResults.bmi}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>BP: </label>
//           <input
//             type="text"
//             name="bp"
//             value={testResults.bp}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>RR: </label>
//           <input
//             type="text"
//             name="rr"
//             value={testResults.rr}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>PR: </label>
//           <input
//             type="text"
//             name="pr"
//             value={testResults.pr}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>SpO2: </label>
//           <input
//             type="text"
//             name="spo2"
//             value={testResults.spo2}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Temperature: </label>
//           <input
//             type="text"
//             name="temperature"
//             value={testResults.temperature}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Urinalysis */}
//         <div>
//           <label>Urinalysis - pH: </label>
//           <input
//             type="text"
//             name="ph"
//             value={testResults.urinalysis.ph}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Urinalysis - Specific Gravity: </label>
//           <input
//             type="text"
//             name="specificGravity"
//             value={testResults.urinalysis.specificGravity}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Urinalysis - Blood: </label>
//           <input
//             type="text"
//             name="blood"
//             value={testResults.urinalysis.blood}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Urinalysis - Proteins: </label>
//           <input
//             type="text"
//             name="proteins"
//             value={testResults.urinalysis.proteins}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Urinalysis - Glucose: </label>
//           <input
//             type="text"
//             name="glucose"
//             value={testResults.urinalysis.glucose}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Urinalysis - Ketones: </label>
//           <input
//             type="text"
//             name="ketones"
//             value={testResults.urinalysis.ketones}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Urinalysis - Leukocyte Esterase: </label>
//           <input
//             type="text"
//             name="leukocyteEsterase"
//             value={testResults.urinalysis.leukocyteEsterase}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Urinalysis - Nitrites: </label>
//           <input
//             type="text"
//             name="nitrites"
//             value={testResults.urinalysis.nitrites}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Trimester-specific Tests */}
//         {trimester === 2 && (
//           <div>
//             <label>OGTT: </label>
//             <input
//               type="text"
//               name="ogtt"
//               value={testResults.ogtt}
//               onChange={handleChange}
//             />
//           </div>
//         )}

//         {(trimester === 2 || trimester === 3) && (
//           <>
//             <div>
//               <label>Fetal Heart Rate (FHR): </label>
//               <input
//                 type="text"
//                 name="fhr"
//                 value={testResults.fhr}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label>Fundal Height: </label>
//               <input
//                 type="text"
//                 name="fundalHeight"
//                 value={testResults.fundalHeight}
//                 onChange={handleChange}
//               />
//             </div>
//           </>
//         )}

//         {trimester === 3 && (
//           <div>
//             <label>Clinical Estimated Fetal Weight (CEFW): </label>
//             <input
//               type="text"
//               name="cefw"
//               value={testResults.cefw}
//               onChange={handleChange}
//             />
//           </div>
//         )}

//         <button type="submit">Submit Results</button>
//       </form>
//     </div>
//   );
// };

// export default LabTestInputSection;

import React, { useState } from "react";
import "../../styles/lab-test-input.css";
// import "./LabTestInputSection.css"; 

const LabTestInputSection = ({ trimester, closeSec }) => {
  const [testResults, setTestResults] = useState({
    rbs: "",
    hb: "",
    bloodGroup: "",
    hiv: "",
    vdrl: "",

    ph: "",
    specificGravity: "",
    blood: "",
    proteins: "",
    glucose: "",
    ketones: "",
    leukocyteEsterase: "",
    nitrites: "",
    bilirubin: "",
    urobilinogen: "",

    bmi: "",
    bp: "",
    rr: "",
    pr: "",
    spo2: "",
    temperature: "",
    ogtt: "",
    fhr: "",
    fundalHeight: "",
    cefw: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestResults((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Test Results: ", testResults);
  };

  return (
    <div className="lab-test-input-section">
      <div className="close-btn" onClick={closeSec}>
        <p>Close</p>
      </div>
      <div className="cards-sec"></div>
      <form className="form-inp" onSubmit={handleSubmit}>
        {/* Common Tests Card */}
        <div className="card">
          <h3>Common Tests</h3>
          <div>
            <label>RBS: </label>  
            <input
              className="lab-input"
              type="text"
              name="rbs"
              value={testResults.rbs}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Hb: </label>
            <input
              className="lab-input"
              type="text"
              name="hb"
              value={testResults.hb}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Blood Group: </label>
            <input
              className="lab-input"
              type="text"
              name="bloodGroup"
              value={testResults.bloodGroup}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>HIV: </label>
            <select name="hiv" value={testResults.hiv} onChange={handleChange}>
              <option value="">Select</option>
              <option value="reactive">Reactive</option>
              <option value="non-reactive">Non-Reactive</option>
            </select>
          </div>
          <div>
            <label>VDRL: </label>
            <select
              className="lab-input"
              name="vdrl"
              value={testResults.vdrl}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="reactive">Reactive</option>
              <option value="non-reactive">Non-Reactive</option>
            </select>
          </div>
          <div>
            <label>BMI: </label>
            <input
              className="lab-input"
              type="text"
              name="bmi"
              value={testResults.bmi}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Vital Signs Card */}
        <div className="card">
          <h3>Vital Signs</h3>
          <div>
            <label>BP: </label>
            <input
              className="lab-input"
              type="text"
              name="bp"
              value={testResults.bp}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>RR: </label>
            <input
              className="lab-input"
              type="text"
              name="rr"
              value={testResults.rr}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>PR: </label>
            <input
              className="lab-input"
              type="text"
              name="pr"
              value={testResults.pr}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>SpO2: </label>
            <input
              className="lab-input"
              type="text"
              name="spo2"
              value={testResults.spo2}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Temperature: </label>
            <input
              className="lab-input"
              type="text"
              name="temperature"
              value={testResults.temperature}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Urinalysis Card */}
        <div className="card">
          <h3>Urinalysis</h3>
          <div>
            <label>pH: </label>
            <input
              className="lab-input"
              type="text"
              name="ph"
              value={testResults.ph}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Specific Gravity: </label>
            <input
              className="lab-input"
              type="text"
              name="specificGravity"
              value={testResults.specificGravity}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Blood: </label>
            <input
              className="lab-input"
              type="text"
              name="blood"
              value={testResults.blood}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Proteins: </label>
            <input
              className="lab-input"
              type="text"
              name="proteins"
              value={testResults.proteins}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Glucose: </label>
            <input
              className="lab-input"
              type="text"
              name="glucose"
              value={testResults.glucose}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Ketones: </label>
            <input
              className="lab-input"
              type="text"
              name="ketones"
              value={testResults.ketones}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Leukocyte Esterase: </label>
            <input
              className="lab-input"
              type="text"
              name="leukocyteEsterase"
              value={testResults.leukocyteEsterase}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Nitrites: </label>
            <input
              type="text"
              className="lab-input"
              name="nitrites"
              value={testResults.nitrites}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Trimester-specific Tests */}
        {trimester === 2 && (
          <div className="card">
            <h3>Second Trimester Tests</h3>
            <div>
              <label>OGTT: </label>
              <input
                className="lab-input"
                type="text"
                name="ogtt"
                value={testResults.ogtt}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {(trimester === 2 || trimester === 3) && (
          <div className="card">
            <h3>Fetal Monitoring</h3>
            <div>
              <label>Fetal Heart Rate (FHR): </label>
              <input
                className="lab-input"
                type="text"
                name="fhr"
                value={testResults.fhr}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Fundal Height: </label>
              <input
                className="lab-input"
                type="text"
                name="fundalHeight"
                value={testResults.fundalHeight}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {trimester === 3 && (
          <div className="card">
            <h3>Third Trimester Tests</h3>
            <div>
              <label>Clinical Estimated Fetal Weight (CEFW): </label>
              <input
                className="lab-input"
                type="text"
                name="cefw"
                value={testResults.cefw}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        <button type="submit">Submit Results</button>
      </form>
    </div>
  );
};

export default LabTestInputSection;
