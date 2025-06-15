
import Search from "./Search";
import Filter from "./Filter";

const SearchFilterContainer = ({setFilter,setRegion}) => {
  return (
    <div className="dark:bg-dark dark:text-light">
      <div className="flex flex-col sm:flex-row justify-between max-w-[1200px] mx-auto pt-16 pb-4 px-6 gap-4">
        <Search setFilter={setFilter}/>
        <Filter
          defaultOption={" Filter by Region"}
          options={['All',"Africa", "America", "Asia", "Europe", "Oceania"]}
          setRegion={setRegion}
        />
      </div>
    </div>
  );
};

export default SearchFilterContainer;
