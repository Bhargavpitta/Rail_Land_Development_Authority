const Pri = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Privacy Policy
      </h1>

      {/* Privacy Content */}
      <div className="bg-white border rounded-md shadow-sm p-6 space-y-4 text-gray-700 leading-relaxed">

        <p>
          Indian Railway Portal does not automatically capture any specific
          personal information from you, such as your name, phone number,
          or email address.
        </p>

        <p>
          If the portal requests personal information, you will be informed
          about the purpose for which the information is collected, and
          appropriate security measures will be taken to protect it.
        </p>

        <p>
          We do not sell or share any personally identifiable information
          voluntarily provided on the portal to any third party.
        </p>

        <p>
          Certain information such as IP address, browser type, operating
          system, date, and time of visit may be collected for statistical
          analysis and to improve the user experience of the website.
        </p>

      </div>

    </div>
  );
};

export default Pri;