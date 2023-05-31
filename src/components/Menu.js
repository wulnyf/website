import React from "react";
import styled, { keyframes, css } from "styled-components";

const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 0;
  position: relative;
  height: 25px;
  width: 35px;
  margin-right: 30px;
  @media (min-width: 800px) {
    display: none;
  }
`;

export const AnimateState = {
  INITIAL: "Initial",
  OPEN: "Open",
  CLOSED: "Closed",
};

const Bar = styled.span`
  position: absolute;
  background: ${({ theme }) => theme.palette.secondarybackground};
  left: 0;
  height: 2px;
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
    top: 20.5px;
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

const Bar2AnimationClosed = keyframes`
  0% {
    top: 17.5px;
    transform: rotate(-45deg);
  }
  50% {
    top: 17.5px;
    transform: rotate(0deg);
  }
  100% {
    top: 20.5px;
  }
`;

const Bar2 = styled(Bar)`
  top: 20.5px;
  width: 40px;
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

const Menu = ({ onClick, animate }) => {
  return (
    <Wrapper aria-label="navigation" onClick={onClick}>
      <Bar1 animate={animate} />
      <Bar2 animate={animate} />
    </Wrapper>
  );
};

export default Menu;
