import React, { useRef, useState } from "react";
import "../styles/login.css";
import Logo from "../assets/images/afyamama.png";
import InputComponent from "./Input";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate, useSearchParams } from "react-router-dom";
import useLoginForm from "../hooks/useLoginForm";
import generateOTP from "../utils/generateOTP";

const Login = () => {
  const navigation = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { loginData, handleInputChange, handleSubmit, formRef } = useLoginForm();

  function handlePasswordReset() {
    alert(generateOTP());
    const search_parameters = new URLSearchParams(searchParams);
    search_parameters.set("q", "intake");
    navigation("/reset-password");
  }

  return (
    <div className="login">
      <div className="afyamama-logo">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="title">Afya Mama</div>
        <div className="subtext">Hospital Account</div>
      </div>
      <div className="afyamama-form">
        <form ref={formRef} onSubmit={handleSubmit}>
          <h2>Welcome to Afya Mama</h2>
          <InputComponent
            Label=" "
            placeholder="Enter Medical License Number"
            icon={<PersonIcon style={{ fontSize: "2em", color: "#3b82f6" }} />}
            value={loginData.medicalLicenseNumber}
            onChange={handleInputChange}
            name="medicalLicenseNumber"
          />
          <InputComponent
            Label=""
            placeholder="Enter Hospital ID"
            action_type="text"
            icon={<LockIcon style={{ fontSize: "2em", color: "#3b82f6" }} />}
            value={loginData.hospitalId}
            onChange={handleInputChange}
            name="hospitalId"
          />
          <button type="submit">Submit</button>
          {/* <a className="forgot-password" onClick={handlePasswordReset}>
            Forgot password
          </a> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
