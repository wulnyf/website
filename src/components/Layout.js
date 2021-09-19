import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Menu from "../components/Menu";
import Button from "../components/Button";
import Typography from "../components/Typography";
import Container from "../components/Container";
import useScrollPosition from "../utils/useScrollPosition";
import { AnimateState } from "./Menu.js";
import text from "../text";
import Waves from "./Waves";

const Navbar = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  background: ${({ transparent }) => (transparent ? "transparent" : "white")};
  flex-direction: column;
  justify-content: center;
  box-shadow: ${({ scrollPos }) =>
    scrollPos > 5 ? "0px 2px 8px rgba(0, 0, 0, 0.25)" : undefined};
`;

const NavOverlay = styled.div`
  position: fixed;
  z-index: 200;
  top: 60px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: white;
  padding-top: 50px;
`;

const NavbarLink = styled(Typography)`
  margin-bottom: 10px;
`;

const NavbarSection = styled.div`
  display: flex;
  width: 33.33%;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
`;

const LogoSection = styled(NavbarSection)`
  display: none;
  @media (min-width: 800px) {
    display: flex;
  }
`;

const NavbarSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Page = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 2;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 28px;
  display: block;
  line-height: 28px;
  @media (min-width: 800px) {
    font-size: 50px;
    line-height: 50px;
  }
`;

const Footer = styled.div`
  background: black;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  > :nth-child(2) {
    margin: 0 20px;
  }
  > * {
    cursor: pointer;
  }
  @media (min-width: 800px) {
    font-size: 50px;
  }
`;

const StyledAnchor = styled.a`
  color: inherit;
`;

const IconLink = styled(Link)`
  margin-right: 20px;
`;

const StyledWaves = styled(Waves)`
  margin-top: 40px;
`;

const Layout = ({ children, transparent, noWaves }) => {
  const { redIconData, whiteIconData, blackBagData, whiteBagData } =
    useStaticQuery(graphql`
      query LayoutQuery {
        redIconData: file(
          name: { eq: "lnyf_red_favicon" }
          sourceInstanceName: { eq: "images" }
        ) {
          childImageSharp {
            gatsbyImageData(
              height: 40
              width: 40
              placeholder: BLURRED
              layout: FIXED
            )
          }
        }
        whiteIconData: file(
          name: { eq: "lnyf_white_favicon" }
          sourceInstanceName: { eq: "images" }
        ) {
          childImageSharp {
            gatsbyImageData(
              height: 40
              width: 40
              placeholder: BLURRED
              layout: FIXED
            )
          }
        }
        blackBagData: file(
          name: { eq: "bag_black" }
          sourceInstanceName: { eq: "images" }
        ) {
          childImageSharp {
            gatsbyImageData(
              height: 40
              width: 40
              placeholder: BLURRED
              layout: FIXED
            )
          }
        }
        whiteBagData: file(
          name: { eq: "bag_white" }
          sourceInstanceName: { eq: "images" }
        ) {
          childImageSharp {
            gatsbyImageData(
              height: 40
              width: 40
              placeholder: BLURRED
              layout: FIXED
            )
          }
        }
      }
    `);
  const redIconImg = getImage(redIconData);
  const whiteIconImg = getImage(whiteIconData);
  const blackBagImg = getImage(blackBagData);
  const whiteBagImg = getImage(whiteBagData);
  const scrollPos = useScrollPosition();
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(AnimateState.INITIAL);
  const onMenuClick = () => {
    setOpen((prevOpen) => !prevOpen);
    setAnimate(
      animate === AnimateState.INITIAL || animate === AnimateState.CLOSED
        ? AnimateState.OPEN
        : AnimateState.CLOSED
    );
  };
  if (scrollPos > 5 || open) {
    transparent = false;
  }
  return (
    <Page>
      {open && (
        <NavOverlay>
          <Container>
            <NavbarLink variant="h4">
              <StyledLink to="/" onClick={onMenuClick}>
                Home
              </StyledLink>
            </NavbarLink>
            <NavbarLink variant="h4">
              <StyledLink to="/events" onClick={onMenuClick}>
                Events
              </StyledLink>
            </NavbarLink>
            {text.schedule.active && (
              <NavbarLink variant="h4">
                <StyledLink to="/auditions" onClick={onMenuClick}>
                  Auditions
                </StyledLink>
              </NavbarLink>
            )}
            <NavbarLink variant="h4">
              <StyledLink to="/philanthropy" onClick={onMenuClick}>
                Philanthropy
              </StyledLink>
            </NavbarLink>
            <NavbarLink variant="h4">
              <StyledLink to="/performances" onClick={onMenuClick}>
                Performances
              </StyledLink>
            </NavbarLink>
            <NavbarLink variant="h4">
              <StyledLink to="/gallery" onClick={onMenuClick}>
                Gallery
              </StyledLink>
            </NavbarLink>
            <NavbarLink variant="h4">
              <StyledLink to="/people" onClick={onMenuClick}>
                People
              </StyledLink>
            </NavbarLink>
            <NavbarLink variant="h4">
              <StyledLink to="/store" onClick={onMenuClick}>
                Store
              </StyledLink>
            </NavbarLink>
            <NavbarLink variant="h4">
              <StyledLink to="/contact" onClick={onMenuClick}>
                Contact
              </StyledLink>
            </NavbarLink>
          </Container>
        </NavOverlay>
      )}
      <Navbar transparent={transparent} scrollPos={scrollPos}>
        <Container>
          <NavbarSectionWrapper>
            <NavbarSection justifyContent="flex-start">
              <Menu
                onClick={onMenuClick}
                white={transparent ? true : false}
                animate={animate}
                setAnimate={setAnimate}
              />
            </NavbarSection>
            <LogoSection justifyContent="center">
              <Link to="/">
                <GatsbyImage
                  image={transparent ? whiteIconImg : redIconImg}
                  alt="icon"
                />
              </Link>
            </LogoSection>
            <NavbarSection justifyContent="flex-end">
              <IconLink to="/store">
                <GatsbyImage
                  image={transparent ? whiteBagImg : blackBagImg}
                  objectFit="contain"
                  alt="icon"
                />
              </IconLink>
              <a
                href={text.links.store}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button white={transparent ? true : false}>DONATE</Button>
              </a>
            </NavbarSection>
          </NavbarSectionWrapper>
        </Container>
      </Navbar>
      <Content>{children}</Content>
      {!noWaves && <StyledWaves />}
      <Footer>
        <StyledAnchor
          href={text.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram-square"></i>
        </StyledAnchor>
        <StyledAnchor
          href={text.links.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-square"></i>
        </StyledAnchor>
        <StyledAnchor
          href={text.links.youtube}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube-square"></i>
        </StyledAnchor>
      </Footer>
    </Page>
  );
};

export default Layout;
