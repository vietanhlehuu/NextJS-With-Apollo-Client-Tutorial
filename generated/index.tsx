// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export type Character = {
  __typename?: "Character";
  /** The id of the character. */
  id?: Maybe<Scalars["ID"]>;
  /** The name of the character. */
  name?: Maybe<Scalars["String"]>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars["String"]>;
  /** The species of the character. */
  species?: Maybe<Scalars["String"]>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars["String"]>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars["String"]>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars["String"]>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars["String"]>;
};

export type Characters = {
  __typename?: "Characters";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: "Episode";
  /** The id of the episode. */
  id?: Maybe<Scalars["ID"]>;
  /** The name of the episode. */
  name?: Maybe<Scalars["String"]>;
  /** The air date of the episode. */
  air_date?: Maybe<Scalars["String"]>;
  /** The code of the episode. */
  episode?: Maybe<Scalars["String"]>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars["String"]>;
};

export type Episodes = {
  __typename?: "Episodes";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  species?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
};

export type FilterEpisode = {
  name?: Maybe<Scalars["String"]>;
  episode?: Maybe<Scalars["String"]>;
};

export type FilterLocation = {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimension?: Maybe<Scalars["String"]>;
};

export type Info = {
  __typename?: "Info";
  /** The length of the response. */
  count?: Maybe<Scalars["Int"]>;
  /** The amount of pages. */
  pages?: Maybe<Scalars["Int"]>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars["Int"]>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars["Int"]>;
};

export type Location = {
  __typename?: "Location";
  /** The id of the location. */
  id?: Maybe<Scalars["ID"]>;
  /** The name of the location. */
  name?: Maybe<Scalars["String"]>;
  /** The type of the location. */
  type?: Maybe<Scalars["String"]>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars["String"]>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars["String"]>;
};

export type Locations = {
  __typename?: "Locations";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: "Query";
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
};

export type QueryCharacterArgs = {
  id: Scalars["ID"];
};

export type QueryCharactersArgs = {
  page?: Maybe<Scalars["Int"]>;
  filter?: Maybe<FilterCharacter>;
};

export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type QueryLocationArgs = {
  id: Scalars["ID"];
};

export type QueryLocationsArgs = {
  page?: Maybe<Scalars["Int"]>;
  filter?: Maybe<FilterLocation>;
};

export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type QueryEpisodeArgs = {
  id: Scalars["ID"];
};

export type QueryEpisodesArgs = {
  page?: Maybe<Scalars["Int"]>;
  filter?: Maybe<FilterEpisode>;
};

export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type CharactersQueryVariables = Exact<{
  page?: Maybe<Scalars["Int"]>;
  filter?: Maybe<FilterCharacter>;
}>;

export type CharactersQuery = { __typename?: "Query" } & {
  characters?: Maybe<
    { __typename?: "Characters" } & {
      info?: Maybe<
        { __typename?: "Info" } & Pick<
          Info,
          "count" | "pages" | "next" | "prev"
        >
      >;
      results?: Maybe<
        Array<
          Maybe<
            { __typename?: "Character" } & Pick<
              Character,
              "id" | "image" | "name" | "gender" | "species"
            > & {
                episode: Array<
                  Maybe<
                    { __typename?: "Episode" } & Pick<
                      Episode,
                      "id" | "episode" | "air_date"
                    >
                  >
                >;
                origin?: Maybe<
                  { __typename?: "Location" } & Pick<
                    Location,
                    "dimension" | "id"
                  >
                >;
              }
          >
        >
      >;
    }
  >;
};

export type CharacterQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type CharacterQuery = { __typename?: "Query" } & {
  character?: Maybe<
    { __typename?: "Character" } & Pick<
      Character,
      "id" | "image" | "name" | "gender" | "species"
    >
  >;
};

export const CharactersDocument = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        image
        name
        gender
        species
        episode {
          id
          episode
          air_date
        }
        origin {
          dimension
          id
        }
      }
    }
  }
`;

/**
 * __useCharactersQuery__
 *
 * To run a query within a React component, call `useCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharactersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CharactersQuery,
    CharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CharactersQuery, CharactersQueryVariables>(
    CharactersDocument,
    options
  );
}
export function useCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CharactersQuery,
    CharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CharactersQuery, CharactersQueryVariables>(
    CharactersDocument,
    options
  );
}
export type CharactersQueryHookResult = ReturnType<typeof useCharactersQuery>;
export type CharactersLazyQueryHookResult = ReturnType<
  typeof useCharactersLazyQuery
>;
export type CharactersQueryResult = Apollo.QueryResult<
  CharactersQuery,
  CharactersQueryVariables
>;
export const CharacterDocument = gql`
  query character($id: ID!) {
    character(id: $id) {
      id
      image
      name
      gender
      species
    }
  }
`;

/**
 * __useCharacterQuery__
 *
 * To run a query within a React component, call `useCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCharacterQuery(
  baseOptions: Apollo.QueryHookOptions<CharacterQuery, CharacterQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CharacterQuery, CharacterQueryVariables>(
    CharacterDocument,
    options
  );
}
export function useCharacterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CharacterQuery,
    CharacterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CharacterQuery, CharacterQueryVariables>(
    CharacterDocument,
    options
  );
}
export type CharacterQueryHookResult = ReturnType<typeof useCharacterQuery>;
export type CharacterLazyQueryHookResult = ReturnType<
  typeof useCharacterLazyQuery
>;
export type CharacterQueryResult = Apollo.QueryResult<
  CharacterQuery,
  CharacterQueryVariables
>;
