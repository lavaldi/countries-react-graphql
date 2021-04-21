import { gql } from '@apollo/client';

export const CURRENCIES = gql`
  query currencies {
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
`;