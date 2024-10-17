import React from "react";

const BirthInputComponent = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
}) => {
  return (
    <div className="birth-input-component">
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

export default BirthInputComponent;
