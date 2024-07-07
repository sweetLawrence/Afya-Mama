import React from "react";
import "../../styles/forms.css";
import FormInput from "../Form/FormInput";
import GroupedInputs from "../Form/GroupedInputs";
import SelectComponent from "../Form/SelectComponent";
const NewPatient = ({ setFormOpen }) => {
  function handleSubmit(e) {
    e.preventDefault();
    setFormOpen(false);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setFormValues({ ...formValues, [name]: value });
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
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <GroupedInputs special_class="special_class" title="Registration Date and Time">
            <FormInput name="date" type="date" label="Date" id="date" />
            <FormInput name="time" type="time" label="Time" id="time" />
          </GroupedInputs>

          <GroupedInputs title="National Identification Number">
            <FormInput
              name="national_id"
              type="number"
              label="National Id"
              id="national_id"
              min={0}
              maxLength={8}
              minLength={7}
            />
          </GroupedInputs>

          <div className="grouped-elements special_class">
            <GroupedInputs title="Patient Name">
              <FormInput name="first_name" label="First Name" id="first_name" />
              <FormInput name="last_name" label="Last Name" id="last_name" />
            </GroupedInputs>

            <GroupedInputs title="Sex">
              {/* <SelectComponent
                name="gender"
                id="gender"
                label="Sex"
                options={genderOptions}
                onChange={handleInputChange}
                //  value={formValues.gender}
              /> */}

              <FormInput name="sex" label="" id="sex" value="Female" disabled/>
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

          <div className="grouped-elements special_class">
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
          <GroupedInputs special_class="special_class" title="Emergency Contact">
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

          {/* <div className="grouped-elements"> */}
          <GroupedInputs title="Relationship & Contact Number">
            <FormInput
              name="emergency_relationship"
              label="Relationship"
              id="emergency_relationship"
            />

            <FormInput
              name="emergency_phone"
              type="tel"
              label="Contact Number"
              id="emergency_phone"
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

          <GroupedInputs special_class="special_class" title="Last Menstrual Period & Expected Delivery Date">
            <FormInput
              name="lmp"
              label="LMP"
              id="lmp"
              type="date"
            />

            <FormInput
              name="edd"
              label="EDD"
              id="edd"
              type="date"
            />
          </GroupedInputs>

          
          <GroupedInputs title="Gravida & Parity">
            <FormInput
              name="gravida"
              label="Gravida"
              id="gravida"
              type="number"
            />

            <FormInput
              name="parity"
              label="Parity"
              id="parity"
              type="number"
            />
          </GroupedInputs>

          
          <GroupedInputs special_class="special_class" title="Height & Weight">
            <FormInput
              name="height"
              label="Height"
              id="height"
              placeholder="ft"
              
            />

            <FormInput
              name="weight"
              label="Weight"
              id="weight"
               placeholder="Kgs"
            />
          </GroupedInputs>

          <button className="intake_btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPatient;
