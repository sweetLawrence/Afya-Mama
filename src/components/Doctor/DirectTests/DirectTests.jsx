import React, { useState } from "react";
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

const DirectTests = ({ patient }) => {
  const iconColor = "#f178ab";
  // const iconColor = '#F59DC2'
  const iconFont = "2.2em";

  const [testModal, setTestModal] = useState(false);
  const [selectedTest, setSelectedTest] = useState("");

  function openTestModal(testText) {
    setSelectedTest(testText);
    setTestModal(true);
  }

  function closeTestModal() {
    setTestModal(false);
    setSelectedTest("");
  }

  return (
    <div className="direct-tests">
      <TestsCard
        icon={
          <MonitorHeartIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="Vital Signs"
        openTestModal={openTestModal}
      />
      <TestsCard
        icon={
          <FitnessCenterIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="BMI"
        openTestModal={openTestModal}
      />
      <TestsCard
        icon={
          <BloodtypeIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="RBS"
        openTestModal={openTestModal}
      />
      <TestsCard
        icon={
          <AssignmentIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="General Exam"
        openTestModal={openTestModal}
      />
      <TestsCard
        icon={
          <PregnantWomanIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="Abdominal Exam"
        openTestModal={openTestModal}
      />
      <TestsCard
        icon={<FavoriteIcon style={{ color: iconColor, fontSize: iconFont }} />}
        text="FHR"
        openTestModal={openTestModal}
      />
      <TestsCard
        icon={<HeightIcon style={{ color: iconColor, fontSize: iconFont }} />}
        text="FH"
        openTestModal={openTestModal}
      />
      <TestsCard
        icon={
          <ChildCareIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="CEFW"
        openTestModal={openTestModal}
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
