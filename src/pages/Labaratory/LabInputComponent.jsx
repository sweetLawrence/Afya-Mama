import React from "react";

const LabInputComponent = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
}) => {
  return (
    <div className="lab-input-component">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default LabInputComponent;
