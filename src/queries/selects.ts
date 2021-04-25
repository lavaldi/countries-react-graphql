import { gql } from '@apollo/client';

export const CURRENCIES_LANGUAGES_AND_REGIONS = gql`
  query CurrenciesLanguagesAndRegions {
    currencies {
      edges {
        node {
          name
          code
          symbol
        }
      }
    }
    languages {
      edges {
        node {
          name
          iso6391
        }
      }
    }
    regionalBlocs {
      edges {
        node {
          name
          acronym
        }
      }
    }
  }
`;