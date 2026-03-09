const ContactUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Contact Us
      </h1>

      {/* Contact Card */}
      <div className="bg-white shadow-md rounded-lg p-6 border">

        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Postal Address
        </h2>

        <p className="font-semibold text-gray-800">
          Rail Land Development Authority
        </p>

        <p className="mt-1 text-gray-700 leading-relaxed">
          Unit No.702-B, 7th Floor, Konnectus Tower-2 <br />
          DMRC Building, Ajmeri Gate <br />
          Delhi – 110002
        </p>

        <p className="mt-4 text-gray-800">
          <span className="font-semibold">EPABX No. :</span>
          <span className="ml-2">
            011-23232854 / 23232835 / 23212834
          </span>
        </p>

        <p className="mt-4 text-sm text-gray-600 italic">
          Landmark: Above Airport Metro Express Line, Opposite New Delhi Railway
          Station (Ajmeri Gate Side)
        </p>

      </div>

    </div>
  );
};

export default ContactUs;