import "./Railway.css";

const Railway = () => {
  return (
    <div className="railway-page">

      <div className="railway-banner">
        <h1>Railway Zones / PU & Others</h1>
      </div>

      <div className="railway-container">

        <table className="railway-table">

          <thead>
            <tr>
              <th>ZONAL RAILWAYS</th>
              <th>PRODUCTION UNITS</th>
              <th>OTHERS</th>
              <th>OTHERS</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td><a href="#">Central Railway</a></td>
              <td><a href="#">Chittaranjan Loco Works</a></td>
              <td><a href="#">CORE</a></td>
              <td><a href="#">IT Projects under CAO/FOIS</a></td>
            </tr>

            <tr>
              <td><a href="#">East Central Railway</a></td>
              <td><a href="#">Diesel Locomotive Works</a></td>
              <td><a href="#">Darjeeling Himalayan Railways</a></td>
              <td><a href="#">Indian Railway Welfare Organisation</a></td>
            </tr>

            <tr>
              <td><a href="#">Eastern Railway</a></td>
              <td><a href="#">Integral Coach Factory</a></td>
              <td><a href="#">DFCCIL</a></td>
              <td><a href="#">National Rail Museum</a></td>
            </tr>

            <tr>
              <td><a href="#">Western Railway</a></td>
              <td><a href="#">Konkan Railway Corporation</a></td>
              <td><a href="#">Institute of Rail Transport</a></td>
              <td><a href="#">C-TARA</a></td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Railway;