import React, { useState } from "react";
import { useContext } from "react";
import userContext from "../userContext";
import "./ProfileForm.css"


/** Form for logging in
 *
 *  Props:
 *  - update
 *
 *  State:
 *  - formData
 *  - messages
 *
 *  { Homepage } -> ProfileForm
 *
 */
function ProfileForm({ update }) {
  const { currUser } = useContext(userContext);
  const [formData, setFormData] = useState(currUser);
  const [messages, setMessages] = useState(null);


  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value
    }));

  }

  /** Call joblyApp update function
   *
   * setMessage to successful or error
   */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await update(formData);
      setMessages({msg:"Profile Updated Successfully", color:"green"});
    } catch (err) {
      setMessages({msg: err[0], color: 'red'});
    }
  }

  return (
    <form className="ProfileForm col-md-6 offset-md-3 col-lg-4 offset-lg-4" 
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
          disabled
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
      {messages !== null &&
        <div>
          <p style={{color:`${messages.color}`, textShadow: "-1px 1px 3px #ffffff" }}>
            <b>{messages.msg}</b>
            </p>
        </div>}
      <button className="btn-primary btn btn-md">
        Update!
      </button>
    </form>
  );
}

export default ProfileForm;