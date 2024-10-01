import LabInputComponent from "../../pages/Labaratory/LabInputComponent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import LabSelectComponent from "../../pages/Labaratory/LabSelectComponent";

const LabForm2 = ({
  selectedPatient,
  addOne,
  subOne,
  formData,
  onInputChange,
}) => {
  //   const [formData, setFormData] = useState({
  //     pH: "",
  //     specificGravity: "",
  //     glucose: "",
  //     ketones: "",
  //     nitrites: "",
  //     leukocyteEsterase: "",
  //   });
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
      <div className="heading">Urinalysis</div>
      <div className="form-section">
        <div className="grp">
          <LabInputComponent
            label={"pH"}
            name="pH"
            value={formData.pH}
            onChange={onInputChange}
          />
          <LabInputComponent
            label={"Specific Gravity"}
            name="specificGravity"
            value={formData.specificGravity}
            onChange={onInputChange}
          />
        </div>
        <div className="grp"></div>
        <div className="grp">
          {/* <LabInputComponent
            label={"Glucose"}
            name="glucose"
            value={formData.glucose}
            onChange={handleInputChange}
          /> */}
          <LabSelectComponent
            label="Glucose"
            name="glucose"
            value={formData.glucose}
            onChange={onInputChange}
            options={[
              { label: "Present", value: "Present" },
              { label: "Absent", value: "Absent" },
            ]}
          />

          {/* <LabInputComponent
            label={"Ketones"}
            name="ketones"
            value={formData.ketones}
            onChange={handleInputChange}
          /> */}
          <LabSelectComponent
            label="Ketones"
            name="ketones"
            value={formData.ketones}
            onChange={onInputChange}
            options={[
              { label: "Positive", value: "Positive" },
              { label: "Negative", value: "Negative" },
            ]}
          />
        </div>

        <div className="grp">
          {/* <LabInputComponent
            label={"Leukocyte Esterase"}
            name="leukocyteEsterase"
            value={formData.leukocyteEsterase}
            onChange={handleInputChange}
          /> */}
          <LabSelectComponent
            label="Leukocyte Esterase"
            name="leukocyteEsterase"
            value={formData.leukocyteEsterase}
            onChange={onInputChange}
            options={[
              { label: "Present", value: "Present" },
              { label: "Absent", value: "Absent" },
            ]}
          />

          {/* <LabInputComponent label={"Nitrites"} /> */}
          <LabSelectComponent
            label="Nitrites"
            name="nitrites"
            value={formData.nitrites}
            onChange={onInputChange}
            options={[
              { label: "Present", value: "Present" },
              { label: "Absent", value: "Absent" },
            ]}
          />
        </div>
      </div>
      <div className="submit">
        <div className="arrow left_arrow" onClick={subOne}>
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

export default LabForm2;
