import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  color: white;
`;

const StyledButton = styled(Button)`
  align-self: flex-start;
  margin-bottom: 20px;
  flex-shrink: 0;
`;

const ImageOverlay = ({ children, open, setOpen }) => {
  return (
    open && (
      <Wrapper>
        <StyledButton white onClick={() => setOpen(false)}>
          Close
        </StyledButton>
        {children}
      </Wrapper>
    )
  );
};

export default ImageOverlay;
