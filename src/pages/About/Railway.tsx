import "./Railway.css";

const Railway = () => {
  return (
    <div className="railway-container">

      <h2 className="railway-title">Railway Zones / PU & Others</h2>

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
            <td><a href="#">Central Organisation for Railway Electrification (CORE)</a></td>
            <td><a href="#">IT Projects under CAO/FOIS</a></td>
          </tr>

          <tr>
            <td><a href="#">East Central Railway</a></td>
            <td><a href="#">Diesel Locomotive Works</a></td>
            <td><a href="#">Darjeeling Himalayan Railways (DHR)</a></td>
            <td><a href="#">Indian Railway Welfare Organisation (IRWO)</a></td>
          </tr>

          <tr>
            <td><a href="#">East Coast Railway</a></td>
            <td><a href="#">Diesel-Loco Modernisation Works</a></td>
            <td><a href="#">Delhi Metro Rail Corporation (DMRC)</a></td>
            <td><a href="#">National Rail Museum sites (NRM)</a></td>
          </tr>

          <tr>
            <td><a href="#">Eastern Railway</a></td>
            <td><a href="#">Integral Coach Factory</a></td>
            <td><a href="#">Dedicated Freight Corridor Corporation of India Limited (DFCC)</a></td>
            <td><a href="#">Palace on Wheels (RTDC Website)</a></td>
          </tr>

          <tr>
            <td><a href="#">North Central Railway</a></td>
            <td><a href="#">Rail Coach Factory</a></td>
            <td><a href="#">Railway Claims Tribunal (RCT)</a></td>
            <td><a href="#">Rail Land Development Authority (RLDA)</a></td>
          </tr>

          <tr>
            <td><a href="#">North Eastern Railway</a></td>
            <td><a href="#">Rail Wheel Factory</a></td>
            <td><a href="#">Indian Railway Accounts Service Association</a></td>
            <td><a href="#">Rail Vikas Nigam Ltd. (RVNL)</a></td>
          </tr>

          <tr>
            <td><a href="#">North Western Railway</a></td>
            <td><a href="#">Konkan Railway Corporation Ltd.</a></td>
            <td><a href="#">Indian Railways Service of Mechanical Engineers (IRSME)</a></td>
            <td><a href="#">Research Design and Standards Organisation (RDSO)</a></td>
          </tr>

          <tr>
            <td><a href="#">Metro Railway Kolkata</a></td>
            <td><a href="#">RITES Ltd.</a></td>
            <td><a href="#">Indian Railway Traffic Service Association (IRTS)</a></td>
            <td><a href="#">Workshop Projects, Patna</a></td>
          </tr>

          <tr>
            <td><a href="#">Western Railway</a></td>
            <td><a href="#">Konkan Railway Corporation</a></td>
            <td><a href="#">Institute of Rail Transport</a></td>
            <td><a href="#">C-TARA</a></td>
          </tr>

          <tr>
            <td><a href="#">West Central Railway</a></td>
            <td><a href="#">RATLCL Corporation of India Ltd.</a></td>
            <td><a href="#">Kutch Railway Company Ltd.</a></td>
            <td></td>
          </tr>

          <tr>
            <td><a href="#">Southern Railway</a></td>
            <td><a href="#">Mumbai Railway Vikas Corporation</a></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td><a href="#">South Western Railway</a></td>
            <td><a href="#">Pipavav Railway Corporation Ltd.</a></td>
            <td></td>
            <td></td>
          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default Railway;