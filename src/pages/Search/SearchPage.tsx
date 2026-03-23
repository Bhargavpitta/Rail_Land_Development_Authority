import "./SearchPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { searchPages } from "../../data/searchIndex";

const SearchPage = () => {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof searchPages>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {

    const filtered = searchPages.filter((page) =>
      page.title.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
    setSearched(true);
  };

  return (
    <div className="search-container">

      <h1 className="search-title">
        Search the Site
      </h1>

      <p className="search-description">
        You can use the search feature below. You can also visit the{" "}
        <Link to="/sitemap">Site Map</Link>{" "}
        to look for relevant content.
      </p>

      {/* SEARCH INPUT */}

      <div className="search-box">

        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="search-btn"
        >
          Search Now
        </button>

      </div>

      {/* RESULTS */}

      {searched && (
        <div className="search-results">

          {results.length > 0 ? (
            <>
              <p>
                Search results: <b>{results.length}</b> matches found!
              </p>

              <ul>
                {results.map((page, index) => (
                  <li key={index}>
                    <Link to={page.path}>
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="no-result">
              No matches found.
            </p>
          )}

        </div>
      )}

    </div>
  );
};

export default SearchPage;