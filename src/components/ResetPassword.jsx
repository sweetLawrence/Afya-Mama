import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const ResetPassword = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    code: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/reset-password", formData);

    //   if (response.data.message == "success") {
    //     toast.success("Event has been created");
    //     console.log("Password reset successful", response.data);
    //     navigation('/')
    //   } else {
    //     toast.error("Invalid Verification Code");
    //     navigation('/')
    //   }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="reset-password-page">
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} className="resetform">
        <h2>Reset Password</h2>
        <input
          type="text"
          name="code"
          className="new-password code-input"
          placeholder="Enter code"
          value={formData.code}
          onChange={handleChange}
        />
        <input
          className="new-password"
          type="password"
          name="newPassword"
          placeholder="Enter new password"
          value={formData.newPassword}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          className="new-password confirm"
          placeholder="Confirm new password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <Toaster richColors />
    </div>
  );
};

export default ResetPassword;
