import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CompanyList from "./Company/CompanyList";
import CompanyDetail from "./Company/CompanyDetail";
import JobList from "./Job/JobList";
import Homepage from "./Homepage";
import LoginForm from "./User/LoginForm";
import SignUpForm from "./User/SignUpForm";
import ProfileForm from "./User/ProfileForm";

/** Creates endpoints for routes */

function RoutesList() {
  return (
    <Routes>
      {isLoggedIn
        ? (<div>
          <Route element={<LoginForm />} path="/login" />
          <Route element={<SignUpForm />} path="/signup" />
        </div>)
        : (<div>
          <Route element={<ProfileForm />} path="/profile" />
          <Route element={<CompanyList />} path="/companies" />
          <Route element={<CompanyDetail />} path="/companies/:handle" />
          <Route element={<JobList />} path="/jobs" />
        </div>)}
      <Route element={<Homepage />} path="/" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RoutesList;
