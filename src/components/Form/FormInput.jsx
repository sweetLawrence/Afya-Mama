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
  placeholder,
  disabled,
  min,
  max,
  minLength,
  maxLength
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
        required
        disabled={disabled}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}

      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FormInput;
