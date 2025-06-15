import React, { useState } from "react";
import SearchFilterContainer from "./SearchFilterContainer";
import CountryList from "./CountryList";


const Home = () => {
  const[filter,setFilter]=useState('')
  const [region,setRegion]=useState('All')
  return (
    <>
      <SearchFilterContainer setFilter={setFilter} setRegion={setRegion}/>
      <CountryList filter={filter} region={region}/>
    </>
  );
};

export default Home;
