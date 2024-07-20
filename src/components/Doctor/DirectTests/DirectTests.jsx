// import React, { useState } from "react";
// import "../../../styles/direct-tests.css";
// import TestsCard from "./TestsCard";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
// import BloodtypeIcon from "@mui/icons-material/Bloodtype";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
// import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
// import HeightIcon from "@mui/icons-material/Height";
// import ChildCareIcon from "@mui/icons-material/ChildCare";
// import DirectTestsModal from "./DirectTestsModal";
// import calculateGestationalAgeAndTrimester from "../../../utils/calculate";

// const DirectTests = ({ patient }) => {
//   const iconColor = "#f178ab";
//   // const iconColor = '#F59DC2'
//   const iconFont = "2.2em";

//   const [testModal, setTestModal] = useState(false);
//   const [selectedTest, setSelectedTest] = useState("");

//   // function openTestModal(testText) {
//   //   setSelectedTest(testText);
//   //   setTestModal(true);
//   //   // alert(testText)
//   // }

//   function openTestModal(testText) {
//     if (isTestApplicable(testText)) {
//       setSelectedTest(testText);
//       setTestModal(true);
//     }
//   }

//   function closeTestModal() {
//     setTestModal(false);
//     setSelectedTest("");
//   }


//   const { trimester } = calculateGestationalAgeAndTrimester(patient.lmp);

//   const isTestApplicable = (test) => {
//     if (test === "Abdominal Exam" || test === "FHR" || test === "FH" || test === "CEFW") {
//       if (trimester === "1st") return false;
//       if (trimester === "2nd" && test === "CEFW") return false;
//     }
//     return true;
//   };


//   return (
//     <div className="direct-tests">
//       <TestsCard
//         icon={
//           <MonitorHeartIcon style={{ color: iconColor, fontSize: iconFont }} />
//         }
//         text="Vital Signs"
//         openTestModal={openTestModal}
//         disabled={!isTestApplicable("Vital Signs")}
//       />
//       <TestsCard
//         icon={
//           <FitnessCenterIcon style={{ color: iconColor, fontSize: iconFont }} />
//         }
//         text="BMI"
//         openTestModal={openTestModal}
//         disabled={!isTestApplicable("BMI")}
//       />
//       <TestsCard
//         icon={
//           <BloodtypeIcon style={{ color: iconColor, fontSize: iconFont }} />
//         }
//         text="RBS"
//         openTestModal={openTestModal}
//         disabled={!isTestApplicable("RBS")}
//       />
//       <TestsCard
//         icon={
//           <AssignmentIcon style={{ color: iconColor, fontSize: iconFont }} />
//         }
//         text="General Exam"
//         openTestModal={openTestModal}
//         disabled={!isTestApplicable("General Exam")}
//       />
//       <TestsCard
//         icon={
//           <PregnantWomanIcon style={{ color: iconColor, fontSize: iconFont }} />
//         }
//         text="Abdominal Exam"
//         openTestModal={openTestModal}
//         disabled={!isTestApplicable("Abdominal Exam")}
//       />
//       <TestsCard
//         icon={<FavoriteIcon style={{ color: iconColor, fontSize: iconFont }} />}
//         text="FHR"
//         openTestModal={openTestModal}
//         disabled={!isTestApplicable("FHR")}
//       />
//       <TestsCard
//         icon={<HeightIcon style={{ color: iconColor, fontSize: iconFont }} />}
//         text="FH"
//         openTestModal={openTestModal}
//         disabled={!isTestApplicable("FH")}
//       />
//       <TestsCard
//         icon={
//           <ChildCareIcon style={{ color: iconColor, fontSize: iconFont }} />
//         }
//         text="CEFW"
//         openTestModal={openTestModal}
//         disabled={!isTestApplicable("CEFW")}
//       />

//       {testModal ? (
//         <DirectTestsModal
//           text={selectedTest}
//           closeTestModal={closeTestModal}
//           patient={patient}
//         />
//       ) : null}
//     </div>
//   );
// };

// export default DirectTests;


import React, { useState, useEffect } from "react";
import "../../../styles/direct-tests.css";
import TestsCard from "./TestsCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import HeightIcon from "@mui/icons-material/Height";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import DirectTestsModal from "./DirectTestsModal";
import calculateGestationalAgeAndTrimester from "../../../utils/calculate";

const DirectTests = ({ patient }) => {
  const iconColor = "#f178ab";
  const iconFont = "2.2em";

  const [testModal, setTestModal] = useState(false);
  const [selectedTest, setSelectedTest] = useState("");
  const [trimester, setTrimester] = useState(null);

  useEffect(() => {
    if (patient && patient.lmp) {
      const { trimester } = calculateGestationalAgeAndTrimester(patient.lmp);
      setTrimester(trimester);
    }
  }, [patient]);

  const openTestModal = (testText) => {
    if (isTestApplicable(testText)) {
      setSelectedTest(testText);
      setTestModal(true);
    }
  };

  const closeTestModal = () => {
    setTestModal(false);
    setSelectedTest("");
  };

  const isTestApplicable = (test) => {
    if (!trimester) return false;

    if (test === "Abdominal Exam" || test === "FHR" || test === "FH" || test === "CEFW") {
      if (trimester === "1st") return false;
      if (trimester === "2nd" && test === "CEFW") return false;
    }
    return true;
  };

  return (
    <div className="direct-tests">
      <TestsCard
        icon={
          <MonitorHeartIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="Vital Signs"
        openTestModal={openTestModal}
        disabled={!isTestApplicable("Vital Signs")}
      />
      <TestsCard
        icon={
          <FitnessCenterIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="BMI"
        openTestModal={openTestModal}
        disabled={!isTestApplicable("BMI")}
      />
      <TestsCard
        icon={
          <BloodtypeIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="RBS"
        openTestModal={openTestModal}
        disabled={!isTestApplicable("RBS")}
      />
      <TestsCard
        icon={
          <AssignmentIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="General Exam"
        openTestModal={openTestModal}
        disabled={!isTestApplicable("General Exam")}
      />
      <TestsCard
        icon={
          <PregnantWomanIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="Abdominal Exam"
        openTestModal={openTestModal}
        disabled={!isTestApplicable("Abdominal Exam")}
      />
      <TestsCard
        icon={<FavoriteIcon style={{ color: iconColor, fontSize: iconFont }} />}
        text="FHR"
        openTestModal={openTestModal}
        disabled={!isTestApplicable("FHR")}
      />
      <TestsCard
        icon={<HeightIcon style={{ color: iconColor, fontSize: iconFont }} />}
        text="FH"
        openTestModal={openTestModal}
        disabled={!isTestApplicable("FH")}
      />
      <TestsCard
        icon={
          <ChildCareIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="CEFW"
        openTestModal={openTestModal}
        disabled={!isTestApplicable("CEFW")}
      />

      {testModal ? (
        <DirectTestsModal
          text={selectedTest}
          closeTestModal={closeTestModal}
          patient={patient}
        />
      ) : null}
    </div>
  );
};

export default DirectTests;
