import "./Archives.css";

const Archives = () => {
  return (
    <div className="archives-page">

      <div className="archives-banner">
        Archives
      </div>

      <div className="archives-container">

        <table className="archives-table">

          <thead>
            <tr>
              <th>Notice No.</th>
              <th>Issue Date</th>
              <th>Last Date of Application</th>
              <th>Name of Post</th>
              <th>No. of Vacancies</th>
              <th>Detailed Vacancy Notice</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>VN.32/2025</td>
              <td>12.12.2025</td>
              <td>12.01.2026</td>
              <td>Chief Project Manager</td>
              <td>02</td>
              <td><a href="#">Click Here</a></td>
            </tr>

            <tr>
              <td>VN.31/2025</td>
              <td>10.12.2025</td>
              <td>30.12.2025</td>
              <td>
                Manager / Assistant Manager (Electrical Engineering) & Extra Low Voltage
              </td>
              <td>04</td>
              <td><a href="#">Click Here</a></td>
            </tr>

            <tr>
              <td>VN.30/2025</td>
              <td>08.12.2025</td>
              <td>14.01.2026</td>
              <td>
                Manager / Deputy General Manager / Assistant Manager
              </td>
              <td>06</td>
              <td>
                <a href="#">Corrigendum to VN.30/2025</a>
              </td>
            </tr>

            <tr>
              <td>VN.29/2025</td>
              <td>29.11.2025</td>
              <td>26.12.2025</td>
              <td>
                Manager / Assistant Manager (Law)
              </td>
              <td>01</td>
              <td><a href="#">Click Here</a></td>
            </tr>

            <tr>
              <td>VN.28/2025</td>
              <td>25.11.2025</td>
              <td>08.01.2026</td>
              <td>General Manager (HR)</td>
              <td>01</td>
              <td>
                <a href="#">Corrigendum</a>
              </td>
            </tr>

            <tr>
              <td>VN.27/2025</td>
              <td>21.11.2025</td>
              <td>22.12.2025</td>
              <td>
                Joint General Manager / Deputy General Manager
              </td>
              <td>06</td>
              <td><a href="#">Click Here</a></td>
            </tr>

            <tr>
              <td>VN.26/2025</td>
              <td>18.11.2025</td>
              <td>02.01.2026</td>
              <td>
                Joint General Manager / Deputy General Manager (Civil)
              </td>
              <td>04</td>
              <td>
                <a href="#">Addendum</a>
              </td>
            </tr>

            <tr>
              <td>VN.25/2025</td>
              <td>04.11.2025</td>
              <td>10.12.2025</td>
              <td>
                Manager / Assistant Manager (Electrical Engineering)
              </td>
              <td>04</td>
              <td>
                <a href="#">Corrigendum</a>
              </td>
            </tr>

            <tr>
              <td>VN.24/2025</td>
              <td>03.11.2025</td>
              <td>18.12.2025</td>
              <td>
                Land / Revenue Records Consultant
              </td>
              <td>02</td>
              <td>
                <a href="#">Click Here</a>
              </td>
            </tr>

            <tr>
              <td>VN.23/2025</td>
              <td>30.10.2025</td>
              <td>16.12.2025</td>
              <td>
                Joint General Manager / Deputy General Manager (Electrical)
              </td>
              <td>02</td>
              <td>
                <a href="#">Click Here</a>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Archives;