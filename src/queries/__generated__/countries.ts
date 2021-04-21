/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: countries
// ====================================================

export interface countries_countries_edges_node_languages_edges_node {
  __typename: "LanguageNode";
  name: string;
  iso6391: string | null;
}

export interface countries_countries_edges_node_languages_edges {
  __typename: "LanguageNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: countries_countries_edges_node_languages_edges_node | null;
}

export interface countries_countries_edges_node_languages {
  __typename: "LanguageNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (countries_countries_edges_node_languages_edges | null)[];
}

export interface countries_countries_edges_node_currencies_edges_node {
  __typename: "CurrencyNode";
  name: string | null;
  code: string | null;
}

export interface countries_countries_edges_node_currencies_edges {
  __typename: "CurrencyNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: countries_countries_edges_node_currencies_edges_node | null;
}

export interface countries_countries_edges_node_currencies {
  __typename: "CurrencyNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (countries_countries_edges_node_currencies_edges | null)[];
}

export interface countries_countries_edges_node_regionalBlocs_edges_node {
  __typename: "RegionalBlocNode";
  name: string;
  acronym: string | null;
}

export interface countries_countries_edges_node_regionalBlocs_edges {
  __typename: "RegionalBlocNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: countries_countries_edges_node_regionalBlocs_edges_node | null;
}

export interface countries_countries_edges_node_regionalBlocs {
  __typename: "RegionalBlocNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (countries_countries_edges_node_regionalBlocs_edges | null)[];
}

export interface countries_countries_edges_node {
  __typename: "CountryNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  alpha2Code: string | null;
  flag: string | null;
  region: string | null;
  languages: countries_countries_edges_node_languages;
  currencies: countries_countries_edges_node_currencies;
  regionalBlocs: countries_countries_edges_node_regionalBlocs;
}

export interface countries_countries_edges {
  __typename: "CountryNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: countries_countries_edges_node | null;
}

export interface countries_countries {
  __typename: "CountryNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (countries_countries_edges | null)[];
}

export interface countries {
  countries: countries_countries | null;
}
