import React from 'react';
import styled from 'styled-components';
import {colors} from '../colors';

const StyledHeader = styled.div`
  height: 120px;
  background-color: ${colors['black']};
  display: flex;
  justify-content: center;
  align-items: center;

  .blog-title {
    font-size: 42px;
    color: ${colors['white']}
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className={'blog-title'}>
        {'My Blog'}
      </div>
    </StyledHeader>
  )
}

export default Header;