import React, { useEffect, useState } from "react";
import "../../styles/forms.css";
import FormInput from "../Form/FormInput";
import GroupedInputs from "../Form/GroupedInputs";
import SelectComponent from "../Form/SelectComponent";
import { useSearchParams } from "react-router-dom";
import CheckinCard from "../CheckinCard";
import { Toaster, toast } from "sonner";
import axiosInstance from "../../utils/axios";
import CloseIcon from "@mui/icons-material/Close";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const NewPatient = ({ setFormOpen, fetchAction, setFetchAction }) => {
  const [formValues, setFormValues] = useState({
    date: "",
    time: "",
    national_id: "",
    first_name: "",
    last_name: "",
    sex: "Female",
    date_of_birth: "",
    phone: "",
    email: "",
    marital_status: "",
    emergency_first_name: "",
    emergency_last_name: "",
    emergency_relationship: "",
    emergency_phone: "",
    lmp: "",
    edd: "",
    gravida: "",
    parity: "",
    height: "",
    weight: "",
  });

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return emailPattern.test(email);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateEmail(formValues.email)) {
      toast.error("Please enter a valid email address."); // Show error message
      return; // Prevent form submission
    }

    const hospitalId = localStorage.getItem("hospitalId");
    const dataToSubmit = { ...formValues, hospitalId };

    axiosInstance
      // .post("/api/collections/patients/records", formValues)
      .post("http://localhost:3000/patients/register", dataToSubmit)
      .then((response) => {
        // activateSonner();
        toast.success("Patient Registered successfully");
        setFormOpen(false);
        setFetchAction(!fetchAction);

        console.log("Form submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // Handle error or display a toast message
        toast.error("Failed to submit form. Please try again.");
      });

    console.log(formValues);
    setFormOpen(false);
    // alert(checkIn)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const genderOptions = [{ value: "female", label: "Female" }];

  const maritalStatusOptions = [
    { value: "", label: "Marital Status" },
    { value: "married", label: "Married" },
    { value: "single", label: "Single" },
    { value: "divorced", label: "Divorced" },
  ];

  return (
    <div className="newpatient">
      <div className="title-section">
        <h2>New Patient Registration</h2>
        <div className="close_icon" onClick={() => setFormOpen(false)}>
          <CloseIcon />
        </div>
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          {/* <GroupedInputs
            special_class="special_class"
            title="Registration Date and Time"
          >
            <FormInput
              name="date"
              type="date"
              label="Date"
              id="date"
              value={formValues.date}
              onChange={handleInputChange}
            />
            <FormInput
              name="time"
              type="time"
              label="Time"
              id="time"
              onChange={handleInputChange}
            />
          </GroupedInputs> */}

          <GroupedInputs title="National Identification Number">
            <FormInput
              name="national_id"
              type="number"
              label="National Id"
              id="national_id"
              min={0}
              maxLength={8}
              minLength={7}
              value={formValues.national_id}
              onChange={handleInputChange}
            />
          </GroupedInputs>

          <div className="grouped-elements special_class">
            <GroupedInputs title="Patient Name">
              <FormInput
                name="first_name"
                label="First Name"
                id="first_name"
                value={formValues.first_name}
                onChange={handleInputChange}
              />
              <FormInput
                name="last_name"
                label="Last Name"
                id="last_name"
                value={formValues.last_name}
                onChange={handleInputChange}
              />
            </GroupedInputs>

            <GroupedInputs title="Sex">

              <FormInput name="sex" label="" id="sex" value="Female" disabled />
            </GroupedInputs>
          </div>

          <GroupedInputs title="Date of Birth">
            <FormInput
              name="date_of_birth"
              type="date"
              label="Date of Birth"
              id="date_of_birth"
              value={formValues.date_of_birth}
              onChange={handleInputChange}
            />
            {/* <FormInput name="last_name" label="Last Name" id="last_name" /> */}
          </GroupedInputs>

          <div className="grouped-elements special_class">
            <GroupedInputs title="Phone Number">
              <FormInput
                name="phone"
                type="tel"
                label="Phone Number"
                id="phone"
                value={formValues.phone}
                onChange={handleInputChange}
              />
            </GroupedInputs>

            <GroupedInputs title="Email">
              <FormInput
                name="email"
                type="email"
                label="Email"
                id="email"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </GroupedInputs>
          </div>

          <GroupedInputs title="Marital Status">
            <SelectComponent
              name="marital_status"
              id="marital_status"
              label=""
              options={maritalStatusOptions}
              value={formValues.marital_status}
              onChange={handleInputChange}
              //  value={formValues.gender}
            />
          </GroupedInputs>

          <div className="title-section">
            <h2>Emergency Contact</h2>
          </div>
          <GroupedInputs
            special_class="special_class"
            title="Emergency Contact"
          >
            <FormInput
              name="emergency_first_name"
              label="First Name"
              id="emergency_first_name"
              value={formValues.emergency_first_name}
              onChange={handleInputChange}
            />
            <FormInput
              name="emergency_last_name"
              label="Last Name"
              id="emergency_last_name"
              value={formValues.emergency_last_name}
              onChange={handleInputChange}
            />
          </GroupedInputs>

          {/* <div className="grouped-elements"> */}
          <GroupedInputs title="Relationship & Contact Number">
            <FormInput
              name="emergency_relationship"
              label="Relationship"
              id="emergency_relationship"
              value={formValues.emergency_relationship}
              onChange={handleInputChange}
            />

            <FormInput
              name="emergency_phone"
              type="tel"
              label="Contact Number"
              id="emergency_phone"
              value={formValues.emergency_phone}
              onChange={handleInputChange}
            />
          </GroupedInputs>

          {/* <GroupedInputs title="Contact Number">
              <FormInput
                name="emergency_phone"
                type="tel"
                label="Contact Number"
                id="emergency_phone"
              />
            </GroupedInputs> */}

          {/* <div className="title-section">
            <h2>Health History</h2>
          </div> */}
          {/* </div> */}

          <div className="title-section">
            <h2>Maternal Profile</h2>
          </div>

          <GroupedInputs
            special_class="special_class"
            title="Last Menstrual Period " //& Expected Delivery Date
          >
            <FormInput
              name="lmp"
              label="LMP"
              id="lmp"
              type="date"
              value={formValues.lmp}
              onChange={handleInputChange}
            />

            {/* <FormInput
              name="edd"
              label="EDD"
              id="edd"
              type="date"
              value={formValues.edd}
              onChange={handleInputChange}
            /> */}
          </GroupedInputs>

          <GroupedInputs title="Gravida & Parity">
            <FormInput
              name="gravida"
              label="Gravida"
              id="gravida"
              type="number"
              min={0}
              value={formValues.gravida}
              onChange={handleInputChange}
            />

            <FormInput
              name="parity"
              label="Parity"
              id="parity"
              type="number"
              min={0}
              onChange={handleInputChange}
            />
          </GroupedInputs>

          {/* <GroupedInputs special_class="special_class" title="Height & Weight">
            <FormInput
              name="height"
              label="Height"
              id="height"
              placeholder="Ft"
              type="number"
              min={0}
              value={formValues.height}
              onChange={handleInputChange}
            />

            <FormInput
              name="weight"
              label="Weight"
              id="weight"
              placeholder="Kgs"
              type="number"
              min={0}
              value={formValues.weight}
              onChange={handleInputChange}
            />
          </GroupedInputs> */}

          <button className="intake_btn" type="submit">
            Register
          </button>
        </form>
      </div>
      {/* {checkIn ? <CheckinCard /> : null} */}
    </div>
  );
};

export default NewPatient;

//  // const { name, value } = e.target;
//   // setFormValues({ ...formValues, [name]: value });
//   // console.log(formValues)

//   for (let val of Object.keys(formValues)) {
//     // console.log(val, formValues[val])
//     setFormValues({ ...formValues, [val]: e.target[`${val}`].value });
//     // console.log(val, e.target[`${val}`].value)
//   }
//   console.log(formValues)
//   // console.log(e.target[name]);
