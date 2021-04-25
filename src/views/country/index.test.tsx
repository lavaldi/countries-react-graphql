import { screen, waitFor } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import Country from './index';
import { COUNTRY } from '../../queries/country';
import { renderWithRouter } from '../../tests/test-utils';

const mocks = [
  {
    request: {
      query: COUNTRY,
      variables: {
        id: "Q291bnRyeU5vZGU6MTc2",
      },
    },
    result: {
      data: {
        country: {
          flag:
            "https://storage.googleapis.com/graphql-country.appspot.com/flags/per.svg",
          name: "Peru",
          alpha2Code: "PE",
          capital: "Lima",
          region: "Americas",
          subregion: "South America",
          population: 31488700,
          timezones: ["UTC-05:00"],
          borders: ["BOL", "BRA", "CHL", "COL", "ECU"],
          languages: {
            edges: [
              {
                node: {
                  name: "Spanish",
                  iso6391: "es",
                },
              },
            ],
          },
          currencies: {
            edges: [
              {
                node: {
                  name: "Peruvian sol",
                  code: "PEN",
                  symbol: "S/.",
                },
              },
            ],
          },
        },
      },
    },
  },
];

describe('Country', () => {
  it('should show the country information', async () => {
    renderWithRouter(
      () => (
        <MockedProvider mocks={mocks} addTypename={false}>
          <Country />
        </MockedProvider>
      ),
      {
        route: "/country/Q291bnRyeU5vZGU6MTc2",
        path: "/country/:countryId",
      }
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(screen.getByTestId('country-name')).toHaveTextContent('Peru');
    expect(screen.getByTestId("country-alpha2Code")).toHaveTextContent("PE");
    expect(screen.getByTestId('country-capital')).toHaveTextContent('Lima');
    expect(screen.getByTestId("country-population")).toHaveTextContent(
      "31488700"
    );
    expect(screen.getByTestId("country-region")).toHaveTextContent("Americas");
    expect(screen.getByTestId("country-subregion")).toHaveTextContent(
      "South America"
    );
  });
});
