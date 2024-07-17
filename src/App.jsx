import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Input from "./components/Input";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./pages/Reception/Dashboard";
import DoctorDashboard from "./pages/Doctors/DoctorDashboard";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/doctor_dashboard" element={<DoctorDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
