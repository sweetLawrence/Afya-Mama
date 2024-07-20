// import React from "react";

// const TestsCard = ({ icon, text, openTestModal }) => {
//   return (
//     <div className="tests-card" onClick={() => openTestModal(text)}>
//       {icon}
//       <p>{text}</p>
//     </div>
//   );
// };

// export default TestsCard;

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

// import React from "react";

// const TestsCard = ({ icon, text, openTestModal, disabled }) => {
//   return (
//     <div
//       className={`test-card ${disabled ? "disabled" : ""}`}
//       onClick={!disabled ? () => openTestModal(text) : undefined}
//       style={{ pointerEvents: disabled ? "none" : "auto" }}
//     >
//       <div className="test-card-icon">{icon}</div>
//       <div className="test-card-text">{text}</div>
//     </div>
//   );
// };

// export default TestsCard;
