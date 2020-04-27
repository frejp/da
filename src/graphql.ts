/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserDetailQuery
// ====================================================

export interface getUserDetailQuery_user_repositories_edges_node {
  __typename: "Repository";
  id: string;
}

export interface getUserDetailQuery_user_repositories_edges {
  __typename: "RepositoryEdge";
  /**
   * The item at the end of the edge.
   */
  node: getUserDetailQuery_user_repositories_edges_node | null;
}

export interface getUserDetailQuery_user_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of edges.
   */
  edges: (getUserDetailQuery_user_repositories_edges | null)[] | null;
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface getUserDetailQuery_user_repositoriesContributedTo {
  __typename: "RepositoryConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface getUserDetailQuery_user_gists_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface getUserDetailQuery_user_gists {
  __typename: "GistConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: getUserDetailQuery_user_gists_pageInfo;
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface getUserDetailQuery_user_followers {
  __typename: "FollowerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface getUserDetailQuery_user {
  __typename: "User";
  id: string;
  /**
   * Determine if this repository owner has any items that can be pinned to their profile.
   */
  anyPinnableItems: boolean;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  /**
   * The user's public profile bio.
   */
  bio: string | null;
  /**
   * The user's public profile bio as HTML.
   */
  bioHTML: any;
  /**
   * The user's public profile company.
   */
  company: string | null;
  /**
   * The user's public profile company as HTML.
   */
  companyHTML: any;
  /**
   * The user's publicly visible profile email.
   */
  email: string;
  /**
   * Identifies the primary key from the database.
   */
  databaseId: number | null;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A list of repositories that the user owns.
   */
  repositories: getUserDetailQuery_user_repositories;
  /**
   * A list of repositories that the user recently contributed to.
   */
  repositoriesContributedTo: getUserDetailQuery_user_repositoriesContributedTo;
  /**
   * A list of the Gists the user has created.
   */
  gists: getUserDetailQuery_user_gists;
  /**
   * A list of users the given user is followed by.
   */
  followers: getUserDetailQuery_user_followers;
}

export interface getUserDetailQuery {
  /**
   * Lookup a user by login.
   */
  user: getUserDetailQuery_user | null;
}

export interface getUserDetailQueryVariables {
  login: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchUsers
// ====================================================

export interface searchUsers_search_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface searchUsers_search_edges_node_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "Organization" | "PullRequest" | "Repository";
}

export interface searchUsers_search_edges_node_User {
  __typename: "User";
  id: string;
  /**
   * The user's publicly visible profile email.
   */
  email: string;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  /**
   * The user's public profile bio.
   */
  bio: string | null;
  /**
   * The user's public profile name.
   */
  name: string | null;
}

export type searchUsers_search_edges_node = searchUsers_search_edges_node_App | searchUsers_search_edges_node_User;

export interface searchUsers_search_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: searchUsers_search_edges_node | null;
}

export interface searchUsers_search {
  __typename: "SearchResultItemConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: searchUsers_search_pageInfo;
  /**
   * A list of edges.
   */
  edges: (searchUsers_search_edges | null)[] | null;
}

export interface searchUsers {
  /**
   * Perform a search across resources.
   */
  search: searchUsers_search;
}

export interface searchUsersVariables {
  query: string;
  after?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
