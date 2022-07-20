import React from "react";
import JobCard from "./JobCard";

/** Shows a list of job cards 
 * 
 *  Props:
 *  - jobs : [{id, title, companyName, companyHandle, equity, salary}...]
 * 
 *  State: 
 *  - none
 *  
 *  {CompanyDetail, JobList} -> JobCardList -> JobCard
*/

function JobCardList({jobs}){
    return (
        <div className="JobCardList">
        { jobs.map((job) => (
          <JobCard job={ job } key={ job.id } />
        ))}
      </div>
    )
}

export default JobCardList;