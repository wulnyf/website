import * as React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: ${({ theme }) => theme.palette.gradient};
  height: 5px;
  width: 100px;
  margin-top: 10px;
  border-radius: 3px;
  @media (min-width: 800px) {
    width: 160px;
  }
`;

const Underline = () => {
  return <StyledDiv />;
};

export default Underline;
