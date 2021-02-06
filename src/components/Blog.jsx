import React from 'react';
import styled from 'styled-components';
import twoDice from '../static/images/two_dice.jpeg';
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
  return (
    <StyledBlog>
      <div className={'blog-title'}>
        This is a Placeholder Title
      </div>
      <div className={'blog-image'}>
        <img src={twoDice} />
      </div>
      <BlogContent />
    </StyledBlog>
  );
}

export default Blog;