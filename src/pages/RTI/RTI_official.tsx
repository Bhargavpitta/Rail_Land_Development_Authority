import "./RTI_official.css";

const RTIOfficial = () => {
  return (
    <div className="official-container">
      <h1 className="official-title">RTI Officials</h1>

      <table className="official-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Office</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rajesh Kumar</td>
            <td>Public Information Officer</td>
            <td>RLDA Headquarters</td>
            <td>pio@rlda.gov.in</td>
          </tr>

          <tr>
            <td>Anita Sharma</td>
            <td>Assistant PIO</td>
            <td>Delhi Division</td>
            <td>apio@rlda.gov.in</td>
          </tr>

          <tr>
            <td>Vikas Singh</td>
            <td>Appellate Authority</td>
            <td>Ministry of Railways</td>
            <td>appeal@rlda.gov.in</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RTIOfficial;