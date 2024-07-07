import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import NewPatient from "./NewPatient";
import { useSearchParams } from "react-router-dom";

const Intake = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const formOpenParam = searchParams.get('form') === 'open';
  const [formOpen, setFormOpen] = useState(formOpenParam);

  function openIntakeForm() {
    setFormOpen(true);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("form", "open");

    setSearchParams(newSearchParams);
  }

  useEffect(() => {

    if (formOpen) {
      searchParams.set('form', 'open');
    } else {
      searchParams.delete('form');
    }
    setSearchParams(searchParams);
  }, [formOpen, searchParams, setSearchParams]);


  return (
    <div className="intake">
      {formOpen && <div className="backdrop"></div>}
      <div className="top">
        <div className="icon">
          <SearchIcon style={{ color: "#3c4043" }} />
        </div>
        <input className="search" type="text" placeholder="Search" />
      </div>

      <div className="middle">
        <div className="card-wrapper">
          <div onClick={openIntakeForm} className="card xdf">
            <AddIcon className="gradient-mask" style={{ fontSize: "7em" }} />
          </div>
          <p>New Patient</p>
        </div>

        {/* <div className="card-wrapper">
          <div className="card">
            <AddIcon />
          </div>
          <p>New Patient</p>
        </div> */}

        {/* <div className="card-wrapper">
          <div className="card">
            <AddIcon  />
          </div>
          <p>New Patient</p>
        </div> */}
      </div>

      <div className="bottom">
        <div className="left statistics">
          <div className="stat total">
            <div className="value">2000</div>
            <div className="word">Patients Nationally</div>
          </div>
          <div className="stat ours">
            <div className="value">313</div>
            <div className="word">Patients In Our Facility</div>
          </div>
        </div>
        <div className="right recent-activities">
          <h2>Recent Activities</h2>
          <table>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Activity</th>
                <th>Officer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>06/28/2024 @ 4:29pm</td>
                <td>Patient added</td>
                <td>Dr. J'onn</td>
              </tr>
              <tr>
                <td>06/28/2024 @ 4:35pm</td>
                <td>New Patient Admitted</td>
                <td>Dr. Mercy</td>
              </tr>
              <tr>
                <td>06/28/2024 @ 4:43pm</td>
                <td>Lab results Logged</td>
                <td>Dr. Moana</td>
              </tr>
              <tr>
                <td>06/28/2024 @ 4:49pm</td>
                <td>Patient 0331 discharged</td>
                <td>Dr. Danvers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {formOpen ? <NewPatient setFormOpen={setFormOpen} /> : ""}
    </div>
  );
};

export default Intake;
