import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { COUNTRY } from "../../queries/country";
import { country, countryVariables } from "../../queries/__generated__/country";

const Country = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const { data, loading, error } = useQuery<country, countryVariables>(
    COUNTRY,
    {
      variables: {
        id: countryId,
      },
    }
  );

  if (error) return <span>Something went wrong :(</span>;
  if (loading) return <span>Loading...</span>;
  if (!data || !data.country)
    return <span>There are no countries to show</span>;

  const { country } = data;
  return (
    <>
      <h1 className="text-4xl">{country.name}</h1>
      <section className="flex flex-wrap items-start">
        <article className="w-1/2 flex-shrink-0">
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  Alpha2Code:
                </td>
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600">
                  {country.alpha2Code}
                </td>
              </tr>
              <tr className="bg-blue-200">
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  Capital:
                </td>
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  {country.capital}
                </td>
              </tr>
              <tr>
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  Population:
                </td>
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  {country.population}
                </td>
              </tr>
              <tr>
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  Region:
                </td>
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600">
                  {country.region}
                </td>
              </tr>
              <tr className="bg-blue-200">
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  Subregion:
                </td>
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  {country.subregion}
                </td>
              </tr>
              <tr>
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  Timezones:
                </td>
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  {country.timezones?.join(", ")}
                </td>
              </tr>
              <tr className="bg-blue-200">
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  Borders:
                </td>
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  {country.borders?.join(", ")}
                </td>
              </tr>
              <tr>
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  Currencies:
                </td>
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  {country.currencies.edges.map((currency) => (
                    <p>
                      {currency?.node?.symbol} {currency?.node?.name}
                    </p>
                  ))}
                </td>
              </tr>
              <tr className="bg-blue-200">
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  Languages:
                </td>
                <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                  {country.languages.edges.map((language) => (
                    <p>{language?.node?.name}</p>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <article className="w-1/2 flex-shrink-0">
          <img src={country.flag as string} alt={country.name} />
        </article>
      </section>
    </>
  );
}

export default Country;
