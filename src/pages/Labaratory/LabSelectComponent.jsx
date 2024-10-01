import React from "react";

const LabSelectComponent = ({
  label,
  name,
  value,
  options = [],
  onChange,
  required = false,
}) => {
  return (
    <div className="lab-input-component">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="" disabled>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LabSelectComponent;
