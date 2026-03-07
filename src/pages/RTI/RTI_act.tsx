import "./RTI_act.css";

const RTIAct = () => {
  return (
    <div className="rti-container">
      <h1 className="rti-title">Right to Information Act</h1>

      <div className="rti-card">
        <h2>About RTI</h2>
        <p>
          The Right to Information Act, 2005 empowers citizens to request
          information from public authorities. It promotes transparency and
          accountability in the working of every public authority.
        </p>
      </div>

      <div className="rti-card">
        <h2>Objectives</h2>
        <ul>
          <li>Promote transparency in government functioning</li>
          <li>Ensure accountability in public authorities</li>
          <li>Empower citizens with access to information</li>
          <li>Reduce corruption through open governance</li>
        </ul>
      </div>

      <div className="rti-card">
        <h2>Important Links</h2>

        <div className="rti-links">
          <a href="#">RTI Act 2005 (PDF)</a>
          <a href="#">RTI Application Form</a>
          <a href="#">RTI Rules & Guidelines</a>
        </div>
      </div>
    </div>
  );
};

export default RTIAct;