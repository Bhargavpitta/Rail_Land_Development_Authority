const RTI = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        RTI
      </h1>

      {/* Guidelines Link */}
      <div className="bg-white border rounded-md shadow-sm p-5 mb-6">
        <a
          href="/pdfs/rti_guidelines.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 font-semibold underline hover:text-blue-900"
        >
          Guidelines for the Officers designated as Central Public Information
          Officer under the Right to Information Act, 2005.
        </a>
      </div>

      {/* Section 1 */}
      <div className="bg-white border rounded-md shadow-sm p-5 mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">
          1. Address to whom RTI Application be sent
        </h3>

        <p className="font-semibold text-gray-800">
          DEEPAK NARANG
        </p>

        <p className="text-gray-700 mt-1 leading-relaxed">
          CPIO, Rail Land Development Authority <br />
          Unit No.702-B, 7th Floor, Konnectus Tower-2 <br />
          DMRC Building, Ajmeri Gate <br />
          New Delhi – 110002
        </p>
      </div>

      {/* Section 2 */}
      <div className="bg-white border rounded-md shadow-sm p-5 mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">
          2. Mode of Payment of Fee
        </h3>

        <p className="text-gray-700">
          Either through IPO/DD payable to ED/Finance/RLDA, New Delhi.
        </p>
      </div>

      {/* Section 3 */}
      <div className="bg-white border rounded-md shadow-sm p-5">
        <h3 className="font-semibold text-gray-800 mb-3">
          3. Name of First Appellate Authority
        </h3>

        <p className="font-semibold text-gray-800">
          R. K. SRIVASTAVA, DEPUTY GENERAL MANAGER / LAW
        </p>

        <p className="text-gray-700 mt-1 leading-relaxed">
          Rail Land Development Authority <br />
          Unit No.702-B, 7th Floor, Konnectus Tower-2 <br />
          DMRC Building, Ajmeri Gate <br />
          New Delhi – 110002
        </p>
      </div>

    </div>
  );
};

export default RTI;