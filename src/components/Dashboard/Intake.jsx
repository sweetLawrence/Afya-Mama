// import React, { useEffect, useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import AddIcon from "@mui/icons-material/Add";
// import NewPatient from "./NewPatient";
// import { useSearchParams } from "react-router-dom";
// import { Toaster, toast } from "sonner";

// import afyamamalogo from "../../assets/images/afyamama.png";
// import CheckinCard from "../CheckinCard";

// const Intake = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const formOpenParam = searchParams.get("form") === "open";
//   const [formOpen, setFormOpen] = useState(formOpenParam);

//   function openIntakeForm() {
//     setFormOpen(true);
//     const newSearchParams = new URLSearchParams(searchParams);
//     newSearchParams.set("form", "open");

//     setSearchParams(newSearchParams);
//   }

//   function activateSonner() {
//     toast.success("Form Submitted successfully");
//   }

//   useEffect(() => {
//     if (formOpen) {
//       searchParams.set("form", "open");
//     } else {
//       searchParams.delete("form");
//     }
//     setSearchParams(searchParams);
//   }, [formOpen, searchParams, setSearchParams]);

//   return (
//     <div className="intake">
//       {formOpen && <div className="backdrop"></div>}

//       <div className="top">
//         {/* <div className="logo-afya-mama"> */}
//         {/* <img className="thelogo" src={afyamamalogo} alt="logo" /> */}
//         {/* <h2 className="title">Afya Mama</h2> */}
//         {/* </div> */}

//         <div className="icon">
//           <SearchIcon style={{ color: "#3c4043" }} />
//         </div>
//         <input className="search" type="text" placeholder="Search" />
//       </div>

//       <div className="middle">
//         <div className="card-wrapper">
//           <div onClick={openIntakeForm} className="card xdf">
//             <AddIcon className="gradient-mask" style={{ fontSize: "7em" }} />
//           </div>
//           <p>New Patient</p>
//         </div>

//         <div className="admitted-patients">
//           <h2>Admitted Patients</h2>
//           <div className="search_bar">
//             <input type="text" placeholder="search patient" />
//           </div>
//           <div className="patients">
//             <div className="patient-detail">
//               {" "}
//               <div className="admitted_information">
//                 <p className="admitted_name">Brenda Audrey</p>
//                 <p className="admitted_id">25362803</p>
//                 <p className="admitted_checkintime">14:26HRS,Monday</p>
//               </div>
//             </div>
//             <div className="patient-detail">
//               {" "}
//               <div className="admitted_information">
//                 <p className="admitted_name">Maggie Swayer</p>
//                 <p className="admitted_id">41626032</p>
//                 <p className="admitted_checkintime">23:49HRS,Monday</p>
//               </div>
//             </div>
//             <div className="patient-detail">
//               <div className="admitted_information">
//                 <p className="admitted_name">Alex Danvers</p>
//                 <p className="admitted_id">32247894</p>
//                 <p className="admitted_checkintime">03:46HRS,Monday</p>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* <div className="card-wrapper">
//           <div className="card">
//             <AddIcon />
//           </div>
//           <p>New Patient</p>
//         </div> */}

//         {/* <div className="card-wrapper">
//           <div className="card">
//             <AddIcon  />
//           </div>
//           <p>New Patient</p>
//         </div> */}
//       </div>

//       <div className="bottom">
//         <div className="left statistics">
//           {/* <div className="stat total">
//             <div className="value">2000</div>
//             <div className="word">Patients Nationally</div>
//           </div> */}
//           {/* <div className="stat ours">
//             <div className="value">313</div>
//             <div className="word">Patients In Our Facility</div>
//           </div> */}
//         </div>
//         <div className="right recent-activities">
//           <h2>Recent Activities</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Timestamp</th>
//                 <th>Activity</th>
//                 <th>Officer</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>06/28/2024 @ 4:29pm</td>
//                 <td>Patient added</td>
//                 <td>Dr. J'onn</td>
//               </tr>
//               <tr>
//                 <td>06/28/2024 @ 4:35pm</td>
//                 <td>New Patient Admitted</td>
//                 <td>Dr. Mercy</td>
//               </tr>
//               <tr>
//                 <td>06/28/2024 @ 4:43pm</td>
//                 <td>Lab results Logged</td>
//                 <td>Dr. Moana</td>
//               </tr>
//               <tr>
//                 <td>06/28/2024 @ 4:49pm</td>
//                 <td>Patient 0331 discharged</td>
//                 <td>Dr. Danvers</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <Toaster richColors position="top-center" />
//       {formOpen ? (
//         <NewPatient setFormOpen={setFormOpen} activateSonner={activateSonner} />
//       ) : (
//         ""
//       )}
//       {/* {checkIn ? <CheckinCard setCheckIn={setCheckIn} /> : ""} */}
//     </div>
//   );
// };

// export default Intake;







import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import NewPatient from "./NewPatient";
import { useSearchParams } from "react-router-dom";
import { Toaster, toast } from "sonner";

import afyamamalogo from "../../assets/images/afyamama.png";
import CheckinCard from "../CheckinCard";

const Intake = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const formOpenParam = searchParams.get("form") === "open";
  const [formOpen, setFormOpen] = useState(formOpenParam);

  function openIntakeForm() {
    setFormOpen(true);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("form", "open");

    setSearchParams(newSearchParams);
  }

  function activateSonner() {
    toast.success("Patient Registered successfully");
  }

  useEffect(() => {
    if (formOpen) {
      searchParams.set("form", "open");
    } else {
      searchParams.delete("form");
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

        <div className="admitted-patients">
          <h2>Admitted Patients</h2>
          <div className="search_bar">
            <input type="text" placeholder="search patient" />
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
            <tbody>
              <tr>
                <td style={{ color: "#FF5733" }}>Brenda Audrey</td>
                <td style={{ color: "#33FF8D" }}>25362803</td>
                <td style={{ color: "#336BFF" }}>14:26HRS, Monday</td>
              </tr>
              <tr>
                <td style={{ color: "#FFBD33" }}>Maggie Swayer</td>
                <td style={{ color: "#FF33E9" }}>41626032</td>
                <td style={{ color: "#33FFEA" }}>23:49HRS, Monday</td>
              </tr>
              <tr>
                <td style={{ color: "#3380FF" }}>Alex Danvers</td>
                <td style={{ color: "#FF33F3" }}>32247894</td>
                <td style={{ color: "#33FFF4" }}>03:46HRS, Monday</td>
              </tr>

              <tr>
                <td style={{ color: "#FF5733" }}>Brenda Audrey</td>
                <td style={{ color: "#33FF8D" }}>25362803</td>
                <td style={{ color: "#336BFF" }}>14:26HRS, Monday</td>
              </tr>
              <tr>
                <td style={{ color: "#FFBD33" }}>Maggie Swayer</td>
                <td style={{ color: "#FF33E9" }}>41626032</td>
                <td style={{ color: "#33FFEA" }}>23:49HRS, Monday</td>
              </tr>
              <tr>
                <td style={{ color: "#3380FF" }}>Alex Danvers</td>
                <td style={{ color: "#FF33F3" }}>32247894</td>
                <td style={{ color: "#33FFF4" }}>03:46HRS, Monday</td>
              </tr>

            </tbody>
          </table>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="left statistics">
          {/* Statistics section content */}
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
      <Toaster richColors position="top-center" />
      {formOpen ? (
        <NewPatient setFormOpen={setFormOpen} activateSonner={activateSonner} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Intake;
