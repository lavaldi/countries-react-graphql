import { gql } from '@apollo/client';

export const COUNTRY = gql`
  query country($id: ID!) {
    country(id: $id) {
      flag
      name
      alpha2Code
      capital
      region
      subregion
      population
      timezones
      borders
      languages {
        edges {
          node {
            name
            iso6391
          }
        }
      }
      currencies {
        edges {
          node {
            name
            code
            symbol
          }
        }
      }
    }
  }
`;