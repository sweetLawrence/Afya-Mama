import React from "react";
import '../../styles/forms.css'

const GroupedInputs = ({ title, children }) => {
  return (
    <div className="element-container">
      <p className="element-title">{title}</p>
      <div className="element-input-container">
        {children}
      </div>
    </div>
  );
};

export default GroupedInputs;
