import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import DetailComponent from "./DetailComponent"; // New component for details
import NavBar from "./NavBar"; // Import the NavBar component
import "./App.css"; // Add your main CSS file for styling

function App() {
  return (
    <Router>
      <NavBar /> {/* Add the NavBar here */}
      <Routes>
        <Route path="/" element={<SearchComponent />} />
        <Route path="/details/:id" element={<DetailComponent />} />{" "}
        {/* Detail route */}
      </Routes>
    </Router>
  );
}

export default App;
