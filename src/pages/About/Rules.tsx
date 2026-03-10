import "./Rules.css";

const Rules = () => {

  const rulesLinks = [
    {
      text: "RLDA (Constitution) Amendment Rules, notified on October 31, 2006 & October 14, 2005",
      link: "/pdfs/About_Rules/one.pdf"
    },
    {
      text: "RLDA (Constitution) Rules, 2007, notified on 4th January 2007",
      link: "/pdfs/About_Rules/two.pdf"
    },
    {
      text: "RLDA (Constitution) Amendment Rules, 2007, notified on 8th August 2007",
      link: "/pdfs/About_Rules/three.pdf"
    },
    {
      text: "RLDA (Constitution) Amendment Rules, 2008, notified on 25th June 2008",
      link: "/pdfs/About_Rules/four.pdf"
    },
    {
      text: "RLDA (Constitution) Amendment Rules, 2009, notified on 4th September 2009",
      link: "/pdfs/About_Rules/five.pdf"
    },
    {
      text: "RLDA Transaction of Business Rules, notified on 15th May 2012",
      link: "/pdfs/About_Rules/six.pdf"
    },
    {
      text: "RLDA Regulations on development of Land, notified on 30th January 2013",
      link: "/pdfs/About_Rules/seven.pdf"
    },
    {
      text: "Terms and Conditions of Deputation to RLDA for the Staff/Officers of Dept. Other than Railways",
      link: "/pdfs/About_Rules/eight.pdf"
    },
    {
      text: "Terms Applicable for Deputationists to Rail Land Development Authority (RLDA) from Railways",
      link: "/pdfs/About_Rules/nine.pdf"
    },
    {
      text: "Part-I Regulation for Bids and Lease Agreements RLDA-LDHB amended on 26 March 2014",
      link: "/pdfs/About_Rules/ten.pdf"
    },
    {
      text: "PART-II GCLA of RLDA LDHB amended on 26 March 2014",
      link: "/pdfs/About_Rules/eleven.pdf"
    },
    {
      text: "RLDA (Constitution) Amendment Rules, 2020, notified on 13th January 2020",
      link: "/pdfs/About_Rules/twelve.pdf"
    },
    {
      text: "Vice Chairman (Selection and Appointment) Amendment Rules of RLDA notified on 06 Dec 2024",
      link: "/pdfs/About_Rules/thirteen.pdf"
    },
    {
      text: "Member (Selection and Appointment) Amendment Rules of RLDA notified on 06 Dec 2024",
      link: "/pdfs/About_Rules/fourteen.pdf"
    },
    {
      text: "Independent Member (Selection and Appointment) Amendment Rules of RLDA notified on 06 Dec 2024",
      link: "/pdfs/About_Rules/fifteen.pdf"
    },
    {
      text: "RLDA Amended Regulations , notified on 12th September 2024",
      link: "/pdfs/About_Rules/sixteen.pdf"
    }
  ];

  return (
    <div className="rules-page">

      <div className="rules-banner">
        Rules & Regulations
      </div>

      <div className="rules-container">

        <p>
          Rail Land Development Authority (RLDA) is a statutory Authority, under the Ministry of Railways,
          set up by an Amendment to the Railways Act, 1989, for development of vacant Railway Land for
          commercial use for the purpose of generating revenue by non-tariff measures.
        </p>

        <p>
          RLDA has since been constituted in terms of Extraordinary Gazette Notification dated 31.10.2006,
          as amended on 05.01.2007. The Rules for functioning of RLDA have also been notified in the
          Extraordinary Gazette dated 04.01.2007.
        </p>

        <p>
          Indian Railways (IR) has approximately 43,000 hectares of vacant land. Land which is not required
          for operational purposes in the foreseeable future would be identified by the zonal railways and
          the details thereof would be advised to Railway Board.
        </p>

        <p>
          Such plots of land would thereafter be entrusted to RLDA by Railway Board in phases for
          commercial development.
        </p>

        <ul className="rules-list">
          {rulesLinks.map((rule, index) => (
            <li key={index}>
              <a href={rule.link} target="_blank" rel="noopener noreferrer">
                {rule.text}
              </a>
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
};

export default Rules;