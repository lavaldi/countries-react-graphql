/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: regions
// ====================================================

export interface regions_regionalBlocs_edges_node {
  __typename: "RegionalBlocNode";
  name: string;
  acronym: string | null;
}

export interface regions_regionalBlocs_edges {
  __typename: "RegionalBlocNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: regions_regionalBlocs_edges_node | null;
}

export interface regions_regionalBlocs {
  __typename: "RegionalBlocNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (regions_regionalBlocs_edges | null)[];
}

export interface regions {
  regionalBlocs: regions_regionalBlocs | null;
}
