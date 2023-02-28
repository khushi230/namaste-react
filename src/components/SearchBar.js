import React from "react";

const inputChangeHandler = (e) => {
  console.log(e.target.value);
};

const SearchBar = () => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="search"
      value=""
      onChange={inputChangeHandler}
    />
    <button>Search</button>
  </div>
);

export default SearchBar;
