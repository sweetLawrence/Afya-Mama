import React from "react";
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

const DirectTests = () => {
  const iconColor = "#f178ab";
  const iconFont = "2.2em";
  
  return (
    <div className="direct-tests">
      <TestsCard
        icon={
          <MonitorHeartIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="Vital Signs"
      />
      <TestsCard
        icon={
          <FitnessCenterIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="BMI"
      />
      <TestsCard
        icon={
          <BloodtypeIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="RBS"
      />
      <TestsCard
        icon={
          <AssignmentIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="General Exam"
      />
      <TestsCard
        icon={
          <PregnantWomanIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="Abdominal Exam"
      />
      <TestsCard
        icon={<FavoriteIcon style={{ color: iconColor, fontSize: iconFont }} />}
        text="FHR"
      />
      <TestsCard
        icon={<HeightIcon style={{ color: iconColor, fontSize: iconFont }} />}
        text="FH"
      />
      <TestsCard
        icon={
          <ChildCareIcon style={{ color: iconColor, fontSize: iconFont }} />
        }
        text="CEFW"
      />
    </div>
  );
};

export default DirectTests;
