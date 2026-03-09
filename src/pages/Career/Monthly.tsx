import "./Monthly.css";

const Monthly = () => {
  return (
    <div className="page-container">
      <div className="page-banner">
        <h1>Monthly Remuneration</h1>
      </div>

      <div className="page-content">

        <h3 className="section-title">RAIL LAND DEVELOPMENT AUTHORITY</h3>

        <table className="remuneration-table">
          <thead>
            <tr>
              <th>S. No</th>
              <th>POST</th>
              <th>LEVEL IN PAY MATRIX</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>VICE CHAIRMAN</td>
              <td>16</td>
            </tr>

            <tr>
              <td>2</td>
              <td>MEMBER</td>
              <td>14-15</td>
            </tr>

            <tr>
              <td>3</td>
              <td>ED/GM/CPM</td>
              <td>14-15</td>
            </tr>

            <tr>
              <td>4</td>
              <td>JGM</td>
              <td>13</td>
            </tr>

            <tr>
              <td>5</td>
              <td>DGM</td>
              <td>12</td>
            </tr>

            <tr>
              <td>6</td>
              <td>MANAGER</td>
              <td>11</td>
            </tr>

            <tr>
              <td>7</td>
              <td>AM</td>
              <td>9</td>
            </tr>

            <tr>
              <td>8</td>
              <td>Below AM</td>
              <td>1-8</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Monthly;