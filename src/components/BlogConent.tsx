import React, {FC} from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const StyledContent = styled.div`
  text-align: left
`;

type FileContentsProps = {
  fileContents?: string;
}

const BlogContent: FC<FileContentsProps> = ({fileContents}) => {
  if (!fileContents) return null;
  
  return (
    <StyledContent>
      <ReactMarkdown source={fileContents}/>
    </StyledContent>
  )
}

export default BlogContent;