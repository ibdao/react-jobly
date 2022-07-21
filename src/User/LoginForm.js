import React, { useState } from "react";

/** Form for logging in
 *
 *  Props:
 *  - handleSave
 *
 *  State:
 *  - formData
 *
 *  { Hompage } -> LoginForm
 *
 */
function LoginForm({handleSave}) {
    const [formData, setFormData] = useState({});

    /** Update form input. */
    function handleChange(evt){
        const input = evt.target;
        setFormData(formData => ({
            ...formData,
            [input.name] : input.value
        }))

    }

    /** Call parent function */
    function handleSubmit(evt){
        evt.preventDefault();
        handleSave(formData);
    }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <div>
        <input
          id="Username"
          name="Username"
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
          name="Password"
          className="form-control"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          aria-label="Password"
          type="password"
        />
      </div>
      <button className="btn-primary btn btn-sm LoginBtn">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
