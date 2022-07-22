import React, { useState } from "react";

/** Form for searching
 *
 * Props:
 * - search: function to call in parent.
 *
 * State:
 * - formData
 *
 * { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ search }) {
  const [term, setTerm] = useState("");

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setTerm(input.value);
    search(input.value);
  }

  return (
    <form className="SearchForm col-md-8 offset-md-2" >
      <div className="mb-3">
        <input
          id="Search"
          name="Search"
          className="form-control"
          placeholder="Search"
          onChange={handleChange}
          value={term}
          aria-label="Search"
        />
      </div>
    </form >
  );
}

export default SearchForm;
