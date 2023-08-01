import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import WorkExListing from '../components/WorkExListing';

const WorkExPageInner = props => {
  try {
    const workExs = props.data.allMdx ? props.data.allMdx.edges : [];
    return <WorkExListing workExs={workExs} />;
  } catch (e) {
    return <h2>Unable to find any WorkEx!</h2>;
  }
};

const WorkExPage = props => (
  <Layout>
    <WorkExPageInner {...props} />
  </Layout>
);

export default WorkExPage;

export const query = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: { publish: { eq: true } }
        fields: { type: { eq: "workex" } }
      }
      sort: { fields: [frontmatter___start_date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            layout
            publish
            date
            lede
            link
            repo
            start_date(formatString: "MMM YYYY")
            end_date(formatString: "MMM YYYY")
          }
          fields {
            slug
            type
          }
        }
      }
    }
  }
`;
