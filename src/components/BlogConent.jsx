import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const StyledContent = styled.div`
  text-align: left
`;

const BlogContent = ({fileContents}) => {
  return (
    <StyledContent>
      <ReactMarkdown source={fileContents} />
    </StyledContent>
  )
}

export default BlogContent;