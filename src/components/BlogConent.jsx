import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const BlogContent = () => {
  const [fileContents, setFileContents] = useState('');

  useEffect(() => {
    fetch('https://s3xzxssyzd.execute-api.us-east-1.amazonaws.com/Prod/blog/blog1')
      .then(response => response.json())
      .then(data => {
        setFileContents(data.fileContents);
      })

  }, [])

  console.log('fileContents', fileContents);

  return (
    <>
      <ReactMarkdown source={fileContents} />
    </>
  )
}

export default BlogContent;