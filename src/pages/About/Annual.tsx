import "./Annual.css";

const Annual = () => {

  const reports = [
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
    "2018-19",
    "2017-18",
    "2016-17",
    "2015-16",
    "2014-15",
    "2013-14",
    "2012-13",
    "2011-12",
    "2010-11"
  ];

  return (
    <div className="annual-page">

      <div className="annual-banner">
        <h1>Annual Reports</h1>
      </div>

      <div className="page-container">

        <ul className="annual-list">
          {reports.map((year, index) => (
            <li key={index}>
              <a href="#">
                Annual Report ({year})
              </a>
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
};

export default Annual;