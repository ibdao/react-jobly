import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";

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
