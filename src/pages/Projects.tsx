
const Projects = () => {
  return (
    <>
      <style>{`
        .projects-page {
          background: #f4f7fb;
          min-height: 100vh;
        }

        .projects-banner {
          background: #2f4f8f;
          color: white;
          padding: 28px 10%;
          font-size: 26px;
          font-weight: 600;
        }

        .projects-container {
          max-width: 900px;
          margin: auto;
          padding: 50px 20px;
          background: white;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
        }

        .projects-title {
          font-size: 22px;
          font-weight: 600;
          color: #444;
          margin-bottom: 10px;
        }

        .projects-source {
          text-align: right;
          font-size: 14px;
          color: #555;
        }
      `}</style>

      <div className="projects-page">

        <div className="projects-banner">
          Projects
        </div>

        <div className="projects-container">

          <div className="projects-title">
            Projects
          </div>

          <div className="projects-source">
             
          </div>

        </div>

      </div>
    </>
  );
};

export default Projects;

