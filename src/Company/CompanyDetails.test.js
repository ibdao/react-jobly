import React from "react";
import { render } from "@testing-library/react";
import CompanyDetail from "./CompanyDetail";

const JOB = {
  id: 1,
  title: "Developer",
  companyName: "SpaceX",
  companyHandle: "spacex",
  salary: 123000,
  equity: "0.0222"
};

const COMPANY = {
  handle: "spacex",
  name: "SpaceX",
  description: "Designs, manufactures and launces advanced rockets and space craft",
  logoUrl: "rocket.com",
  numEmployees: 5000,
  jobs: [JOB]
};


describe("Company Details Test", function () {
  it("renders without crashing", function () {
    render(<CompanyDetail />);
  });

  it("contains correct fields", function () {
    const { container, debug } = render(<CompanyDetail />);
    debug(container);

    expect(container.querySelector(".CompanyDetails")).toBeInTheDocument();
    expect(container.querySelector(".JobCardList")).toBeInTheDocument();
    expect(container.querySelector(".JobCard")).toBeInTheDocument();
  });
});
