import React from "react";

const TestsCard = ({ icon, text, openTestModal, disabled }) => {
  return (
    <div
      className={`tests-card ${disabled ? "disabled" : ""}`}
      onClick={!disabled ? () => openTestModal(text) : undefined}
      style={{ pointerEvents: disabled ? "none" : "auto" }}
    >
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default TestsCard;

