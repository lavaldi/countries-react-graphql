/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: languages
// ====================================================

export interface languages_languages_edges_node {
  __typename: "LanguageNode";
  name: string;
  iso6391: string | null;
}

export interface languages_languages_edges {
  __typename: "LanguageNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: languages_languages_edges_node | null;
}

export interface languages_languages {
  __typename: "LanguageNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (languages_languages_edges | null)[];
}

export interface languages {
  languages: languages_languages | null;
}
