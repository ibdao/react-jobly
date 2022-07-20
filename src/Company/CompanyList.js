import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api";
import "./CompanyList.css"

/** returns a list of all the companies
 *
 * state: companies [{company ...}, ...]
 * effects: axios call
 *
 * {joblyApp, Navigation} -> CompaniesList -> CompanyCard
 */

function CompaniesList() {
  const [companies, setCompanies] = useState([]);

  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
      const response = await JoblyApi.getAllOrFilteredCompanies();
      console.log(response);
      setCompanies(response);
    }
    fetchCompanies();
  }, []);
  return (
    <div className="CompanyList">
      <h1>CompaniesList</h1>
      {/* <SearchForm /> */}
      <div>
        {companies.map((company) => (
          <CompanyCard company={company} />
        ))}
      </div>
    </div>
  );
}

export default CompaniesList;
