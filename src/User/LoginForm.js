import React, { useState } from "react";
import "./LoginForm.css"


const DEFAULT_DATA = {
  username: "",
  password: "",
};

/** Form for logging in
 *  takes to logged in homepage if succesful
 *  Displays error message if login fails
 *
 *  Props:
 *  - login function from JoblyApp
 *
 *  State:
 *  - formData
 *  - errorMessages
 *
 *  { JoblyApp, Navigation } -> LoginForm
 *
 */
function LoginForm({ login }) {
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

   /** Call JoblyApp login function or
   * updateErrorMessage state */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
    } catch (err) {
      setErrorMessages(err);
    }
  }

  return (
    <form className="LoginForm col-md-6 offset-md-3 col-lg-4 offset-lg-4" 
      onSubmit={handleSubmit}>
      <div className="mb-3">
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
      <div className="mb-3">
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
      {errorMessages !== null &&
        <div className="alert"><p>{errorMessages}</p></div>}
      <button className="btn-primary btn btn-md LoginBtn">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
