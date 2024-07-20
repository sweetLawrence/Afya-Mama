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

  let trim_ = "";
  let { trimester } = calculateGestationalAgeAndTrimester(patient.lmp);
  if (trimester === "1st") {
    trim_ = "firstTrimester";
  } else if (trimester === "2nd") {
    trim_ = "secondTrimester";
  } else if (trimester === "3rd") {
    trim_ = "thirdTrimester";
  }

  let text_parameter = "";
  if (text == "Vital Signs") {
    text_parameter = "VitalSigns";
  } else if (text == "General Exam") {
    text_parameter = "GeneralExam";
  } else if (text == "Abdominal Exam") {
    text_parameter = "AbdominalExam";
  } else {
    text_parameter = text;
  }

  const tests = [
    ...(commonTests[text_parameter] || []),
    ...(trimesterTests[trim_][text_parameter] || []),
  ];
  // alert(text )
  return (
    <div className="direct-tests-modal animate__animated animate__fadeIn">
      <div className="top-case">
        <h2>{text}</h2>
        <CloseIcon
          style={{
            fontSize: "2em",
            // border: "1.5px solid #2b50aa",
            borderRadius: "50%",
          }}
          onClick={closeTestModal}
        />
      </div>

      <form className="direct-tests-form" onSubmit={handleSubmit}>
        {tests.map((test) => (
          <div className="row" key={test.key}>
            <label>{test.name}:</label>
            {test.name.toLowerCase() == "general health" ? (
              <textarea
                name={test.key}
                value={results[test.key] || ""}
                onChange={handleChange}
                placeholder={`${test.name.toLowerCase()}...`}
                id="w3review"
              ></textarea>
            ) : (
              <input
                type="text"
                name={test.key}
                value={results[test.key] || ""}
                onChange={handleChange}
                placeholder={`${test.name.toLowerCase()}...`}
              />
            )}
          </div>
        ))}

        <div className="navigations">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default DirectTestsModal;
