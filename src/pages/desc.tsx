const Desc = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Disclaimer
      </h1>

      {/* Disclaimer Content */}
      <div className="bg-white border rounded-md shadow-sm p-6 space-y-4 text-gray-700 leading-relaxed">

        <p>
          All the contents of this Site are for general information only and are not to be relied upon in making
          (or refraining from making) any decision. Indian Railway hereby excludes any warranty, express or
          implied, as to the quality, accuracy, timeliness, completeness, performance, fitness for a particular
          purpose of the Site or any of its contents, including (but not limited to) any financial tools contained
          within the Site.
        </p>

        <p>
          Indian Railway will not be liable for any damages (including, without limitation, damages for loss of
          business projects, or loss of profits) arising in contract, tort or otherwise from the use of or inability
          to use the Site, or any of its contents, or from any action taken (or refrained from being taken) as a
          result of using the Site or any such contents.
        </p>

        <p>
          Indian Railway makes no warranty that the contents of the Site are free from infection by viruses or
          anything else which has contaminating or destructive properties.
        </p>

        <p>
          Certain links on the Site lead to resources located on servers maintained by third parties over whom
          Indian Railway has no control. Indian Railway accepts no responsibility or liability for any of the
          material contained on those servers.
        </p>

        <p>
          All efforts have been made to ensure accuracy and correctness of the information given herein;
          any omission or error is regretted.
        </p>

      </div>

    </div>
  );
};

export default Desc;