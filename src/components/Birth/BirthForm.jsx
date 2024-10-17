// import LabInputComponent from "../../pages/Labaratory/LabInputComponent";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { useState } from "react";
// import LabSelectComponent from "../../pages/Labaratory/LabSelectComponent";

// const BirthForm = ({
//   heading,
//   selectedPatient,
//   addOne,
//   subOne,
//   formData,
//   onInputChange,
// }) => {

//   function handleSave(){}

//   return (
//     <div className="birth-form">
//       <div className="heading">{heading}</div>
//       <div className="form-section">
//         <div className="grp">

//         </div>

//         <div className="grp">

//         </div>

//         <div className="grp">

//         </div>
//       </div>
//       <div className="submit">
//         <div className="arrow left_arrow">
//           <ArrowBackIcon style={{ color: "white" }} />
//         </div>
//         <div className="save" onClick={handleSave}>
//           Save
//         </div>
//         <div className="arrow right_arrow" onClick={addOne}>
//           <ArrowForwardIcon style={{ color: "white" }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BirthForm;

// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { useState } from "react";
// import BirthInputComponent from "./BirthInputComponent";
// import BirthSelectComponent from "./BirthSelectComponent";

// const BirthForm = ({
//   heading,
//   selectedPatient,
//   addOne,
//   subOne,
//   formData,
//   onInputChange,
// }) => {

//   const formCategories = [
//     // Replace these with actual categories and labels from your table
//     { type: "input", label: "Mother's Name", name: "motherName" },
//     { type: "select", label: "Birth Type", name: "birthType", options: [
//       { label: "Natural", value: "natural" },
//       { label: "C-Section", value: "c-section" }
//     ] },
//     { type: "input", label: "Date of Birth", name: "dob" },
//     { type: "input", label: "Baby's Weight", name: "babyWeight" },
//     { type: "select", label: "Gender", name: "gender", options: [
//       { label: "Male", value: "male" },
//       { label: "Female", value: "female" }
//     ] },
//     { type: "input", label: "Doctor's Name", name: "doctorName" }
//     // Add more categories as needed

//   ];

//   function handleSave(){}

//   return (
//     <div className="birth-form">
//       <div className="heading">{heading}</div>
//       <div className="form-section">
//         {formCategories.map((field, index) => (
//           <div key={index} className="grp">
//             {field.type === "input" ? (
//               <BirthInputComponent
//                 label={field.label}
//                 name={field.name}
//                 value={formData[field.name] || ""}
//                 onChange={onInputChange}
//               />
//             ) : (
//               <BirthSelectComponent
//                 label={field.label}
//                 name={field.name}
//                 value={formData[field.name] || ""}
//                 onChange={onInputChange}
//                 options={field.options}
//               />
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="submit">
//         <div className="arrow left_arrow" onClick={subOne}>
//           <ArrowBackIcon style={{ color: "white" }} />
//         </div>
//         <div className="save" onClick={handleSave}>
//           Save
//         </div>
//         <div className="arrow right_arrow" onClick={addOne}>
//           <ArrowForwardIcon style={{ color: "white" }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BirthForm;

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BirthInputComponent from "./BirthInputComponent";
import BirthSelectComponent from "./BirthSelectComponent";

const BirthForm = ({
  heading,
  selectedPatient,
  addOne,
  subOne,
  formData,
  onInputChange,
}) => {
  // Mapping of headings to their corresponding form categories
  const formCategoriesMap = {
    "Pregnancy Details": [
      { type: "input", label: "Mother's Name", name: "motherName" },
      { type: "input", label: "Due Date", name: "dueDate",formType:"date" },
      {
        type: "input",
        label: "Gestational Age (weeks)",
        name: "gestationalAge",
      },
      {
        type: "select",
        label: "Prenatal Care",
        name: "prenatalCare",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        type: "input",
        label: "Complications During Pregnancy",
        name: "complications",
      },
    ],
    "Delivery Information": [
      {
        type: "select",
        label: "Delivery Method",
        name: "deliveryMethod",
        options: [
          { label: "Natural", value: "natural" },
          { label: "C-Section", value: "c-section" },
        ],
      },
      { type: "input", label: "Delivery Date", name: "deliveryDate" },
      { type: "input", label: "Baby's Weight (grams)", name: "birthWeight" },
      {
        type: "select",
        label: "Gender",
        name: "gender",
        options: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ],
      },
      { type: "input", label: "Doctor's Name", name: "doctorName" },
    ],
    "Mother’s Condition Postpartum": [
      {
        type: "input",
        label: "Postpartum Complications",
        name: "postpartumComplications",
      },
      {
        type: "input",
        label: "Mother's Health Status",
        name: "motherHealthStatus",
      },
      {
        type: "input",
        label: "Mental Health Assessment",
        name: "mentalHealth",
      },
    ],
    "Baby's Immediate Care": [
      {
        type: "select",
        label: "Immediate Care Provided?",
        name: "immediateCare",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      { type: "input", label: "APGAR Score", name: "apgarScore" },
      {
        type: "input",
        label: "Resuscitation Needed?",
        name: "resuscitationNeeded",
      },
    ],
    "Medications Administered": [
      { type: "input", label: "Medications Given", name: "medicationsGiven" },
      { type: "input", label: "Dosage", name: "dosage" },
      {
        type: "input",
        label: "Administration Time",
        name: "administrationTime",
      },
    ],
    "Baby’s Health Metrics": [
      { type: "input", label: "Heart Rate", name: "heartRate" },
      { type: "input", label: "Respiratory Rate", name: "respiratoryRate" },
      { type: "input", label: "Temperature (°C)", name: "temperature" },
    ],
    "Birth and Breastfeeding Info": [
      {
        type: "select",
        label: "Breastfeeding Initiated?",
        name: "breastfeedingInitiated",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        type: "input",
        label: "Breastfeeding Duration (minutes)",
        name: "breastfeedingDuration",
      },
      { type: "input", label: "Colostrum Feeding", name: "colostrumFeeding" },
    ],
  };

  // Get the form categories based on the current heading
  const formCategories = formCategoriesMap[heading] || [];

  function handleSave() {
    // Implement save logic here
    console.log("Form data saved:", formData);
  }

  return (
    <div className="birth-form">
      <div className="heading">{heading}</div>
      <div className="form-section">
        {formCategories.map((field, index) => (
          <div key={index} className="grp">
            {field.type === "input" ? (
              <BirthInputComponent
                label={field.label}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={onInputChange}
                type={field.formType}
              />
            ) : (
              <BirthSelectComponent
                label={field.label}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={onInputChange}
                options={field.options}
              />
            
            )}
          </div>
        ))}
      </div>
      <div className="submit">
        <div className="arrow left_arrowz" onClick={subOne}>
          <ArrowBackIcon style={{ color: "white" }} />
        </div>
        <div className="save" onClick={handleSave}>
          Save
        </div>
        <div className="arrow right_arrowz" onClick={addOne}>
          <ArrowForwardIcon style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default BirthForm;
