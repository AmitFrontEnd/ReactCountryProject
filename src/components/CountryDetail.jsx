import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import CountryDetailShimmer from "./CountryDetailShimmer";

const CountryDetail = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [error, setError] = useState(null);

  const [borderNames, setBorderNames] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { country } = useParams();

  useEffect(() => {
    if (!location.state?.selectedCountry) {
      const fetchCountries = async () => {
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/name/${country}?fullText=true&fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`
          );

          if (!response.ok)
            throw new Error("Country not found, Please Enter a Valid Country");
          const [data] = await response.json();
          setSelectedCountry(data);
        } catch (error) {
          console.error(error);

          if (error.message.includes("Failed to fetch")) {
            setError("Network error! Please check your internet connection.");
          } else if (error.message.includes("Country not found")) {
            setError("Country not found. Please enter a valid country name.");
          } else {
            setError("Something went wrong. Please try again later.");
          }
        }
      };

      fetchCountries();
    } else {
      setSelectedCountry(location.state.selectedCountry);
    }
  }, [country]);

  useEffect(() => {
    const fetchBorderCountries = async () => {
  if (selectedCountry?.borders?.length) {
    try {
      const codes = selectedCountry.borders.join(",");
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name`
      );
      const data = await response.json();
      const names = data.map((country) => country.name.common);
      setBorderNames(names);
    } catch (error) {
        // intentionally ignored
    }
  }
};

    fetchBorderCountries();
  }, [selectedCountry]);

  if (error) {
    return (
  <div className="min-h-[calc(100vh-76px)] dark:bg-dark dark:text-light">
        <div className="max-w-[1200px] mx-auto p-6 text-center">
          <p className="text-red-500 text-xl mb-4">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="shadow-cyan-500 gap-3 p-2 px-5 pr-10 rounded-sm cursor-pointer flex items-center justify-center"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <i className="fa-solid fa-arrow-left"></i> Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!selectedCountry) {
    return <CountryDetailShimmer />;
  }

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital = [],
    tld = [],
    currencies = {},
    languages = {},
    borders = [],
  } = selectedCountry;

  const nativeNames = Object.values(name.nativeName || {});
  const nativeName = nativeNames.length
    ? `${nativeNames[0].official} (${nativeNames[0].common})`
    : "N/A";

  const capitalString = capital.join(", ") || "N/A";
  const currencyName = Object.values(currencies)[0]?.name || "N/A";
  const languageList = Object.values(languages).join(", ") || "N/A";
  const borderCountries = borders.length ? borders : null;

  return (
    <div className="dark:bg-dark dark:text-light min-h-[calc(100vh-76px)]">
      <div className="max-w-[1200px] mx-auto p-6  ">
        <button
          onClick={() => navigate(-1)}
          className="shadow-cyan-500 gap-3 p-2 px-5 pr-10  rounded-sm cursor-pointer flex items-center justify-center"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
        <div className="flex flex-col lg:flex-row lg:items-center pt-16 pb-1 lg:gap-12 min-[1040px]:gap-20 w-full">
          <div className="w-full sm:max-w-[450px] h-60 min-w-[320px]">
            <img src={flags.svg} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-1 lg:ml-16">
            <p className="font-bold text-3xl mb-8 pt-6 lg:pt-0">{name.common}</p>
            <p className="font-medium">
              Native Name:{" "}
              <span className="text-gray-700 font-normal dark:text-gray-200">{nativeName}</span>
            </p>
            <p className="font-medium">
              Population:{" "}
              <span className="text-gray-700 font-normal dark:text-gray-300">
                {population.toLocaleString("en-IN")}
              </span>
            </p>
            <p className="font-medium">
              Region: <span className="text-gray-700 font-normal dark:text-gray-300">{region}</span>
            </p>
            <p className="font-medium">
              Sub Region:{" "}
              <span className="text-gray-700 font-normal dark:text-gray-300">{subregion?subregion:'N/A'}</span>
            </p>
            <p className="font-medium">
              Capital:{" "}
              <span className="text-gray-700 font-normal dark:text-gray-300">{capitalString}</span>
            </p>
          </div>
          <div className="lg:ml-auto pr-8 space-y-1">
            <p className="font-medium">
              Top Level Domain:{" "}
              <span className="text-gray-700 font-normal dark:text-gray-300">{tld.join(", ")}</span>
            </p>
            <p className="font-medium">
              Currencies:{" "}
              <span className="text-gray-700 font-normal dark:text-gray-300">{currencyName}</span>
            </p>
            <p className="font-medium">
              Languages:{" "}
              <span className="text-gray-700 font-normal dark:text-gray-300">{languageList}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap lg:ml-[550px] mt-6 dark:bg-dark dark:text-light">
          <p className="font-medium mr-2">Border Countries:</p>
          {borderCountries ? (
            borderNames.map((border) => (
              <Link
                to={`/${encodeURIComponent(border)}`}
          key={border}
                className="shadow-cyan-500 gap-3 p-2 px-5 pr-10 rounded-sm cursor-pointer"
                style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
              >
                {border}
              </Link>
            ))
          ) : (
            <span className="text-gray-700 font-normal dark:text-gray-200">None</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
