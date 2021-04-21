import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { countries as CountriesData } from "../../../queries/__generated__/countries";
import { COUNTRIES } from "../../../queries/countries";
import SearchInput from "./search-input";

const List = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data, loading, error } = useQuery<CountriesData>(COUNTRIES);

  if (error) return <span>Something went wrong :(</span>;
  if(loading) return <span>Loading...</span>
  if (!data || !data.countries?.edges)
    return <span>There are no countries to show</span>;

  const countries = data.countries?.edges;

  const filteredList = searchQuery
    ? countries.filter((country) =>
        country
          ? country.node?.name.toLowerCase().includes(searchQuery.toLowerCase()) || country.node?.alpha2Code === searchQuery.toUpperCase()
          : false
      )
    : countries;

  return (
    <>
      <SearchInput
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <section className="flex flex-wrap items-start">
        {filteredList.map((country) => (
          <article key={country?.node?.id} className="w-1/3 flex-shrink-0">
            <Link to={`/${country?.node?.id}`}>
              <section className="shadow bg-white rounded-md relative flex flex-col space-y-3 py-3 px-5 divide-y divide-neutral-200 mb-10 mr-3 hover:shadow-md">
                <div className="flex space-x-2">
                  <img
                    src={country?.node?.flag ?? undefined}
                    alt={country?.node?.name}
                    className="w-8 h-6"
                  />
                  <h2 className="text-base font-semibold">
                    {country?.node?.name}
                  </h2>
                </div>
                <div className="pt-3">
                  <p>
                    <span className="font-medium">Alpha2Code: </span>
                    {country?.node?.alpha2Code}
                  </p>
                  <p>
                    <span className="font-medium">Language: </span>
                    {country?.node?.languages.edges.map((language) => (
                      <span key={language?.node?.iso6391}>
                        {language?.node?.name},{" "}
                      </span>
                    ))}
                  </p>
                  <p>
                    <span className="font-medium">Currency: </span>
                    {country?.node?.currencies.edges.map((currency) => (
                      <span key={currency?.node?.code}>
                        {currency?.node?.name}
                      </span>
                    ))}
                  </p>
                  <p>
                    <span className="font-medium">Region: </span>
                    {country?.node?.region}
                  </p>
                </div>
              </section>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
};

export default List;
