import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { usePDF } from "react-to-pdf";
import emailjs from "@emailjs/browser";
import LOGO from "../../assets/images/afyamama.png";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const PatientHistory = () => {
  const [searchParams] = useSearchParams();
  const patientId = searchParams.get("patientId");
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  const { toPDF, targetRef } = usePDF({
    filename: `${firstName} ${lastName} test-report.pdf`,
  });

  const [testHistory, setTestHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (patientId) {
      const fetchHistory = async () => {
        try {
          const response = await axiosInstance.get(
            `/patients/history/${patientId}`
          );
          console.log(response);
          setTestHistory(response.data);
          setLoading(false);
        } catch (error) {
          setError("Error fetching patient history");
          setLoading(false);
        }
      };

      fetchHistory();
    }
  }, [patientId]);

  if (loading)
    return <p className="history-loading">Loading patient history...</p>;
  if (error) return <p className="history-error">{error}</p>;

  return (
    <div className="history-container">
      <div className="download-icon" onClick={() => toPDF()}>
        <FileDownloadIcon style={{color:"#2b50aa"}}  />
            Download Report
      </div>

      <div className="overall-container" ref={targetRef}>
        <div className="hist-header">
          <div className="hist-logo-container">
            <img src={LOGO} alt="logo" />
          </div>
          <h2 className="history-title">Patient Test History</h2>
        </div>

        <h3>
          {firstName} {lastName}
        </h3>
        <table className="history-table">
          <thead>
            <tr className="history-header-row">
              <th className="history-header-cell">Date</th>
              <th className="history-header-cell">Test Name</th>
              <th className="history-header-cell">Category</th>
              <th className="history-header-cell">Result</th>
              <th className="history-header-cell">Comment</th>
              {/* <th className="history-header-cell">Doctor ID</th> */}
              <th className="history-header-cell">Trimester</th>
              {/* <th className="history-header-cell">Visit ID</th> */}
            </tr>
          </thead>
          <tbody>
            {testHistory.map((test, index) => (
              <tr className="history-row" key={index}>
                <td className="history-cell">
                  {new Date(test.testDate).toLocaleDateString()}
                </td>
                <td className="history-cell">{test.testName}</td>
                <td className="history-cell">{test.testCategory}</td>
                <td className="history-cell">{test.result}</td>
                <td className="history-cell">{test.comment || '_'}</td>
                {/* <td className="history-cell">{test.doctorId}</td> */}
                <td className="history-cell">{test.trimester}</td>
                {/* <td className="history-cell">{test.visitId}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <button className="report-btn" onClick={() => toPDF()}>
        Download Report
      </button> */}
    </div>
  );
};

export default PatientHistory;
