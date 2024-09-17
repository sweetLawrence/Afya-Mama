import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Input from "./components/Input";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./pages/Reception/Dashboard";
import DoctorDashboard from "./pages/Doctors/DoctorDashboard";
import LabDashboard from "./pages/Labaratory/LabDashboard";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/doctor_dashboard" element={<DoctorDashboard />} />
          <Route exact path="/lab_dashboard" element={<LabDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
