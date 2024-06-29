import React from "react";
import '../../styles/forms.css'

const FormInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  className = "",
  id,
  placeholder
}) => {
  return (
    <div className={`form-input-wrapper ${className}`}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        id={id}
        placeholder={placeholder}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FormInput;
