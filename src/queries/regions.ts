import { gql } from '@apollo/client';

export const REGIONS = gql`
  query regions {
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