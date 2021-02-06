import React from 'react';
import Header from './Header';
import Blog from './Blog';
import styled from 'styled-components';


const StyledApp = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Blog />
    </StyledApp>
  );
}

export default App;
