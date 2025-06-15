import React, { useEffect, useMemo, useState } from "react";
import CountryCard from "./CountryCard";
import CardSkeleton from "./CardSkeleton";

const CountryList = ({ filter, region }) => {
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const url =
          region === "All"
            ? "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,subregion,borders,tld,currencies,languages"
            : `https://restcountries.com/v3.1/region/${region}?fields=name,flags,capital,region,population,subregion,borders,tld,currencies,languages`;

        const response = await fetch(url);
        const data = await response.json();
        setCountryData(data);
      } catch (error) {
        console.error(error);

        if (error.message.includes("Failed to fetch")) {
          setError("Network error! Please check your internet connection.");
        } else if (error.message.includes("Country not found")) {
          setError("Country not found. Please enter a valid country name.");
        } else {
          setError("Something went wrong. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, [region]);

  const filteredCountries = useMemo(() => {
    if (!Array.isArray(countryData)) return [];

    return countryData.filter((country) =>
      country.name.common.toLowerCase().includes(filter)
    );
  }, [filter, countryData]);

  if (error) {
  return (
    <div className="min-h-[calc(100vh-212px)] dark:bg-dark dark:text-light">
      <div className="max-w-[1200px] mx-auto p-6 text-center">
        <p className="text-red-500 text-xl mb-4">{error}</p>
      </div>
    </div>
  );
}


  return (
    <div className="min-h-screen dark:bg-dark dark:text-light">
      <div className="max-w-[1200px] mx-auto p-6 justify-center sm:justify-between  py-12 grid grid-cols-[repeat(auto-fit,minmax(260px,auto))] gap-8">
        {isLoading || !Array.isArray(countryData)
          ? Array.from({ length: 24 }).map((_, i) => <CardSkeleton key={i} />)
          : filteredCountries.map((country) => (
              <CountryCard
                key={country.name.official}
                name={country.name.common}
                population={country.population}
                flag={country.flags.svg}
                region={country.region}
                capital={country.capital}
                selectedCountry={country}
              />
            ))}
      </div>
    </div>
  );
};

export default CountryList;
