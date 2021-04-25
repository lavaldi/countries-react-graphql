import Filters from "./components/filters";
import List from "./components/list";
import SearchInput from "./components/search-input";

const CountriesList = () => {
  return (
    <>
      <h1 className="text-4xl">List of Countries</h1>
      <SearchInput />
      <Filters />
      <List />
    </>
  );
};

export default CountriesList;
