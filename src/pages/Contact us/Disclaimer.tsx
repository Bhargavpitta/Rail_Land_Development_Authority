import "./Disclaimer.css";

const Disclaimer = () => {
  return (
    <div className="disclaimer-page">
      <div className="disclaimer-banner">
        Disclaimer
      </div>

      <div className="disclaimer-container">
        <p>
          All the contents of this Site are for general information only and
          are not to be relied upon in making (or refraining from making) any
          decision. Indian Railway hereby excludes any warranty, express or
          implied, as to the quality, accuracy, timeliness, completeness,
          performance, fitness for a particular purpose of the Site or any of
          its contents.
        </p>

        <p>
          Indian Railway will not be liable for any damages (including, without
          limitation, damages for loss of business projects, or loss of
          profits) arising in contract, tort or otherwise from the use of or
          inability to use the Site, or any of its contents.
        </p>

        <p>
          Indian Railway makes no warranty that the contents of the Site are
          free from infection by viruses or anything else which has
          contaminating or destructive properties.
        </p>

        <p>
          Certain links on the Site lead to resources located on servers
          maintained by third parties over whom Indian Railway has no control.
          Indian Railway accepts no responsibility or liability for any of the
          material contained on those servers.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;