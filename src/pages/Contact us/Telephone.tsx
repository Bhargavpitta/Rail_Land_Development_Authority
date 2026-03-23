import "./Telephone.css";
import Papa from "papaparse";
import { useEffect, useState } from "react";

const Telephone = () => {

  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);

  useEffect(() => {

    fetch("/telephoneDirectory.csv")
      .then((res) => res.text())
      .then((csvText) => {

        const result = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true
        });

        setData(result.data as any[]);

        if (result.meta.fields) {
          setColumns(result.meta.fields);
        }

      });

  }, []);

  return (
    <div className="contact-page">

      <div className="contact-banner">
        <h1>Telephone Directory</h1>
      </div>

      <div className="contact-content">

        <div className="table-wrapper">

          <table className="telephone-table">

            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>

            <tbody>

              {data.map((row, i) => (

                <tr key={i}>

                  {columns.map((col, j) => {

                    const value = row[col];

                    if (col.toLowerCase().includes("mail") && value) {
                      return (
                        <td key={j}>
                          <a href={`mailto:${value}`}>{value}</a>
                        </td>
                      );
                    }

                    return <td key={j}>{value}</td>;

                  })}

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Telephone;