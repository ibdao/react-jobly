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
    <div key={job.id} className="JobCard">
        <h4>{job.title}</h4>
        <h6>{job.companyName}</h6>
        <p>Salary: {job.salary}</p>
        <p>Equity: {job.equity}</p>
    </div>
  );
}

export default JobCard;