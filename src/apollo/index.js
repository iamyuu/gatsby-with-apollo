import * as Apollo from '@apollo/react-hooks';

export * from '@apollo/react-hooks';

export const useQuery = (query, options) => {
  // use the original hooks to run the query
  const result = Apollo.useQuery(query, options);

  // if we have an API error, throw it!
  if (result.error) {
    throw result.error;
  }

  return result;
};
