import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import SearchForm from "../SearchForm";
import JobCardList from "./JobCardList";

/** Shows a list of all the jobs
 *
 * Props:
 *  - none
 *
 * State:
 * - jobs: [{id, title, companyHandle, companyName, salary, equity}... ]
 * - isLoading: boolean
 * - searchData: "searchTerm"
 * 
 * Effects: 
 *  - axios call to Jobly API
 *
 * {JoblyApp, Navigation} -> JobList -> {JobCardList, SearchForm}
 */

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState(undefined);

  /** Calls JoblyApi to get all jobs or search criteria */
  useEffect(
    function fetchJobsWhenMounted() {
      async function fetchJobs() {
        const response = await JoblyApi.getAllOrFilteredJobs(searchData);
        console.log(response);
        setJobs(response);
        setIsLoading(false);
      }
      fetchJobs();
    },
    [searchData]
  );

  /** Sets the search criteria for API call
   *  Takes a search term form the form.
   */
  function search(searchTerm) {
    setSearchData(searchTerm);
  }

  // If search field is empty, return all jobs
  if (searchData === "") {
    setSearchData(undefined);
  }

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="JobList">
      <h1>JobList</h1>
      {<SearchForm handleSearch={search} />}
      <div>
        <JobCardList jobs={jobs} />
      </div>
    </div>
  );
}

export default JobList;
