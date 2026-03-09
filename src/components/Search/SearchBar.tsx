import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if(query.trim() !== ""){
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className="flex items-center gap-2">

      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        className="border px-2 py-1 text-sm rounded"
      />

      <button
        onClick={handleSearch}
        className="bg-gray-200 border px-3 py-1 text-sm hover:bg-gray-300"
      >
        Search
      </button>

    </div>
  );
};

export default SearchBar;