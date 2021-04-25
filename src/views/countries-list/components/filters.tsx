import { useQuery } from "@apollo/client";
import Select from "../../../components/select";
import { CurrenciesLanguagesAndRegions } from "../../../queries/__generated__/currenciesLanguagesAndRegions";
import { CURRENCIES_LANGUAGES_AND_REGIONS } from "../../../queries/selects";

type FiltersProps = {
  setCurrencyQuery(currency: string): void;
  setLanguageQuery(language: string): void;
  setRegionQuery(region: string): void;
};

const Filters = ({
  setCurrencyQuery,
  setLanguageQuery,
  setRegionQuery,
}: FiltersProps) => {
  const { data, loading, error } = useQuery<CurrenciesLanguagesAndRegions>(
    CURRENCIES_LANGUAGES_AND_REGIONS
  );

  if (error) return <div>Something went wrong, we cannot load the filters :(</div>;
  if (loading) return <div>Loading filters...</div>;
  if (!data)
    return <div>There are no filters to show</div>;

  const { currencies, languages, regionalBlocs } = data;

  return (
    <div className="flex flex-wrap items-start space-x-1">
      <Select
        defaultOption="Select a currency"
        options={currencies?.edges}
        keyValue="code"
        onChange={setCurrencyQuery}
      />
      <Select
        defaultOption="Select a language"
        options={languages?.edges}
        keyValue="iso6391"
        onChange={setLanguageQuery}
      />
      <Select
        defaultOption="Select a regional bloc"
        options={regionalBlocs?.edges}
        keyValue="acronym"
        onChange={setRegionQuery}
      />
    </div>
  );
};

export default Filters;
