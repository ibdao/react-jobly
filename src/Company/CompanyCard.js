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
    <div key={company.handle}>
      <Link className="CompanyCard" to={`/companies/${company.handle}`}>
        <h5 >
          <div className="CompanyCard-Title">{company.name}</div>{" "}
          {company.logoUrl && (
            <img src={company.logoUrl} alt={company.name} className="CompanyCard-Image"></img>
          )}
        </h5>
        <p className="CompanyCard-Description">{company.description}</p>
      </Link>
    </div>
  );
}

export default CompanyCard;
