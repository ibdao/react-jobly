import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import { useParams } from "react-router-dom";
import JobCardList from "../Job/JobCardList";

/** shows information about a single companies and it current job opening
 *
 * Props:
 *  - none
 *
 * State:
 *  - company : {name, handle, description, [jobs], numEmployees, logoUrl}
 *  - isLoading : boolean
 * 
 *  CompanyList -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  /** Calls JoblyApi to get company by handle */
  useEffect(function fetchCompanyWhenMounted() {
    async function fetchCompany() {
      const response = await JoblyApi.getCompany(params.handle);
      setCompany(response);
      setIsLoading(false);
    }
    fetchCompany();
  }, [params.handle]);

  if (isLoading) return (<h1>Loading...</h1>);

  return (
    <div className="CompanyDetails">
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <div className="JobCardList">
        { <JobCardList jobs={company.jobs} /> } 
      </div>
    </div>
  );
}

export default CompanyDetail;