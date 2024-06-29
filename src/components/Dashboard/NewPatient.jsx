import React from "react";
import "../../styles/forms.css";
import FormInput from "../Form/FormInput";
import GroupedInputs from "../Form/GroupedInputs";
import SelectComponent from "../Form/SelectComponent";
const NewPatient = () => {
  function handleSubmit() {}

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setFormValues({ ...formValues, [name]: value });
  };
  const genderOptions = [
    { value: "", label: "Select Gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

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
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <GroupedInputs title="Registration Date and Time">
            <FormInput name="date" type="date" label="Date" id="date" />
            <FormInput name="time" type="time" label="Time" id="time" />
          </GroupedInputs>

          <GroupedInputs title="National Identification Number">
            <FormInput
              name="national_id"
              type="number"
              label="National Id"
              id="national_id"
            />
          </GroupedInputs>

          <div className="grouped-elements">
            <GroupedInputs title="Patient Name">
              <FormInput name="first_name" label="First Name" id="first_name" />
              <FormInput name="last_name" label="Last Name" id="last_name" />
            </GroupedInputs>

            <GroupedInputs title="Sex">
              <SelectComponent
                name="gender"
                id="gender"
                label="Gender"
                options={genderOptions}
                onChange={handleInputChange}
                //  value={formValues.gender}
              />
            </GroupedInputs>
          </div>

          <GroupedInputs title="Date of Birth">
            <FormInput
              name="date_of_birth"
              type="date"
              label="Date of Birth"
              id="date_of_birth"
            />
            {/* <FormInput name="last_name" label="Last Name" id="last_name" /> */}
          </GroupedInputs>

          <div className="grouped-elements">
            <GroupedInputs title="Phone Number">
              <FormInput
                name="phone"
                type="tel"
                label="Phone Number"
                id="phone"
              />
            </GroupedInputs>

            <GroupedInputs title="Email">
              <FormInput name="email" type="email" label="Email" id="email" />
            </GroupedInputs>
          </div>

          <GroupedInputs title="Marital Status">
            <SelectComponent
              name="marital_status"
              id="marital_status"
              label=""
              options={maritalStatusOptions}
              onChange={handleInputChange}
              //  value={formValues.gender}
            />
          </GroupedInputs>

          <div className="title-section">
            <h2>Emergency Contact</h2>
          </div>
          <GroupedInputs title="Emergency Contact">
            <FormInput
              name="emergency_first_name"
              label="First Name"
              id="emergency_first_name"
            />
            <FormInput
              name="emergency_last_name"
              label="Last Name"
              id="emergency_last_name"
            />
          </GroupedInputs>

          <div className="grouped-elements">
            <GroupedInputs title="Relationship">
              <FormInput
                name="emergency_relationship"
                // label="Phone Number"
                id="emergency_relationship"
              />
            </GroupedInputs>

            <GroupedInputs title="Contact Number">
              <FormInput
                name="emergency_phone"
                type="tel"
                //   label="Email"
                id="emergency_phone"
              />
            </GroupedInputs>

            {/* <div className="title-section">
            <h2>Health History</h2>
          </div> */}
          </div>

          <button className="intake_btn" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default NewPatient;
