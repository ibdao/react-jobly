import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import SearchForm from "../SearchForm";
import JobCardList from "./JobCardList";
import { debounce } from "lodash";

/** Shows a list of all the jobs
 *
 * Props:
 *  - none
 *
 * State:
 * - jobs: [{id, title, companyHandle, companyName, salary, equity}... ]
 * - isLoading: boolean
 * - searchTerm: "term"
 *
 * Effects:
 *  - axios call to Jobly API
 *
 * {JoblyApp, Navigation} -> JobList -> {JobCardList, SearchForm}
 */

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  /** Calls JoblyApi to get all jobs or search criteria */
  useEffect(
    function fetchJobsWhenMountedOrSearch() {
      async function fetchJobs() {
        const apiJobs = await JoblyApi.getAllOrFilteredJobs(searchTerm);
        setJobs(apiJobs);
        setIsLoading(false);
      }
      fetchJobs();
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
    <div className="JobList col-sm-6 mx-auto">
      <h1>Job List</h1>
      {<SearchForm search={debouncedSearch} />}
      <div>
        {jobs.length > 0
          ? <JobCardList jobs={jobs} />
          : <h4>No Jobs Match for: {searchTerm}</h4>}
      </div>
    </div>
  );
}

export default JobList;
