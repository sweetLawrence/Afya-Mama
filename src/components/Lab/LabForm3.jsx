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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Toaster, toast } from "sonner";
import axiosInstance from "../../utils/axios";
import calculateGestationalAgeAndTrimester from "../../utils/calculate";

const LabForm3 = ({
  selectedPatient,
  subOne,
  // addOne,
  formData,
  onInputChange,
  setFormData,
  initialFormData
}) => {

  const { trimester } = calculateGestationalAgeAndTrimester(selectedPatient?.lmp);
  const currentDate = new Date().toISOString().split("T")[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async() => {
    console.log("Saving data:", {
      patientId: selectedPatient?.id,
      ...formData,
    });


    try {

      const response = await axiosInstance.patch("/tests/lab-tests", {
        patientId: selectedPatient?.id,
        doctorId:localStorage.getItem("medicalLicenseNumber"),
        trimester:selectedPatient?.trimester,  
        testCategory:"Fetal Monitoring",
        testDate: currentDate,
        ...formData,
      });

      console.log(response)
      toast.success(response.data.message)

      setFormData(initialFormData);
      // addOne();
    } catch (error) {
      // console.log(error)
      // toast.error(response.data.message)
      toast.error("Failure to save lab results")
    }


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
            onChange={onInputChange}

          />
          <LabInputComponent
            label={"FH"}
            name="fh"
            value={formData.fh}
            onChange={onInputChange}
          />
        </div>
        {/* Conditionally render the CEFW input if the trimester is 3rd */}
        {selectedPatient?.trimester === "3rd" && (
          <div className="grp">
            <LabInputComponent
              label={"CEFW"}
              name="cefw"
              value={formData.cefw}
              onChange={onInputChange}
            />
          </div>
        )}
      </div>
      <div className="submit">
        <div className="arrow left_arrow" onClick={subOne}>
          <ArrowBackIcon style={{ color: "white" }} />
        </div>
        <div className="save" onClick={handleSave}>
          Save
        </div>
        <div className="arrow right_arrow" onClick={subOne}>
          <ArrowForwardIcon style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default LabForm3;
