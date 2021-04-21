/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: currencies
// ====================================================

export interface currencies_currencies_edges_node {
  __typename: "CurrencyNode";
  name: string | null;
  code: string | null;
  symbol: string | null;
}

export interface currencies_currencies_edges {
  __typename: "CurrencyNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: currencies_currencies_edges_node | null;
}

export interface currencies_currencies {
  __typename: "CurrencyNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (currencies_currencies_edges | null)[];
}

export interface currencies {
  currencies: currencies_currencies | null;
}
