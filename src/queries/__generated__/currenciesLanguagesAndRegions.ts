/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CurrenciesLanguagesAndRegions
// ====================================================

export interface CurrenciesLanguagesAndRegions_currencies_edges_node {
  __typename: "CurrencyNode";
  name: string | null;
  code: string | null;
  symbol: string | null;
}

export interface CurrenciesLanguagesAndRegions_currencies_edges {
  __typename: "CurrencyNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: CurrenciesLanguagesAndRegions_currencies_edges_node | null;
}

export interface CurrenciesLanguagesAndRegions_currencies {
  __typename: "CurrencyNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (CurrenciesLanguagesAndRegions_currencies_edges | null)[];
}

export interface CurrenciesLanguagesAndRegions_languages_edges_node {
  __typename: "LanguageNode";
  name: string;
  iso6391: string | null;
}

export interface CurrenciesLanguagesAndRegions_languages_edges {
  __typename: "LanguageNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: CurrenciesLanguagesAndRegions_languages_edges_node | null;
}

export interface CurrenciesLanguagesAndRegions_languages {
  __typename: "LanguageNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (CurrenciesLanguagesAndRegions_languages_edges | null)[];
}

export interface CurrenciesLanguagesAndRegions_regionalBlocs_edges_node {
  __typename: "RegionalBlocNode";
  name: string;
  acronym: string | null;
}

export interface CurrenciesLanguagesAndRegions_regionalBlocs_edges {
  __typename: "RegionalBlocNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: CurrenciesLanguagesAndRegions_regionalBlocs_edges_node | null;
}

export interface CurrenciesLanguagesAndRegions_regionalBlocs {
  __typename: "RegionalBlocNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (CurrenciesLanguagesAndRegions_regionalBlocs_edges | null)[];
}

export interface CurrenciesLanguagesAndRegions {
  currencies: CurrenciesLanguagesAndRegions_currencies | null;
  languages: CurrenciesLanguagesAndRegions_languages | null;
  regionalBlocs: CurrenciesLanguagesAndRegions_regionalBlocs | null;
}
