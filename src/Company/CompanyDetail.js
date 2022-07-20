import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import { useParams } from "react-router-dom";
/**shows information about a single companies and it current job opening
 *
 * props:
 *
 * state:
 *
 */
function CompanyDetail() {
  const [company, setCompany] = useState({});
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(function fetchCompanyWhenMounted() {
    async function fetchCompany() {
      const response = await JoblyApi.getCompany(params.handle);
      console.log(response); //TODO: remove console log when done with it
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
      {/*company.jobs.map(job => <JobCard job={job} />) */}
      <ul>
        {company.jobs.map(job => <li>{job.title}</li>)}
      </ul>

    </div>
  );
}

export default CompanyDetail;