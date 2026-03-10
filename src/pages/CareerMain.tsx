import React, { useEffect, useState } from "react";
import "./CareerMain.css";

interface Job {
  notice_no: string;
  issue_date: string;
  last_date: string;
  post_name: string;
  vacancies: string;
  vacancy_notice: string;
}

const CareerMain = () => {

  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("/data/career.json")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error loading career data:", err));
  }, []);

  return (
    <div className="career-page">

      <div className="career-banner">
        <h1>Career</h1>
      </div>

      <div className="career-container">

        <h2 className="career-title">Current Openings</h2>

        <table className="career-table">

          <thead>
            <tr>
              <th>Notice No</th>
              <th>Issue Date</th>
              <th>Last Date</th>
              <th>Name of Post</th>
              <th>No. of Vacancies</th>
              <th>Detailed Vacancy Notice</th>
            </tr>
          </thead>

          <tbody>

            {jobs.length === 0 && (
              <tr>
                <td colSpan={6} className="no-data">
                  Loading career data...
                </td>
              </tr>
            )}

            {jobs.map((job, index) => (
              <tr key={index}>
                <td>{job.notice_no}</td>
                <td>{job.issue_date}</td>
                <td>{job.last_date}</td>
                <td className="post-column">{job.post_name}</td>
                <td>{job.vacancies}</td>

                <td>
                  {job.vacancy_notice ? (
                    <a
                      href={job.vacancy_notice}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vacancy-link"
                    >
                      Click Here
                    </a>
                  ) : (
                    "-"
                  )}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default CareerMain;