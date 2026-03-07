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
    <div style={{ padding: "40px" }}>

      <h2 style={{ color: "#2a4fa0", marginBottom: "20px" }}>
        Annual Reports
      </h2>

      <ul style={{ listStyle: "none", padding: 0 }}>

        {reports.map((year, index) => (
          <li key={index} style={{ marginBottom: "12px" }}>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                color: "#1a4ed8",
                textDecoration: "underline",
                fontSize: "16px"
              }}
            >
              Annual Report ({year})
            </a>
          </li>
        ))}

      </ul>

    </div>
  );
};

export default Annual;