import React, {FC} from "react";
import Header from "./Header";
import Routes from "./Routes";
import styled from "styled-components";

const StyledApp = styled.div`
  text-align: center;
  width: 100%;
`;

const App: FC = () => {
  return (
    <StyledApp>
      <Header/>
      <Routes/>
    </StyledApp>
  );
}

export default App;
