import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  cursor: pointer;
  padding: 0 20px;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  color: ${({ white, active }) => {
    if (white && !active) {
      return ({ theme }) => theme.palette.font;
    } else if (white && active) {
      return ({ theme }) => theme.palette.secondaryfont;
    } else if (!white && active) {
      return ({ theme }) => theme.palette.font;
    } else {
      return ({ theme }) => theme.palette.secondaryfont;
    }
  }};
  border-radius: 30px;
  background: ${({ white, active }) => {
    if (!white && active) {
      return ({ theme }) => theme.palette.background;
    } else if (white && active) {
      return ({ theme }) => theme.palette.secondarybackground;
    } else {
      return "transparent";
    }
  }};
  align-items: center;
  height: 40px;
  font-size: 16px;
  line-height: 16px;
  border: 4px solid ${({ white }) => (white ? ({ theme }) => theme.palette.secondarybackground : ({ theme }) => theme.palette.background)};
  &:hover {
    background: ${({ white }) => (white ? "white" : "black")};
    color: ${({ white }) => (white ? "black" : "white")};
  }
  @media (min-width: 800px) {
    border: 5px solid ${({ white }) => (white ? ({ theme }) => theme.palette.secondarybackground : ({ theme }) => theme.palette.background)};
    line-height: 20px;
    font-size: 20px;
  }
`;

const Button = ({ white, children, active, ...rest }) => {
  return (
    <Wrapper active={active} {...rest} white={white}>
      {children}
    </Wrapper>
  );
};

export default Button;
