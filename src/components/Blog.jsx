import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import BlogContent from './BlogConent';

const StyledBlog = styled.div`
  width: 80vw;
  display: inline-block;
  padding: 32px 0;
  max-width: 880px;

  @media only screen and (max-width: 600px) {
    width: 90vw;
  }

  .blog-title {
    font-size: 32px
  }

  .blog-image {

    img {
      padding: 24px 0;
      display: block;
      margin: auto;
      width: 480px;

      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }
  }
`;

const Blog = () => {
  const [blogResponse, setBlogResponse] = useState('');

  useEffect(() => {
    fetch('https://s3xzxssyzd.execute-api.us-east-1.amazonaws.com/Prod/blog/blog1')
      .then(response => response.json())
      .then(data => {
        setBlogResponse(data);
      })

  }, [])

  return (
    <StyledBlog>
      <div className={'blog-title'}>
        This is a Placeholder Title
      </div>
      <div className={'blog-image'}>
        <img src={blogResponse.imagePath} />
      </div>
      <BlogContent fileContents={blogResponse.fileContents}/>
    </StyledBlog>
  );
}

export default Blog;