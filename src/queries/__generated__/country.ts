/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: country
// ====================================================

export interface country_country_languages_edges_node {
  __typename: "LanguageNode";
  name: string;
  iso6391: string | null;
}

export interface country_country_languages_edges {
  __typename: "LanguageNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: country_country_languages_edges_node | null;
}

export interface country_country_languages {
  __typename: "LanguageNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (country_country_languages_edges | null)[];
}

export interface country_country_currencies_edges_node {
  __typename: "CurrencyNode";
  name: string | null;
  code: string | null;
  symbol: string | null;
}

export interface country_country_currencies_edges {
  __typename: "CurrencyNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: country_country_currencies_edges_node | null;
}

export interface country_country_currencies {
  __typename: "CurrencyNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (country_country_currencies_edges | null)[];
}

export interface country_country {
  __typename: "CountryNode";
  flag: string | null;
  name: string;
  alpha2Code: string | null;
  capital: string | null;
  region: string | null;
  subregion: string | null;
  population: number | null;
  timezones: string[] | null;
  borders: string[] | null;
  languages: country_country_languages;
  currencies: country_country_currencies;
}

export interface country {
  /**
   * The ID of the object
   */
  country: country_country | null;
}

export interface countryVariables {
  id: string;
}
