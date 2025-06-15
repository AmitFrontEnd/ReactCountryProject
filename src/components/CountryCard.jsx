import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({
  name,
  population,
  region,
  capital,
  flag,
  selectedCountry,
}) => {
  return (
    <Link
      to={name}
      state={{ selectedCountry }}
      className="w-full h-[370px] overflow-hidden rounded-md cursor-pointer transition-transform duration-300 ease-in-out sm:hover:scale-105"
      style={{
        boxShadow:
          " rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
      }}
    >
      <img src={flag} className="w-full h-[190px] object-cover" loading="lazy"/>
      <div className="px-4 mt-4 ">
        <h2 className="font-bold mb-4">{name}</h2>
        <p className="font-medium">
          Population :{" "}
          <span className="font-normal text-gray-700 dark:text-gray-300">
            {""}
            {population.toLocaleString("en-IN")}
          </span>
        </p>
        <p className="font-medium">
          Region :{" "}
          <span className="font-normal text-gray-700 dark:text-gray-300">
            {region}
          </span>
        </p>
        <p className="font-medium">
          Capital : &nbsp;
          <span className="font-normal text-gray-700 dark:text-gray-300">
            {capital && capital.length > 0
              ? capital.join(", ")
              : "Not Available"}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
