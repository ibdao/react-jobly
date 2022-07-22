import React, { useState } from "react";
import "./SignUpForm.css";


const DEFAULT_DATA = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

/** Form for sign-up
 * takes to logged in homepage if succesful
 *  Displays error message if sign-up fails
 *
 *  Props:
 *  - signup is a function from JoblyApp
 *
 *  State:
 *  - formData
 *  - errorMessage
 *
 *  { JoblyApp, Navigation } -> SignUpForm
 *
 */


function SignUpForm({ signup }) {
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [errorMessages, setErrorMessages] = useState(null);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value
    }));

  }

  /** Call JoblyApp signup function or
   * updateErrorMessage state */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signup(formData);
    } catch (err) {
      setErrorMessages(err);
    }
  }

  return (
    <form className="SignUpForm col-md-6 offset-md-3 col-lg-4 offset-lg-4" 
      onSubmit={handleSubmit}>
      <div className="mb-2 col-md-7">
        <input
          id="Username"
          name="username"
          className="form-control"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
          aria-label="Username"
        />
      </div>
      <div className="mb-2 col-md-7">
        <input
          id="Password"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          aria-label="Password"
          type="password"
        />
      </div>
      <div className="mb-2 col-md-7">
        <input
          id="Firstname"
          name="firstName"
          className="form-control"
          placeholder="Firstname"
          onChange={handleChange}
          value={formData.firstName}
          aria-label="Firstname"
        />
      </div>
      <div className="mb-2 col-md-7">
        <input
          id="Lastname"
          name="lastName"
          className="form-control"
          placeholder="Lastname"
          onChange={handleChange}
          value={formData.lastName}
          aria-label="Lastname"
        />
      </div>
      <div className="mb-2 col-md-7">
        <input
          id="Email"
          name="email"
          className="form-control"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          aria-label="Email"
        />
      </div>
      {errorMessages !== null &&
        <div className="alert"><p>{errorMessages}</p></div>}
      <button className="btn-primary btn btn-md LoginBtn">
        Sign Up!
      </button>
    </form>
  );
}

export default SignUpForm;