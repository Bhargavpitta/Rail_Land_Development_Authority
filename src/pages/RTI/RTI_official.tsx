import React from "react";

const RTIOfficial = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      <h1 className="text-2xl font-bold text-blue-700 mb-6">
        RTI Officials
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-400 text-sm">

          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-400 px-3 py-2">Sn.</th>
              <th className="border border-gray-400 px-3 py-2">Name</th>
              <th className="border border-gray-400 px-3 py-2">Designation</th>
              <th className="border border-gray-400 px-3 py-2">Contact No.</th>
              <th className="border border-gray-400 px-3 py-2">E-mail Address</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border border-gray-400 px-3 py-3 text-center">1</td>
              <td className="border border-gray-400 px-3 py-3">
                Sh. Ranjan Kumar Srivastava
              </td>
              <td className="border border-gray-400 px-3 py-3">
                DGM/LAW & Appellate Authority
              </td>
              <td className="border border-gray-400 px-3 py-3">
                011-23232854
              </td>
              <td className="border border-gray-400 px-3 py-3">
                <a
                  href="mailto:dgmlaw@rlda.railnet.gov.in"
                  className="text-blue-700 underline"
                >
                  dgmlaw@rlda.railnet.gov.in
                </a>
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-3 py-3 text-center">2</td>
              <td className="border border-gray-400 px-3 py-3">
                Sh. Deepak Narang
              </td>
              <td className="border border-gray-400 px-3 py-3">
                Manager / Bridge & Central Public Information Officer
              </td>
              <td className="border border-gray-400 px-3 py-3">
                011-23232854
              </td>
              <td className="border border-gray-400 px-3 py-3">
                <a
                  href="mailto:am.law@rlda.railnet.gov.in"
                  className="text-blue-700 underline"
                >
                  am.law@rlda.railnet.gov.in
                </a>
              </td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default RTIOfficial;