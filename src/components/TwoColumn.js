import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
  > :first-child {
    margin-bottom: ${({ spacing }) => spacing + 20}px;
  }
  > :last-child {
    margin-top: ${({ spacing }) => spacing + 40}px;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    > :first-child {
      margin-bottom: 0px;
      order: ${({ inverse }) => (inverse ? 2 : undefined)};
      ${({ inverse, spacing }) =>
        inverse ? `margin-left: ${spacing}px` : `margin-right: ${spacing}px`};
    }
    > :last-child {
      order: ${({ inverse }) => (inverse ? 1 : undefined)};
    }
  }
`;

const TwoColumn = ({ children, inverse, spacing = 0 }) => {
  return (
    <Wrapper inverse={inverse} spacing={spacing}>
      {children}
    </Wrapper>
  );
};

export default TwoColumn;
