const Rules = () => {
  const rulesLinks = [
    "RLDA (Constitution) Amendment Rules, notified on October 31, 2006 & October 14, 2005",
    "RLDA (Constitution) Rules, 2007, notified on 4th January 2007",
    "RLDA (Constitution) Amendment Rules, 2007, notified on 8th August 2007",
    "RLDA (Constitution) Amendment Rules, 2008, notified on 25th June 2008",
    "RLDA (Constitution) Amendment Rules, 2009, notified on 4th September 2009",
    "RLDA Transaction of Business Rules, notified on 15th May 2012",
    "RLDA Regulations on Development of Land, notified on 30th January 2013",
    "Terms and Conditions of Deputation to RLDA for the Staff Officers of Dept. Other than Railways",
    "Terms Applicable for Deputationists to Rail Land Development Authority (RLDA) from Railways",
    "Part-I Regulation for Bids and Lease Agreements-RLDA-LDHB amended on 26 March 2014",
    "PART-II GCI-A of RLDA LDHB amended on 26 March 2014",
    "RLDA (Constitution) Amendment Rules, 2020, notified on 13th January 2020",
    "Vice Chairman (Selection and Appointment) Amendment Rules of RLDA notified on 06 Dec 2024",
    "Member (Selection and Appointment) Amendment Rules of RLDA notified on 06 Dec 2024",
    "Independent Member (Selection and Appointment) Amendment Rules of RLDA notified on 06 Dec 2024",
    "RLDA Amended Regulations, notified on 12th September 2024"
  ];

  return (
    <div style={{ padding: "40px", maxWidth: "900px" }}>
      
      <h2 style={{ color: "#2a4fa0", marginBottom: "20px" }}>
        Rules & Regulations
      </h2>

      <p>
        Rail Land Development Authority (RLDA) is a statutory Authority,
        under the Ministry of Railways, set-up by an Amendment to the
        Railways Act, 1989, for development of vacant Railway Land for
        commercial use for the purpose of generating revenue by
        non-tariff measures.
      </p>

      <p>
        RLDA has since been constituted in terms of Extraordinary Gazette
        Notification dated 31.10.2006, as amended on 5.1.2007. The Rules
        for functioning of RLDA have also been notified in the
        Extraordinary Gazette dated 4.1.2007.
      </p>

      <p>
        Indian Railways (IR) has approximately 43,000 hectares of vacant
        land. Land which is not required for operational purposes in the
        foreseeable future would be identified by the zonal railways and
        the details thereof would be advised to Railway Board.
      </p>

      <p>
        Such plots of land would thereafter be entrusted to RLDA by
        Railway Board in phases for commercial development.
      </p>

      <br />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {rulesLinks.map((rule, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                color: "#1a4ed8",
                textDecoration: "underline",
                fontSize: "15px"
              }}
            >
              {rule}
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Rules;