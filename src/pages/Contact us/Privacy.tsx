import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-banner">
        Privacy Policy
      </div>

      <div className="privacy-container">
        <p>
          Indian Railway Portal does not automatically capture any specific
          personal information from you (like name, phone number, or email
          address) that allows us to identify the end user individually.
        </p>

        <p>
          If the Indian Railway Portal website requests you to provide personal
          information, it will be informed for the particular purposes for which
          the information is gathered and adequate security measures will be
          taken to protect personal information.
        </p>

        <p>
          We do not sell or share any personally identifiable information
          volunteered on the Indian Railway Portal site to any third party
          (public/private). Any information provided to this portal will be
          protected from loss, misuse, unauthorized access or disclosure,
          alteration, or destruction.
        </p>

        <p>
          We gather certain information about the user, such as Internet
          Protocol (IP) addresses, domain name, browser type, operating system,
          the date and time of the visit, and the pages visited. We make no
          attempt to link these addresses with the identity of individuals
          visiting our site unless an attempt to damage the site has been
          detected.
        </p>
      </div>
    </div>
  );
};

export default Privacy;