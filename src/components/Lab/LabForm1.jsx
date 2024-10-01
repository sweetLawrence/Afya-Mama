import LabInputComponent from "../../pages/Labaratory/LabInputComponent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import LabSelectComponent from "../../pages/Labaratory/LabSelectComponent";

const LabForm1 = ({
  selectedPatient,
  addOne,
  subOne,
  formData,
  onInputChange,
}) => {
  // const [formData, setFormData] = useState({
  //   bloodGroup: "",
  //   hb: "",
  //   hiv: "",
  //   vdrl: "",
  //   rbs: "",
  // });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving data:", {
      patientId: selectedPatient?.id,
      ...formData,
    });
  };

  return (
    <div className="lab-form">
      <div className="heading">Blood Tests</div>
      <div className="form-section">
        <div className="grp">
          {/* <LabInputComponent
            label={"Blood group and Rh factor"}
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
          /> */}
          <LabSelectComponent
            label="Select Blood Group"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={onInputChange}
            options={[
              { label: "A+", value: "A+" },
              { label: "A-", value: "A-" },
              { label: "B+", value: "B+" },
              { label: "B-", value: "B-" },
              { label: "O+", value: "O+" },
              { label: "O-", value: "O-" },
              { label: "AB+", value: "AB+" },
              { label: "AB-", value: "AB-" },
            ]}
          />

          <LabInputComponent
            label={"Hemoglobin (Hb)"}
            name="hb"
            value={formData.hb}
            onChange={onInputChange}
          />
        </div>

        <div className="grp">
          {/* <LabInputComponent
            label={"HIV screening"}
            name="hiv"
            value={formData.hiv}
            onChange={handleInputChange}
          /> */}
          <LabSelectComponent
            label="HIV Screening"
            name="hiv"
            value={formData.hiv}
            onChange={onInputChange}
            options={[
              { label: "Reactive", value: "reactive" },
              { label: "Non-reactive", value: "non-reactive" },
            ]}
          />

          {/* <LabInputComponent
            label={"VDRL"}
            name="vdrl"
            value={formData.vdrl}
            onChange={handleInputChange}
          /> */}

          <LabSelectComponent
            label="VDRL"
            name="vdrl"
            value={formData.vdrl}
            onChange={onInputChange}
            options={[
              { label: "Reactive", value: "reactive" },
              { label: "Non-reactive", value: "non-reactive" },
            ]}
          />
        </div>

        <div className="grp">
          {" "}
          <LabInputComponent
            label={"RBS"}
            name="rbs"
            value={formData.rbs}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="submit">
        <div className="arrow left_arrow">
          <ArrowBackIcon style={{ color: "white" }} />
        </div>
        <div className="save" onClick={handleSave}>
          Save
        </div>
        <div className="arrow right_arrow" onClick={addOne}>
          <ArrowForwardIcon style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default LabForm1;
