import React, { useState } from "react";
import { useContext } from "react";
import userContext from "../userContext";


/** Form for logging in
 *
 *  Props:
 *  - handleSave
 *  - user
 *
 *  State:
 *  - formData
 *
 *  { Hompage } -> ProfileForm
 *
 */
function ProfileForm({ handleSave, user }) {
  const { currUser } = useContext(userContext);
  const [formData, setFormData] = useState(currUser);


  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value
    }));

  }

  /** Call parent function and clear form */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSave(formData);
    setFormData({});
  }

  return (
    <form className="ProfileForm" onSubmit={handleSubmit}>
      <div>
        <input
          id="Username"
          name="username"
          className="form-control"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
          aria-label="Username"
          disabled
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
      <button className="btn-primary btn btn-sm LoginBtn">
        Update!
      </button>
    </form>
  );
}

export default ProfileForm;