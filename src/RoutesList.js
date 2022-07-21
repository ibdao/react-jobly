import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CompanyList from "./Company/CompanyList";
import CompanyDetail from "./Company/CompanyDetail";
import JobList from "./Job/JobList";
import Homepage from "./Homepage";
import LoginForm from "./User/LoginForm";
import SignUpForm from "./User/SignUpForm";
import ProfileForm from "./User/ProfileForm";
import userContext from "./userContext";

/** Creates endpoints for routes */

function RoutesList({ login, signup }) {
  const { currUser } = useContext(userContext);
  return (
    <div>
      {currUser === null ? (
        <Routes>
          <Route element={<LoginForm login={login} />} path="/login" />
          <Route element={<SignUpForm signup={signup} />} path="/signup" />
          <Route element={<Homepage />} path="/" />
          <Route element={<Navigate to="/" />} path="*" />
        </Routes>
      ) : (
        <Routes>
          <Route element={<ProfileForm />} path="/profile" />
          <Route element={<CompanyList />} path="/companies" />
          <Route element={<CompanyDetail />} path="/companies/:handle" />
          <Route element={<JobList />} path="/jobs" />
          <Route element={<Homepage />} path="/" />
          <Route element={<Navigate to="/" />} path="*" />
        </Routes>
      )}
    </div>
  );
}

export default RoutesList;
