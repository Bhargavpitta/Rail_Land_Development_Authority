const CareerPage = () => {
  return (
    <div className="p-8">

      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Career
      </h1>

      <h2 className="font-semibold italic mb-4">
        Current Openings
      </h2>

      <div className="mb-4">
        <a
          href="#"
          className="text-blue-600 underline block"
        >
          Click here for Application Proforma for deputation in RLDA
        </a>

        <a
          href="#"
          className="text-blue-600 underline block"
        >
          Selection for the Post of Member (Planning) / RLDA
        </a>
      </div>

      <table className="w-full border border-gray-400 text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Notice No.</th>
            <th className="border p-2">Issue Date</th>
            <th className="border p-2">Last Date of Submission</th>
            <th className="border p-2">Name of Post</th>
            <th className="border p-2">No. of Vacancies</th>
            <th className="border p-2">Detailed Vacancy Notice</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td className="border p-2">V.N.05/2026</td>
            <td className="border p-2">23.02.2026</td>
            <td className="border p-2">16.03.2026</td>
            <td className="border p-2">
              Chief Project Manager & Joint General Manager /
              Deputy General Manager (Civil)
            </td>
            <td className="border p-2 text-center">02</td>
            <td className="border p-2">
              <a href="#" className="text-blue-600 underline">
                Click Here
              </a>
            </td>
          </tr>

          <tr>
            <td className="border p-2">V.N.04/2026</td>
            <td className="border p-2">10.02.2026</td>
            <td className="border p-2">09.03.2026</td>
            <td className="border p-2">
              Joint General Manager / Deputy General Manager
              (Civil) / Electrical
            </td>
            <td className="border p-2 text-center">06</td>
            <td className="border p-2">
              <a href="#" className="text-blue-600 underline">
                Click Here
              </a>
            </td>
          </tr>

          <tr>
            <td className="border p-2">V.N.03/2026</td>
            <td className="border p-2">09.02.2026</td>
            <td className="border p-2">09.03.2026</td>
            <td className="border p-2">General Manager / HR</td>
            <td className="border p-2 text-center">01</td>
            <td className="border p-2">
              <a href="#" className="text-blue-600 underline">
                Click Here
              </a>
            </td>
          </tr>

        </tbody>
      </table>

    </div>
  );
};

export default CareerPage;