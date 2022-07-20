import React, { useState } from "react";

/** Form for searching
 *
 * Props:
 * - handleSearch: function to call in parent.
 *
 * { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ handleSearch }) {
  const [formData, setFormData] = useState(undefined);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(input.value);
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData);
    //setFormData("");
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>

      <div className="mb-3">
        <input
          id="Search"
          name="Search"
          className="form-control"
          placeholder="Search"
          onChange={handleChange}
          value={formData}
          aria-label="Search"
        />
      </div>
      <button className="btn-primary btn btn-sm SearchForm-addBtn">
        Search
      </button>
      </form >
  );
}

export default SearchForm;
