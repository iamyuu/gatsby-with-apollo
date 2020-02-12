import React from 'react';
import gql from 'graphql-tag';
import { useStaticQuery, graphql } from 'gatsby';
import { useQuery } from '../apollo';

// This query is executed at build time by Gatsby.
const GATSBY_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
  query getSinglePost($id: ID!) {
    post(id: $id) {
      title
      body
    }
  }
`;

export default () => {
  const { site } = useStaticQuery(GATSBY_QUERY);
  const { data, loading } = useQuery(APOLLO_QUERY, {
    variables: {
      id: 1
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const { title, body } = data.post;
  const { title: titleSite } = site.siteMetadata;

  console.log(`TCL: titleSite`, titleSite)

  return (
    <section>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
};
