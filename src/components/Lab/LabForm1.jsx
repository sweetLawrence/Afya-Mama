import LabInputComponent from "../../pages/Labaratory/LabInputComponent";

const LabForm1 = () => {
  return (
    <div className="lab-form">
      <div className="heading">Blood Tests</div>
      <div className="form-section">
        <div className="grp">
          <LabInputComponent label={"Blood group and Rh factor"} />
          <LabInputComponent label={"Hemoglobin (Hb)"} />
        </div>

        <div className="grp">
          <LabInputComponent label={"HIV screening"} />
          <LabInputComponent label={"VDRL"} />
        </div>

        <div className="grp">
          {" "}
          <LabInputComponent label={"RBS"} />
        </div>
      </div>
      <div className="submit">
        <div className="save">Save</div>
      </div>
    </div>
  );
};

export default LabForm1;
