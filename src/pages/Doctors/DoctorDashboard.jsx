import React from "react";
import AfyaMamaLogo from "../../assets/images/afyamama.png";
import PROFILE from "../../assets/images/profile.png";
import "../../styles/doctor.css";

const DoctorDashboard = () => {
  return (
    <div className="doctor-dashboard">
      {/* TOP SECTION */}
      <div className="top-section">
        <div className="extreme-top">
          <div className="officer-name">Dr. Damien Durkh</div>
          <div className="current-date">2024-01-23</div>
        </div>

        <div className="logo">
          <img src={AfyaMamaLogo} alt="Afya Mama Logo" />
          <div className="logo-name">Afya Mama</div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="bottom-section">
        {/* Maternal Profile */}
        <div className="maternal-profile-and-test">
          {/* M-profile */}
          <div className="m-profile">
            <div className="profile-pic">
              <div className="pic">
                <img src={PROFILE} alt="profile-pic" />
              </div>
            </div>
            <div className="m-profile-details">
              <div className="top">
                <div className="name">Maggie Swayer</div>
                <div className="age-and-companion">
                  <div className="age">Age: 24</div>
                  <div className="companion">Companion: Steve Rodgers</div>
                </div>
              </div>

              <div className="bottom">
                <div className="gestation-age">Week:33</div>
                <div className="trimester">Trimester:3rd</div>
                <div className="parity">Parity:0+2</div>
              </div>
            </div>
            {/* <div className="m-profile-next">
              <div className="title">Last Facility Visited</div>
              <div className="facility-details">
                <div className="fc-name">Facility: Avenue Hospital</div>
                <div className="fc-location">Location: Kisumu</div>
              </div>
             
            </div> */}

            <div className="m-profile-next">
              <div className="card">HIV -ve</div>
              <div className="card">Rhesus +ve</div>
              <div className="card">HIV -ve</div>
            </div>
          </div>

          {/* M-tests */}
          {/* <div className="m-test">Test</div> */}
        </div>

        <div className="admitted-patients-section">
        <div className="admitted-patients">
          <h2>Admitted Patients</h2>
          <div className="search_bar">
            <input
              type="text"
              placeholder="search patient"
            //   value={searchTerm}
            //   onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="patients-table-wrapper">
            
            <table className="patients-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Check-in Time</th>
                </tr>
              </thead>

              {/* <tbody>
                {filteredPatients.map((patient) => (
                  <tr key={patient.id} className="animate__animated animate__fadeInUp">
                    <td
                      style={{
                        color: "#336BFF",
                        fontWeight: "600",
                        border: "none",
                      }}

                      
                    >
                      {patient.first_name} {patient.last_name}
                    </td>
                    <td
                      style={{
                        color: "#336BFF",
                        fontWeight: "600",
                        border: "none",
                        background: "",
                      }}
                    >
                      {patient.national_id}
                    </td>
                    <td
                      style={{
                        color: "#336BFF",
                        fontWeight: "600",
                        border: "none",
                      }}
                    >
                      {patient.time}, {patient.date}
                    </td>
                  </tr>
                ))}
              </tbody> */}
            </table>

          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
