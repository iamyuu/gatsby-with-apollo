import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ErrorBoundary from './component-did-catch';
import client from './apollo/client';


export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <ErrorBoundary>
      {element}
    </ErrorBoundary>
  </ApolloProvider>
);
