import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  cursor: pointer;
  padding: 0 40px;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  color: ${({ active }) => {
    if (active) {
      return ({ theme }) => theme.palette.background;
    } else {
      return ({ theme }) => theme.palette.font;
    }
  }};
  border-radius: 30px;
  background: ${({ active }) => {
    if (active) {
      return ({ theme }) => theme.palette.font;
    } else {
      return "transparent";
    }
  }};
  align-items: center;
  height: 40px;
  font-size: 14px;
  line-height: 14px;
  border: 1px solid ${({ theme }) => theme.palette.secondary1};
  &:hover {
    background: ${({ theme }) => theme.palette.font};
    color: ${({ theme }) => theme.palette.background};
    border: 1px solid ${({ theme }) => theme.palette.background};
  }
  @media (min-width: 800px) {
    border: 1px solid ${({ theme }) => theme.palette.secondary1};
    line-height: 17px;
    font-size: 17px;
  }
`;

const Button = ({ children, active, ...rest }) => {
  return (
    <Wrapper active={active} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Button;
