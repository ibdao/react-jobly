import React, { useState } from "react";


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
  const [errorMessage, setErrorMessage] = useState(null);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value
    }));

  }

  /** Call JoblyApp function*/
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signup(formData);
    } catch (err) {
      setErrorMessage(err);
    }
  }

  return (
    <form className="SignUpForm" onSubmit={handleSubmit}>
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
      <div>
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
      <div>
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
      <div>
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
      {errorMessage !== null &&
        <div><p>{errorMessage}</p></div>}
      <button className="btn-primary btn btn-sm LoginBtn">
        Sign Up!
      </button>
    </form>
  );
}

export default SignUpForm;