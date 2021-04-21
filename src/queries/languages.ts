import { gql } from '@apollo/client';

export const LANGUAGES = gql`
  query languages {
    languages {
      edges {
        node {
          name
          iso6391
        }
      }
    }
  }
`;