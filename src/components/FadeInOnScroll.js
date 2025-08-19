import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedDiv = styled.div`
  opacity: 0;
  transform: ${({ direction }) => {
    switch (direction) {
      case 'up': return 'translateY(30px)';
      case 'left': return 'translateX(-30px)';
      case 'right': return 'translateX(30px)';
      default: return 'none';
    }
  }};
  transition: all 0.8s ease-out;
  
  &.visible {
    opacity: 1;
    transform: ${({ direction }) => {
      switch (direction) {
        case 'up': return 'translateY(0)';
        case 'left': return 'translateX(0)';
        case 'right': return 'translateX(0)';
        default: return 'none';
      }
    }};
  }
  
  &.fade-in {
    animation: ${fadeIn} 0.8s ease-out forwards;
  }
  
  &.fade-in-up {
    animation: ${fadeInUp} 0.8s ease-out forwards;
  }
  
  &.fade-in-left {
    animation: ${fadeInLeft} 0.8s ease-out forwards;
  }
  
  &.fade-in-right {
    animation: ${fadeInRight} 0.8s ease-out forwards;
  }
`;

const FadeInOnScroll = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  threshold = 0.1,
  className = '',
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Add delay if specified
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, hasAnimated]);

  const getAnimationClass = () => {
    if (!isVisible) return '';
    
    switch (direction) {
      case 'up': return 'fade-in-up';
      case 'left': return 'fade-in-left';
      case 'right': return 'fade-in-right';
      case 'fade': return 'fade-in';
      default: return 'fade-in-up';
    }
  };

  return (
    <AnimatedDiv
      ref={ref}
      direction={direction}
      className={`${getAnimationClass()} ${className}`}
      style={style}
    >
      {children}
    </AnimatedDiv>
  );
};

export default FadeInOnScroll;
