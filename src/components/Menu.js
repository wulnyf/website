import React from "react";
import styled, { keyframes, css } from "styled-components";

const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 0;
  position: relative;
  height: 40px;
  width: 40px;
`;

export const AnimateState = {
  INITIAL: "Initial",
  OPEN: "Open",
  CLOSED: "Closed",
};

const Bar = styled.span`
  position: absolute;
  background: ${({ white }) => (white ? "white" : "black")};
  left: 0;
  height: 5.5px;
  border-radius: 3px;
`;

const Bar1AnimationOpen = keyframes`
  0% {
    top: 5.5px;
  }
  50% {
    top: 17.5px;
    transform: rotate(0deg);
  }
  100% {
    top: 17.5px;
    transform: rotate(45deg);
  }
`;
const Bar1AnimationClosed = keyframes`
  0% {
    top: 17.5px;
    transform: rotate(45deg);
  }
  50% {
    top: 17.5px;
    transform: rotate(0deg);
  }
  100% {
    top: 5.5px;
  }
`;

const Bar1 = styled(Bar)`
  top: 5.5px;
  width: 40px;
  ${({ animate }) => {
    if (animate !== AnimateState.INITIAL) {
      if (animate === AnimateState.CLOSED) {
        return css`
          animation: ${Bar1AnimationClosed} 0.2s ease-in-out forwards;
        `;
      } else {
        return css`
          animation: ${Bar1AnimationOpen} 0.2s ease-in-out forwards;
        `;
      }
    }
  }}
`;

const Bar2AnimationOpen = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0;
  }
`;

const Bar2AnimationClosed = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Bar2 = styled(Bar)`
  top: 17.5px;
  width: 30px;
  ${({ animate }) => {
    if (animate !== AnimateState.INITIAL) {
      if (animate === AnimateState.CLOSED) {
        return css`
          animation: ${Bar2AnimationClosed} 0.2s ease-in-out forwards;
        `;
      } else {
        return css`
          animation: ${Bar2AnimationOpen} 0.2s ease-in-out forwards;
        `;
      }
    }
  }}
`;

const Bar3AnimationOpen = keyframes`
  0% {
    top: 29.5px;
  }
  50% {
    top: 17.5px;
    transform: rotate(0deg);
  }
  100% {
    top: 17.5px;
    transform: rotate(-45deg);
  }
`;

const Bar3AnimationClosed = keyframes`
  0% {
    top: 17.5px;
    transform: rotate(-45deg);
  }
  50% {
    top: 17.5px;
    transform: rotate(0deg);
  }
  100% {
    top: 29.5px;
  }
`;

const Bar3 = styled(Bar)`
  top: 29.5px;
  width: 40px;
  ${({ animate }) => {
    if (animate !== AnimateState.INITIAL) {
      if (animate === AnimateState.CLOSED) {
        return css`
          animation: ${Bar3AnimationClosed} 0.2s ease-in-out forwards;
        `;
      } else {
        return css`
          animation: ${Bar3AnimationOpen} 0.2s ease-in-out forwards;
        `;
      }
    }
  }}
`;

const Menu = ({ onClick, white, animate }) => {
  return (
    <Wrapper aria-label="navigation" onClick={onClick}>
      <Bar1 animate={animate} white={white} />
      <Bar2 animate={animate} white={white} />
      <Bar3 animate={animate} white={white} />
    </Wrapper>
  );
};

export default Menu;
