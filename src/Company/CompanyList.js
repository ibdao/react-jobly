import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api";
import "./CompanyList.css";
import SearchForm from "../SearchForm";

/** Returns a list of all the companies
 * 
 * Props:
 * - none
 *
 * State: 
 *  - companies: [{name, handle, description, [jobs], numEmployees, logoUrl}, ...]
 *  - isLoading: boolean
 *  - searchData: "searchTerm"
 * 
 * Effects: 
 *  - axios call
 *
 * {joblyApp, Navigation} -> CompaniesList -> CompanyCard
 */

function CompaniesList() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState(undefined);

  /** Calls JoblyApi to get all companies or search criteria */
  useEffect(
    function fetchCompaniesWhenMounted() {
      async function fetchCompanies() {
        const response = await JoblyApi.getAllOrFilteredCompanies(searchData);
        console.log(response);
        setCompanies(response);
        setIsLoading(false);
      }
      fetchCompanies();
    },
    [searchData]
  );

  /** Sets the search criteria for API call
   *  Takes a search term form the form.
   */
  function search(searchTerm) {
    setSearchData(searchTerm);
  }

  // If search field is empty, return all companies
  if (searchData === "") {
    setSearchData(undefined);
  }

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="CompanyList">
      <h1>CompaniesList</h1>
      {<SearchForm handleSearch={search} />}
      <div>
        {companies.map((company) => (
          <CompanyCard company={company} key={company.handle} />
        ))}
      </div>
    </div>
  );
}

export default CompaniesList;
