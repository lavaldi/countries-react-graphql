import { ChangeEvent } from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router";
import qs from "query-string";
import Select from "../../../components/select";
import { CurrenciesLanguagesAndRegions } from "../../../queries/__generated__/currenciesLanguagesAndRegions";
import { CURRENCIES_LANGUAGES_AND_REGIONS } from "../../../queries/selects";
import useQueryParams from "../../../hooks/use-query-params";

const Filters = () => {
  const query = useQueryParams();
  const { push } = useHistory();
  const { data, loading, error } = useQuery<CurrenciesLanguagesAndRegions>(
    CURRENCIES_LANGUAGES_AND_REGIONS
  );

  if (error)
    return <div>Something went wrong, we cannot load the filters :(</div>;
  if (loading) return <div>Loading filters...</div>;
  if (!data) return <div>There are no filters to show</div>;

  const { currencies, languages, regionalBlocs } = data;

  const currencyQuery = query.get("currency") ?? "";
  const languageQuery = query.get("language") ?? "";
  const regionQuery = query.get("region") ?? "";

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const parsed = qs.parse(window.location.search);
    parsed[event.currentTarget.dataset.id as string] = event.target.value;
    const searchString = qs.stringify(parsed, { skipEmptyString: true });
    push({
      search: searchString,
    });
  };

  return (
    <div className="flex flex-wrap items-start md:space-x-1">
      <Select
        id="currency"
        emptyOption="Select a currency"
        selectedValue={currencyQuery}
        options={currencies?.edges}
        keyValue="code"
        onChange={handleChange}
      />
      <Select
        id="language"
        emptyOption="Select a language"
        selectedValue={languageQuery}
        options={languages?.edges}
        keyValue="iso6391"
        onChange={handleChange}
      />
      <Select
        id="region"
        emptyOption="Select a regional bloc"
        selectedValue={regionQuery}
        options={regionalBlocs?.edges}
        keyValue="acronym"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filters;
