import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const TransitionWrapper = styled.div`
  animation: ${({ isEntering, isExiting }) => {
    if (isExiting) return `${fadeOut} 0.3s ease-out forwards`;
    if (isEntering) return `${fadeIn} 0.4s ease-out forwards`;
    return 'none';
  }};
  opacity: ${({ isEntering, isExiting }) => {
    if (isExiting) return 0;
    if (isEntering) return 1;
    return 1;
  }};
`;

const PageTransition = ({ children, location }) => {
  const [isEntering, setIsEntering] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Reset states when location changes
    setIsExiting(false);
    setIsEntering(true);
    
    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsEntering(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <TransitionWrapper isEntering={isEntering} isExiting={isExiting}>
      {children}
    </TransitionWrapper>
  );
};

export default PageTransition;
