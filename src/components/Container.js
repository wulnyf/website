import * as React from "react";
import styled from "styled-components";

const OuterWrapper = styled.div`
  padding: 0 20px;
`;

const InnerWrapper = styled.div`
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
