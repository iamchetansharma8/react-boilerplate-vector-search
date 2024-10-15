import React, { useState } from "react";
// import "./SearchComponent.css";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Add your main CSS file for styling

const sampleData = [
  {
    title: "Understanding ELSER: A Comprehensive Guide",
    body: "ELSER (Efficiently Learning an Embedding for Search and Retrieval) is a vector search model that helps improve search accuracy by utilizing embeddings. This guide covers its implementation and benefits.",
  }
];

function SearchComponent() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    setLoading(true);
    setResults([]); // Clear old results immediately

    // Simulate fetching data based on query
    setTimeout(() => {
      // For demo purposes, just returning the sample data regardless of query
      setResults(sampleData);
      setLoading(false);
    }, 1000);
  };

  const handleShowMore = (index) => {
    navigate(`/details/${index}`); // Navigate to the detail page
  };

  return (
    <div className="search-app">
      {/* <header className="app-header">
        <h1>ELSER Search Application</h1>
      </header> */}
      <div className="search-section">
        <div className="search-top">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        {loading && <div className="loader">Loading...</div>}
      </div>
      <div className="results-section">
        <div className="results-container">
          {results.map((result, index) => (
            <div className="result-card" key={index}>
              <h3 className="card-title">{result.title}</h3>
              <div className="card-body">
                <p className="card-summary">{result.body}</p>
              </div>
              <button
                className="toggle-details"
                onClick={() => handleShowMore(index)}
              >
                Show More
              </button>
            </div>
          ))}
        </div>
      </div>
      <footer className="app-footer">
        <p>&copy; 2024 ELSER Search Application</p>
      </footer>
    </div>
  );
}

export default SearchComponent;
