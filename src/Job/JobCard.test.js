import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";

const JOB = {
  id: 1,
  title: "Developer",
  companyName: "Republic",
  companyHandle: "republic",
  salary: 123000,
  equity: "0.0222"
};


describe("JobCard Test", function () {
  it("renders without crashing", function () {
    render(<JobCard job={JOB} />);
  });

  it("contains correct fields", function () {
    const { container, debug } = render(<JobCard job={JOB} />);
    debug(container);

    expect(container.querySelector(".JobCard")).toBeInTheDocument();
  });
});
