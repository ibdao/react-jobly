import React, { useState } from "react";


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
 *  - errorMessage
 *
 *  { JoblyApp, Navigation } -> LoginForm
 *
 */
function LoginForm({ login }) {
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [errorMessage, setErrorMessage] = useState(null);

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
      setErrorMessage(err);
    }
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <div>
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
      <div>
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
      {errorMessage !== null &&
        <div><p>{errorMessage}</p></div>}
      <button className="btn-primary btn btn-sm LoginBtn">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
