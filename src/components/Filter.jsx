import React, { useState } from "react";

const Filter = ({ defaultOption, options ,setRegion}) => {
  const [showFilter, setFilter] = useState(false);
  const[clickedOption,setClickedOption]=useState(defaultOption)
  return (
    <div
      className="w-full p-4 max-w-2xs flex items-center pl-6 pr-6 rounded-sm cursor-pointer relative"
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
      onClick={() => setFilter(!showFilter)}
    >
      {clickedOption}

      <i
        className={`fa-solid fa-angle-down ml-auto transition  ${
          showFilter ? "rotate-180" : ""
        }`}
      ></i>
      <div
        className={`absolute dark:bg-dark dark:text-light left-0 top-15 w-full z-10 bg-white max-w-2xs items-center px-6 py-3 rounded-sm cursor-pointer ${
          showFilter ? "" : "hidden"
        }`}
        style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
      >
        <ul className="list-none space-y-2">
          {options.map((option, i) => (
            <li key={i} onClick={()=>{
              setRegion(option)
              setClickedOption(option)
            }}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
