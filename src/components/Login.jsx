import React, { useRef, useState } from "react";
import "../styles/login.css";
import Logo from "../assets/images/afyamama.png";
import InputComponent from "./Input";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import useLoginForm from "../hooks/useLoginForm";
import generateOTP from "../utils/generateOTP";

const Login = () => {
  const navigation = useNavigate();
  const { loginData, handleInputChange, handleSubmit, formRef } =
    useLoginForm();

  function handlePasswordReset() {
    alert(generateOTP());
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
            Label="Login"
            placeholder="Login"
            icon={<PersonIcon style={{ fontSize: "2em", color: "#3b82f6" }} />}
            value={loginData.username}
            onChange={handleInputChange}
            name="username"
          />
          <InputComponent
            Label=""
            placeholder="Enter password"
            action_type="password"
            icon={<LockIcon style={{ fontSize: "2em", color: "#3b82f6" }} />}
            value={loginData.password}
            onChange={handleInputChange}
            name="password"
          />
          <button type="submit">Submit</button>
          <a className="forgot-password" onClick={handlePasswordReset}>
            Forgot password
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
