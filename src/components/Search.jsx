import React from "react";

const Search = ({ setFilter }) => {
  return (
    <div
      className="bg-white text-black p-4 max-w-96 w-full flex items-center gap-6 rounded-md dark:bg-dark dark:text-light"
      style={{
        boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <i className="fa-solid fa-magnifying-glass text-gray-500 dark:text-light"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        className="flex-1 border-none outline-none  placeholder:text-gray-400 text-sm dark:placeholder:text-light "
        onChange={(e) => setFilter(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default Search;
