import "./Rules.css";

const Rules = () => {

  const rulesLinks = [
    "RLDA (Constitution) Amendment Rules, notified on October 31, 2006 & October 14, 2005",
    "RLDA (Constitution) Rules, 2007, notified on 4th January 2007",
    "RLDA (Constitution) Amendment Rules, 2007, notified on 8th August 2007",
    "RLDA (Constitution) Amendment Rules, 2008, notified on 25th June 2008",
    "RLDA (Constitution) Amendment Rules, 2009, notified on 4th September 2009",
    "RLDA Transaction of Business Rules, notified on 15th May 2012",
    "RLDA Regulations on Development of Land, notified on 30th January 2013",
    "Terms and Conditions of Deputation to RLDA",
    "Terms Applicable for Deputationists to RLDA from Railways",
    "RLDA Amended Regulations, notified on 12th September 2024"
  ];

  return (
    <div className="rules-page">

      <div className="rules-banner">
        <h1>Rules & Regulations</h1>
      </div>

      <div className="rules-container">

        <p>
          Rail Land Development Authority (RLDA) is a statutory authority under
          the Ministry of Railways established for development of vacant
          railway land for commercial use and generation of non-tariff revenue.
        </p>

        <p>
          RLDA was constituted through a Gazette Notification dated
          31.10.2006 and the rules governing its functioning were notified
          on 04.01.2007.
        </p>

        <ul className="rules-list">
          {rulesLinks.map((rule, index) => (
            <li key={index}>
              <a href="#">{rule}</a>
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
};

export default Rules;