// import LabInputComponent from "../../pages/Labaratory/LabInputComponent";

// const LabForm3 = ({selectedPatient}) => {
//   return (
//     <div className="lab-form">
//       <div className="heading">Fetal Monitoring</div>
//       <div className="form-section">
//         <div className="grp">
//           <LabInputComponent label={"FHR"} />
//           <LabInputComponent label={"FH"} />
//         </div>

//           {selectedPatient?.trimester === "3rd" && (
//           <div className="grp">
//             <LabInputComponent label={"CEFW"} />
//           </div>
//         )}
//       </div>
//       <div className="submit">
//         <div className="save">Save</div>
//       </div>
//     </div>
//   );
// };

// export default LabForm3;



import React, { useState } from "react";
import LabInputComponent from "../../pages/Labaratory/LabInputComponent";

const LabForm3 = ({ selectedPatient }) => {
  const [formData, setFormData] = useState({
    fhr: "",
    fh: "",
    cefw: "", // Added CEFW to state
  });

  // Handle changes in the input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSave = () => {
    // Simulate posting to DB by logging the data
    console.log("Saving data:", {
      patientId: selectedPatient?.id, // Assuming you have an id field for the patient
      ...formData,
    });
    // Here, you could make a POST request to your API to save the data
  };

  return (
    <div className="lab-form">
      <div className="heading">Fetal Monitoring</div>
      <div className="form-section">
        <div className="grp">
          <LabInputComponent
            label={"FHR"}
            name="fhr"
            value={formData.fhr}
            onChange={handleInputChange}
          />
          <LabInputComponent
            label={"FH"}
            name="fh"
            value={formData.fh}
            onChange={handleInputChange}
          />
        </div>
        {/* Conditionally render the CEFW input if the trimester is 3rd */}
        {selectedPatient?.trimester === "3rd" && (
          <div className="grp">
            <LabInputComponent
              label={"CEFW"}
              name="cefw"
              value={formData.cefw}
              onChange={handleInputChange}
            />
          </div>
        )}
      </div>
      <div className="submit">
        <div className="save" onClick={handleSave}>
          Save
        </div>
      </div>
    </div>
  );
};

export default LabForm3;
