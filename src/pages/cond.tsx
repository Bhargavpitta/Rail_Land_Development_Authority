const Cond = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Terms & Conditions
      </h1>

      {/* Content Card */}
      <div className="bg-white border rounded-md shadow-sm p-6">

        <a
          href="/pdfs/terms.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 font-semibold underline hover:text-blue-900"
        >
          Terms and Conditions for Deputationists to Rail Land Development Authority (RLDA)
        </a>

      </div>

    </div>
  );
};

export default Cond;