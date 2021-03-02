import React, {FC} from 'react';
import styled from 'styled-components';
import {colors} from '../colors';

const StyledHeader = styled.div`
  height: 88px;
  background-color: ${colors['black']};
  display: flex;
  justify-content: center;
  align-items: center;

  .blog-title {
    font-size: 24px;
    color: ${colors['white']}
  }

  @media only screen and (max-width: 600px) {
    height: 60px;

    .blog-title {
      font-size: 18px;
    }
  }
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <div className={'blog-title'}>
        My Blog
      </div>
    </StyledHeader>
  )
}

export default Header;