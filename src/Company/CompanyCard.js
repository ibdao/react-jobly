import React from "react";
import "./CompanyCard.css";
import { Link } from "react-router-dom";

/** Shows a company card
 *
 *  Prop:
 *  - company: {handle, name, description, logoUrl, numEmployees, jobs}
 *
 *  States:
 *  - none
 *
 *  CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  return (
    <Link className="CompanyCard" to={`/companies/${company.handle}`}>
      <div key={company.handle} >
        <h4>
          {company.name}{" "}
          {company.logoUrl && (
            <img src={company.logoUrl} alt={company.name}></img>
          )}
        </h4>
        <p>{company.description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;
