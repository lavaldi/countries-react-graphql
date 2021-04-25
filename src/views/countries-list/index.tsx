import { useState } from "react";
import Filters from "./components/filters";
import List from "./components/list";
import SearchInput from "./components/search-input";

const CountriesList = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currencyQuery, setCurrencyQuery] = useState<string>("");
  const [languageQuery, setLanguageQuery] = useState<string>("");
  const [regionQuery, setRegionQuery] = useState<string>("");

  return (
    <>
      <h1 className="text-4xl">List of Countries</h1>
      <SearchInput
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <Filters
        setCurrencyQuery={setCurrencyQuery}
        setLanguageQuery={setLanguageQuery}
        setRegionQuery={setRegionQuery}
      />
      <List
        searchQuery={searchQuery}
        currencyQuery={currencyQuery}
        languageQuery={languageQuery}
        regionQuery={regionQuery}
      />
    </>
  );
};

export default CountriesList;
