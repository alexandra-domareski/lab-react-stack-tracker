import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import companiesData from "./companies.json";
import technologiesData from "./technologies.json";
import HomePage from "../src/pages/HomePage";
import CompanyPage from "../src/pages/CompanyPage";
import TechnologiesPage from "../src/pages/TechnologyPage";
import Navbar from "../src/components/Navbar";

function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState(technologiesData);

  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage companies={companies} />} />
          <Route
            path="/company/:companySlug"
            element={<CompanyPage companies={companies} />}
          />
          <Route
            path="/tech/:slug"
            element={<TechnologiesPage technologies={technologies} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
