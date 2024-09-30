import LabInputComponent from "../../pages/Labaratory/LabInputComponent";

const LabForm2 = () => {
  return (
    <div className="lab-form">
      <div className="heading">Urinalysis</div>
      <div className="form-section">
        <div className="grp">
        <LabInputComponent label={"pH"} />
        <LabInputComponent label={"Specific Gravity"} />
        </div>
        <div className="grp">
        
        </div>
      <div className="grp">
      <LabInputComponent label={"Glucose"} />
      <LabInputComponent label={"Ketones"} />
      </div>

      <div className="grp">
      <LabInputComponent label={"Leukocyte Esterase"} />
      <LabInputComponent label={"Nitrites"} />
      </div>
       
      </div>
      <div className="submit">
        <div className="save">Save</div>
      </div>
    </div>
  );
};

export default LabForm2;
