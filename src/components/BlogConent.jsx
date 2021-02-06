import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const StyledContent = styled.div`
  text-align: left
`;

const BlogContent = () => {
  const [fileContents, setFileContents] = useState('');

  useEffect(() => {
    fetch('https://s3xzxssyzd.execute-api.us-east-1.amazonaws.com/Prod/blog/blog1')
      .then(response => response.json())
      .then(data => {
        setFileContents(data.fileContents);
      })

  }, [])

  return (
    <StyledContent>
      <ReactMarkdown source={fileContents} />
    </StyledContent>
  )
}

export default BlogContent;