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

  // /**live search feature Call parent function*/
  // const debouncedSearch = debounce(async (searchTerm) => {
  //   setTerm(await handleSearch(searchTerm));
  // }, 1000);

  //console.log(term)
  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setTerm(input.value);
    search(input.value);
  }

  return (
    <form className="SearchForm" >
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
