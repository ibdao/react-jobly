import React from "react";
import "./JobCard.css";

/** Shows a job card
 *
 *  Prop:
 *  - job: {id, title, companyName, companyHandle, salary, equity}
 *
 *  States:
 *  - none
 *
 *  JobCardList -> JobCard
 */

function JobCard({ job }) {
  return (
    <div key={job.id} className="JobCard ">
        <h3>{job.title}</h3>
        <h5>{job.companyName}</h5>
        <p>Salary: {job.salary}</p>
        <p>Equity: {job.equity}</p>
    </div>
  );
}

export default JobCard;