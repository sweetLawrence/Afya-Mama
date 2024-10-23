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


