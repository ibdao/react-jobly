import React, { useState } from "react";

/** Form for logging in
 *
 *  Props:
 *  - handleSave
 *
 *  State:
 *  - formData
 *
 *  { Hompage } -> SignUpForm
 *
 */
 function SignUpForm({handleSave}) {
    const [formData, setFormData] = useState({});

    /** Update form input. */
    function handleChange(evt){
        const input = evt.target;
        setFormData(formData => ({
            ...formData,
            [input.name] : input.value
        }))

    }

    /** Call parent function and clear form */
    function handleSubmit(evt){
        evt.preventDefault();
        handleSave(formData);
        setFormData({});
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
          name="firstname"
          className="form-control"
          placeholder="Firstname"
          onChange={handleChange}
          value={formData.firstname}
          aria-label="Firstname"
        />
      </div>
      <div>
        <input
          id="Lastname"
          name="lastname"
          className="form-control"
          placeholder="Lastname"
          onChange={handleChange}
          value={formData.lastname}
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
      <button className="btn-primary btn btn-sm LoginBtn">
        Sign Up!
      </button>
    </form>
  );
}

export default SignUpForm;