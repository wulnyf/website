import * as React from "react";
import styled from "styled-components";

const Header1 = styled.h1`
  margin: 0;
  line-height: 56px;
  font-size: 56px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  color: ${({ color }) => color};
  @media (min-width: 800px) {
    margin: -10px 0 0 -5px;
    line-height: 124px;
    font-size: 124px;
  }
`;

const Header2 = styled.h2`
  margin: 0;
  line-height: 42px;
  font-size: 42px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  color: ${({ color }) => color};
  @media (min-width: 800px) {
    line-height: 68px;
    font-size: 68px;
  }
`;

const Header3 = styled.h3`
  margin: 0;
  line-height: 34px;
  font-size: 34px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  color: ${({ color }) => color};
  @media (min-width: 800px) {
    line-height: 64px;
    font-size: 64px;
  }
`;

const Header4 = styled.h4`
  margin: 0;
  line-height: 28px;
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  color: ${({ color }) => color};
  @media (min-width: 800px) {
    line-height: 50px;
    font-size: 50px;
  }
`;

const Header5 = styled.h5`
  margin: 0;
  line-height: 22px;
  font-size: 22px;
  font-weight: 300;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  color: ${({ color }) => color};
  @media (min-width: 800px) {
    line-height: 40px;
    font-size: 40px;
  }
`;

const Header6 = styled.h6`
  margin: 0;
  line-height: 24px;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  color: ${({ color }) => color};
  @media (min-width: 800px) {
    line-height: 30px;
    font-size: 30px;
  }
`;

const LinkFont = styled.p`
  margin: 0;
  line-height: 20px;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
`;

const FloatingButtonFont = styled.p`
  margin: 0;
  line-height: 17px;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
`;

const Subtitle = styled.p`
  line-height: 20px;
  font-size: 20px;
  margin: 0;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  color: ${({ color }) => color};
  @media (min-width: 800px) {
    line-height: 24px;
    font-size: 24px;
  }
`;

const Caption = styled.p`
  line-height: 16px;
  font-size: 16px;
  font-weight: 300;
  margin: 0;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  color: ${({ color }) => color};
  @media (min-width: 800px) {
    line-height: 20px;
    font-size: 20px;
  }
`;


const Caption2 = styled.p`
  line-height: 12px;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  font-family: "Oswald", sans-serif;
  text-transform: none;
  color: ${({ color }) => color};
  @media (min-width: 800px) {
    line-height: 17px;
    font-size: 17px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin: 0;
  @media (min-width: 800px) {
    font-size: 20px;
  }
`;

const FooterTitle = styled.p`
  font-size: 15px;
  margin: 0;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.accent3};
  font-weight: 300;
  @media (min-width: 800px) {
    font-size: 14px;
  }
`;

const FooterLink = styled.p`
  font-size: 10px;
  margin: 0;
  font-weight: 300;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  @media (min-width: 800px) {
    font-size: 14px;
  }
`;

const CreditFont = styled.p`
  font-size: 10px;
  margin: 0;
  color: ${({ theme }) => theme.palette.accent3};
  font-weight: 200;
  font-family: "Oswald", sans-serif;
  text-align: center;
  margin-top: 15px;
`;

const Typography = ({ variant, color, children, ...rest }) => {
  switch (variant) {
    case "h1":
      return (
        <Header1 color={color} {...rest}>
          {children}
        </Header1>
      );
    case "h2":
      return (
        <Header2 color={color} {...rest}>
          {children}
        </Header2>
      );
    case "h3":
      return (
        <Header3 color={color} {...rest}>
          {children}
        </Header3>
      );
    case "h4":
      return (
        <Header4 color={color} {...rest}>
          {children}
        </Header4>
      );
    case "h5":
      return (
        <Header5 color={color} {...rest}>
          {children}
        </Header5>
      );
    case "h6":
      return (
        <Header6 color={color} {...rest}>
          {children}
        </Header6>
      );
    case "linkfont":
      return (
        <LinkFont color={color} {...rest}>
          {children}
        </LinkFont>
      );
    case "floatingbuttonfont":
      return (
        <FloatingButtonFont color={color} {...rest}>
          {children}
        </FloatingButtonFont>
      );
    case "subtitle":
      return (
        <Subtitle color={color} {...rest}>
          {children}
        </Subtitle>
      );
    case "caption":
      return (
        <Caption color={color} {...rest}>
          {children}
        </Caption>
      );
    case "caption2":
      return (
        <Caption2 color={color} {...rest}>
          {children}
        </Caption2>
      );
    case "footertitle":
      return (
        <FooterTitle color={color} {...rest}>
          {children}
        </FooterTitle>
      );
    case "footerlink":
      return (
        <FooterLink color={color} {...rest}>
          {children}
        </FooterLink>
      );
    case "creditfont":
      return (
        <CreditFont color={color} {...rest}>
          {children}
        </CreditFont>
      );
    default:
      return (
        <Paragraph color={color} {...rest}>
          {children}
        </Paragraph>
      );
  }
};

export default Typography;
