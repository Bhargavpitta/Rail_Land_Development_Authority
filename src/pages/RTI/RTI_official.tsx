import "./RTI_official.css";

const RTIOfficial = () => {
  return (
    <div className="official-page">
      <div className="official-banner">
        <h1>RTI Officials</h1>
      </div>

      <div className="official-container">
        <table className="official-table">
          <thead>
            <tr>
              <th>Sn.</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Contact No.</th>
              <th>E-mail Address</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Sh. Ranjan Kumar Srivastava</td>
              <td>DGM/LAW & Appellate Authority</td>
              <td>011-23232854</td>
              <td>
                <a href="mailto:dgmlaw@rlda.railnet.gov.in">
                  dgmlaw@rlda.railnet.gov.in
                </a>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Sh. Deepak Narang</td>
              <td>Manager / Bridge & Central Public Information Officer</td>
              <td>011-23232854</td>
              <td>
                <a href="mailto:am.law@rlda.railnet.gov.in">
                  am.law@rlda.railnet.gov.in
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RTIOfficial;