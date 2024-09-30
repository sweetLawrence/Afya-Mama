import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";

const InputComponent = ({ icon,placeholder, Label, id_name, name, action_type,onChange }) => {
  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <div className="input">
      <label className="label_component" htmlFor={id_name}>{Label}</label>
      <div className="main">
      <input
        className={`input_component lab-input`}
        style={{
          borderColor: focused ? "#3b82f6" : "black",
        }}
        type={action_type}
        id={id_name}
        name={name}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleChange}
      />
      <div className="icon">
      {icon}
      </div>
      </div>
    
    </div>
  );
};

export default InputComponent;
