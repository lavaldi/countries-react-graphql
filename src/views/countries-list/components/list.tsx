import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Countries } from "../../../queries/__generated__/countries";
import { COUNTRIES } from "../../../queries/countries";
import useQueryParams from "../../../hooks/use-query-params";

const List = () => {
  const { data, loading, error } = useQuery<Countries>(COUNTRIES);
  const query = useQueryParams();

  if (error) return <div>Something went wrong :(</div>;
  if (loading) return <div>Loading...</div>;
  if (!data || !data.countries?.edges)
    return <div>There are no countries to show</div>;

  const countries = data.countries?.edges;
  const searchQuery = query.get("search") ?? "";
  const currencyQuery = query.get("currency") ?? "";
  const languageQuery = query.get("language") ?? "";
  const regionQuery = query.get("region") ?? "";

  const getFilteredList = () => {
    const filteredByNameOrAlpha2Code = searchQuery.trim() ? countries.filter((country) =>
      country
        ? country.node?.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          country.node?.alpha2Code === searchQuery.toUpperCase()
        : false
    ) : countries;

    const filteredByCurrency = currencyQuery
      ? filteredByNameOrAlpha2Code.filter((country) =>
          country
            ? country.node?.currencies.edges.some((c) => c?.node?.code === currencyQuery)
            : false
        )
      : filteredByNameOrAlpha2Code;

    const filteredByLanguage = languageQuery
      ? filteredByCurrency.filter((country) =>
          country
            ? country.node?.languages.edges.some(
                (l) => l?.node?.iso6391 === languageQuery
              )
            : false
        )
      : filteredByCurrency;

    const filteredByRegionalBlock = regionQuery
      ? filteredByLanguage.filter((country) =>
          country
            ? country.node?.regionalBlocs.edges.some(
                (r) => r?.node?.acronym === regionQuery
              )
            : false
        )
      : filteredByLanguage;

    return filteredByRegionalBlock;
  }

  const filteredList = getFilteredList();

  return (
    <section className="flex flex-wrap items-start">
      {filteredList.length === 0 ? (
        <div>There are no results for your search</div>
      ) : (
        filteredList.map((country) => (
          <article key={country?.node?.id} className="lg:w-1/3 flex-shrink-0 w-full">
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
        ))
      )}
    </section>
  );
};

export default List;
