import { gql } from '@apollo/client';

export const COUNTRIES = gql`
  query countries {
    countries {
      edges {
        node {
          id
          name
          alpha2Code
          flag
          region
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
      }
    }
  }
`;