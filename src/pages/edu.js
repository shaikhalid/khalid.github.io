import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import EduListing from './../components/EduListing';

const EduPageInner = props => {
  try {
    const edus = props.data.allMdx ? props.data.allMdx.edges : [];

    return <EduListing edus={edus} />;
  } catch (e) {
    return <h2>Unable to find any blog posts.</h2>;
  }
};

const EduPage = props => {
  return (
    <Layout>
      <EduPageInner {...props} />
    </Layout>
  );
};

export default EduPage;

export const query = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: { publish: { eq: true } }
        fields: { type: { eq: "edu" } }
      }
      sort: { fields: [frontmatter___start_date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            course
            start_date(formatString: "MMM YYYY")
            end_date(formatString: "MMM YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
