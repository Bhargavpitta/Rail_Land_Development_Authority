
const Desc = () => {
  return (
    <>
      <style>{`
        .desc-page {
          background: #f4f7fb;
          min-height: 100vh;
        }

        .desc-banner {
          background: #2f4f8f;
          color: white;
          padding: 28px 10%;
          font-size: 26px;
          font-weight: 600;
        }

        .desc-container {
          max-width: 1200px;
          margin: auto;
          padding: 40px 20px;
        }

        .desc-card {
          background: white;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 28px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
          line-height: 1.7;
          color: #444;
        }

        .desc-card p {
          margin-bottom: 16px;
        }
      `}</style>

      <div className="desc-page">

        <div className="desc-banner">
          Disclaimer
        </div>

        <div className="desc-container">

          <div className="desc-card">

            <p>
              All the contents of this Site are for general information only and are not to be relied upon in making
              (or refraining from making) any decision. Indian Railway hereby excludes any warranty, express or
              implied, as to the quality, accuracy, timeliness, completeness, performance, fitness for a particular
              purpose of the Site or any of its contents, including (but not limited to) any financial tools contained
              within the Site.
            </p>

            <p>
              Indian Railway will not be liable for any damages (including, without limitation, damages for loss of
              business projects, or loss of profits) arising in contract, tort or otherwise from the use of or inability
              to use the Site, or any of its contents, or from any action taken (or refrained from being taken) as a
              result of using the Site or any such contents.
            </p>

            <p>
              Indian Railway makes no warranty that the contents of the Site are free from infection by viruses or
              anything else which has contaminating or destructive properties.
            </p>

            <p>
              Certain links on the Site lead to resources located on servers maintained by third parties over whom
              Indian Railway has no control. Indian Railway accepts no responsibility or liability for any of the
              material contained on those servers.
            </p>

            <p>
              All efforts have been made to ensure accuracy and correctness of the information given herein;
              any omission or error is regretted.
            </p>

          </div>

        </div>

      </div>
    </>
  );
};

export default Desc;

