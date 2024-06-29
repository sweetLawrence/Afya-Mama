import React from "react";

const SelectComponent = ({ name, id, label, options, onChange, value }) => {
  return (
    <div className="select-component form-input-wrapper">
      
      <select name={name} id={id} onChange={onChange} value={value}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default SelectComponent;
