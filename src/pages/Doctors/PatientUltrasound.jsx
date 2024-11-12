import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { usePDF } from "react-to-pdf";
import emailjs from "@emailjs/browser";
import LOGO from "../../assets/images/afyamama.png";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const PatientUltrasound = () => {
  const [searchParams] = useSearchParams();
  const patientId = searchParams.get("patientId");
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  const { toPDF, targetRef } = usePDF({
    filename: `${firstName} ${lastName} ultrasound-report.pdf`,
  });

  const [ultrasounds, setUltrasounds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (patientId) {
      const fetchUltrasound = async () => {
        try {
          const response = await axiosInstance.get(
            `/patients/ultrasound/${patientId}`
          );
          console.log(response);
          setUltrasounds(response.data);
          setLoading(false);
        } catch (error) {
          setError("Error fetching patient history");
          setLoading(false);
        }
      };

      fetchUltrasound();
    }
  }, [patientId]);

  if (loading)
    return <p className="history-loading">Loading ultrasound images...</p>;
  if (error) return <p className="history-error">{error}</p>;

  return (
    <div className="history-container ">
      <div className="download-icon" onClick={() => toPDF()}>
        <FileDownloadIcon style={{ color: "#2b50aa" }} />
        Download Report
      </div>

      <div className="overall-container" ref={targetRef}>
        <div className="hist-header">
          <div className="hist-logo-container">
            <img src={LOGO} alt="logo" />
          </div>
          <h2 className="history-title ult-title">Ultrasound Images</h2>
        </div>

        <h3>
          {firstName} {lastName}
        </h3>

        <div className="ultrasound-images-area">
          {ultrasounds.map((ultrasound, index) => (
            <div key={index} className="holder">
              <p className="date">{ultrasound.date}</p>
              <div key={index} className="image-container">
                <img src={ultrasound.url} alt="ultrasound Image" />
              </div>

              <div className="gestation-period-div">
                <div className="gp">{ultrasound.trimester} trimester</div>
                <div className="gp">{ultrasound.week} weeks</div>
              </div>
            </div>
          ))}
        </div>

        {/* <table className="history-table">
          <thead>
            <tr className="history-header-row">
              <th className="history-header-cell">Date</th>
              <th className="history-header-cell">Test Name</th>
              <th className="history-header-cell">Category</th>
              <th className="history-header-cell">Result</th>
              <th className="history-header-cell">Comment</th>
            
              <th className="history-header-cell">Trimester</th>
         
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
                
                <td className="history-cell">{test.trimester}</td>
              
              </tr>
            ))}
          </tbody>
         
        </table> */}
      </div>
    </div>
  );
};

export default PatientUltrasound;
