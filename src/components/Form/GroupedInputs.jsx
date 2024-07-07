import React from "react";
import "../../styles/forms.css";

const GroupedInputs = ({ title, children, special_class }) => {
  return (
    <div className={`element-container ${special_class}`}>
      <p className="element-title">{title}</p>
      <div className="element-input-container">{children}</div>
    </div>
  );
};

export default GroupedInputs;
