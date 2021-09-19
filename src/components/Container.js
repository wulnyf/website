import * as React from "react";
import styled from "styled-components";

const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

const InnerWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const Container = ({ children, ...rest }) => {
  return (
    <OuterWrapper>
      <InnerWrapper {...rest}>{children}</InnerWrapper>
    </OuterWrapper>
  );
};

export default Container;
