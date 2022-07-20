import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import CompanyCard from "./CompanyCard";

const company = {
  handle: "spacex",
  name: "SpaceX",
  description: "Designs, manufactures and launces advanced rockets and space craft",
  logoUrl: "rocket.com",
  numEmployees: 5000,
  jobs: []
};


describe("Company Card Test", function () {
  it("renders without crashing", function () {
    render(
      <MemoryRouter>
        <CompanyCard company={company} />
      </MemoryRouter>);
  });

  it("contains correct fields", function () {
    const { container, debug } = render(<MemoryRouter>
      <CompanyCard company={company} />
    </MemoryRouter>);
    debug(container);

    expect(container.querySelector(".CompanyCard")).toBeInTheDocument();
  });
});
