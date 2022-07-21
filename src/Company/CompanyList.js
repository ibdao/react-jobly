import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api";
import "./CompanyList.css";
import SearchForm from "../SearchForm";
import { debounce } from "lodash";

/** Returns a list of all the companies
 *
 * Props:
 * - none
 *
 * State:
 *  - companies: [{name, handle, description, [jobs], numEmployees, logoUrl}, ...]
 *  - isLoading: boolean
 *  - searchTerm: "searchTerm"
 *
 * Effects:
 *  - axios call
 *
 * {joblyApp, Navigation} -> CompaniesList -> CompanyCard
 */

function CompaniesList() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  /** Calls JoblyApi to get all companies or search criteria */
  useEffect(
    function fetchCompaniesWhenMountedorSearch() {
      async function fetchCompanies() {
        const apiCompanies = await JoblyApi.getAllOrFilteredCompanies(searchTerm);
        console.log(apiCompanies);
        setCompanies(apiCompanies);
        setIsLoading(false);
      }
      fetchCompanies();
    },
    [searchTerm]
  );

  /**live search feature
   * Sets the search criteria for API call
   *  Takes a search term fromm the form*/
  const debouncedSearch = debounce(searchTerm => {
    setSearchTerm(searchTerm);
  }, 500);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="CompanyList">
      <h1>Company List</h1>
      {<SearchForm search={debouncedSearch} />}
      <div>
        {companies.length > 0
          ? companies.map((company) => (
            <CompanyCard company={company} key={company.handle} />
          ))
          : <h4>No Companies Match for: {searchTerm}</h4>}
      </div>
    </div>
  );
}

export default CompaniesList;
