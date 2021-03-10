import React, {useState, useEffect, FC} from 'react';
import {useParams} from 'react-router-dom';
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

type ParamTypes = {
  blogId: string;
}

type BlogResponse = {
  imagePath?: string;
  fileContents?: string;
}

const Blog: FC = () => {
  const [blogResponse, setBlogResponse] = useState<BlogResponse>({});
  const {blogId} = useParams<ParamTypes>();
  
  useEffect(() => {
    fetch(`https://s3xzxssyzd.execute-api.us-east-1.amazonaws.com/Prod/blog/${blogId}`)
      .then(response => response.json())
      .then(data => {
        setBlogResponse(data);
      })
  }, [blogId])
  
  return (
    <StyledBlog>
      <div className={'blog-title'}>
        Title Will Go Here
      </div>
      <div className={'blog-image'}>
        <img src={blogResponse.imagePath} alt={blogId}/>
      </div>
      <BlogContent fileContents={blogResponse.fileContents}/>
    </StyledBlog>
  );
}

export default Blog;