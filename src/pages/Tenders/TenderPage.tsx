const TendersPage = () => {
  return (
    <div className="p-8">

      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Tenders / e-Auctions
      </h1>

      <p className="mb-4 text-sm">
        Participant Bidders can view Technical / Financial Score (QCBS),
        Qualification / Disqualification of bids on the tender wizard portal.
      </p>

      <a
        href="#"
        className="text-blue-700 underline mb-4 block"
      >
        Participation Link for e-Tender (RLDA e-Tenders)
      </a>

      <table className="w-full border border-gray-400 text-sm">

        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">
              Tender / RFP / RFE Notice No.
            </th>

            <th className="border p-2">
              Description
            </th>

            <th className="border p-2">
              Last Date of Submission
            </th>

            <th className="border p-2">
              Date of Opening
            </th>

            <th className="border p-2">
              Detailed View
            </th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td className="border p-2">
              RFP Notice No. RLDA/2026/RFP/Works/26
            </td>

            <td className="border p-2">
              Manufacturing customised furniture and fixtures
            </td>

            <td className="border p-2">
              02.04.2026 upto 15:00 hrs
            </td>

            <td className="border p-2">
              02.04.2026 at 15:30 hrs
            </td>

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

export default TendersPage;