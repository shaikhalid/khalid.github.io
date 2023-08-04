import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const DateSpan = styled.span`
  display: none;
  color: #999;
  margin-left: 0.5em;

  @media (min-width: 520px) {
    display: inline;
  }
`;

const StyledWorkExListing = styled.ul`
  list-style: none;
`;

const StyledWorkExItem = styled.li`
  font-size: 1.8rem;
  margin-bottom: 0.5em;
`;
const WorkExListing = ({ workExs }) => {
  const workExLinks = workExs.map(workEx => (
    <StyledWorkExItem key={workEx.node.fields.slug}>
      <Link to={workEx.node.fields.slug}>{workEx.node.frontmatter.title}</Link>
      <br></br>
      {`@${workEx.node.frontmatter.company}`}
      <br></br>
      <DateSpan>
        ({workEx.node.frontmatter.start_date} -{' '}
        {workEx.node.frontmatter.end_date})
      </DateSpan>
    </StyledWorkExItem>
  ));
  return <StyledWorkExListing>{workExLinks}</StyledWorkExListing>;
};

export default WorkExListing;
