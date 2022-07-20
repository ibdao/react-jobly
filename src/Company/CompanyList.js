import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api";
import "./CompanyList.css";
import SearchForm from "../SearchForm";

/** returns a list of all the companies
 *
 * state: companies [{company ...}, ...]
 * effects: axios call
 *
 * {joblyApp, Navigation} -> CompaniesList -> CompanyCard
 */

function CompaniesList() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState(undefined)

  function search(searchTerm){
    setFormData(searchTerm)
  }

  if(formData === "") {setFormData(null)}

  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
      const response = await JoblyApi.getAllOrFilteredCompanies(formData);
      console.log(response);
      setCompanies(response);
      setIsLoading(false);
    }
    fetchCompanies();
  }, [formData]);

  if (isLoading) return (<h1>Loading...</h1>);

  return (
    <div className="CompanyList">
      <h1>CompaniesList</h1>
      {<SearchForm handleSearch={search} /> }
      <div>
        {companies.map((company) => (
          <CompanyCard company={company} />
        ))}
      </div>
    </div>
  );
}

export default CompaniesList;
