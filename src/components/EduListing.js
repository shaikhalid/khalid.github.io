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

const StyledEduListing = styled.ul`
  list-style: none;
`;

const StyledEduItem = styled.li`
  font-size: 1.8rem;
  // text-decoration: none;
  margin-bottom: 0.5em;
`;
const StyledEduLink = styled(Link)``;

const EduListing = ({ edus }) => {
  const eduLinks = edus.map(edu => {
    return (
      <StyledEduItem key={edu.node.fields.slug}>
        <StyledEduLink to={edu.node.fields.slug}>
          {edu.node.frontmatter.title}
        </StyledEduLink>
        <DateSpan>
          ({edu.node.frontmatter.start_date} - {edu.node.frontmatter.end_date})
        </DateSpan>
        <br></br>
        {edu.node.frontmatter.course}
      </StyledEduItem>
    );
  });

  return <StyledEduListing>{eduLinks}</StyledEduListing>;
};

export default EduListing;
