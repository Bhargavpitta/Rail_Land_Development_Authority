import chairman from "../../assets/board/vivek_gupta.jpeg";
import viceChairman from "../../assets/board/Manoj_garg.jpeg";
import member1 from "../../assets/board/t_k_goyal.jpeg";
import member2 from "../../assets/board/Rabindra_mishra.jpeg";
import member3 from "../../assets/board/mudit_chandra.jpeg";
import member4 from "../../assets/board/anand_singh.png";

const RLDABoard = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-[#1e3a8a] mb-10">
          RLDA Board
        </h1>

        {/* Chairman */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12 text-center">
          <img
            src={chairman}
            alt="Chairman"
            className="w-56 h-64 object-cover mx-auto rounded-md shadow"
          />
          <h2 className="mt-6 text-xl font-semibold text-gray-800">
            Sh. Vivek Kumar Gupta
          </h2>
          <p className="text-gray-600">(Chairman, RLDA)</p>
          <p className="text-sm text-gray-500 mt-1">
            (Member Infrastructure)
          </p>
        </div>

        {/* Vice Chairman */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12 text-center">
          <img
            src={viceChairman}
            alt="Vice Chairman"
            className="w-48 h-56 object-cover mx-auto rounded-md shadow"
          />
          <h2 className="mt-6 text-lg font-semibold text-gray-800">
            Sh. Manoj Garg
          </h2>
          <p className="text-gray-600">(Vice Chairman)</p>
        </div>

        {/* Members Grid (Reversed Order) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={member1}
              alt="Member"
              className="w-40 h-48 object-cover mx-auto rounded-md shadow"
            />
            <h3 className="mt-4 font-semibold text-gray-800">
              Sh. T. K. Goyal
            </h3>
            <p className="text-sm text-gray-600">(Member/Planning)</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={member2}
              alt="Member"
              className="w-40 h-48 object-cover mx-auto rounded-md shadow"
            />
            <h3 className="mt-4 font-semibold text-gray-800">
              Sh. Rabindra Nath Mishra
            </h3>
            <p className="text-sm text-gray-600">(Member/Revenue)</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={member3}
              alt="Member"
              className="w-40 h-48 object-cover mx-auto rounded-md shadow"
            />
            <h3 className="mt-4 font-semibold text-gray-800">
              Sh. Mudit Chandra
            </h3>
            <p className="text-sm text-gray-600">(Member/B.D.)</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={member4}
              alt="Member"
              className="w-40 h-48 object-cover mx-auto rounded-md shadow"
            />
            <h3 className="mt-4 font-semibold text-gray-800">
              Sh. Anand Singh
            </h3>
            <p className="text-sm text-gray-600">(Member/Projects)</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default RLDABoard;