import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import CompanyList from "./Company/CompanyList"
import CompanyDetail from "./Company/CompanyDetail"
import JobList from "./Job/JobList"
import Homepage from "./Homepage"

/** Creates endpoints for routes */

function RoutesList() {
  return (
    <Routes>
      <Route element={<CompanyList />} path="/companies" />
      <Route element={<CompanyDetail />} path="/companies/:handle"/>
      <Route element={<JobList/>} path="/jobs" />
      <Route element={<Homepage/>} path="/"/>
      <Route element={<Navigate to="/"/>} path="*"/>
    </Routes>
  );
}

export default RoutesList;
