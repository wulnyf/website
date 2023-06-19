import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Typography from "../components/Typography";
import Container from "../components/Container";
import { AnimateState } from "./Menu.js";
import text from "../text";
import Waves from "./Waves";
import theme from "../theme";
import Menu from "./Menu";

const LogoSection = styled.div`
  margin-left: 15px;
`;

const LinkSection = styled.div`
  display: none;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 30px;
  margin-right: 30px;
  @media (min-width: 800px) {
    display: flex;
  }
`;

const NavBarLink = styled(Typography)`
  margin-left: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const NavOverlay = styled.div`
  position: fixed;
  z-index: 200;
  top: 60px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: ${theme.palette.background};
  padding-top: 50px;
`;

const NavOverlayLink = styled(Typography)`
  margin-bottom: 10px;
`;

const Page = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 2;
`;

const Footer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  z-index: 1;
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

const StyledWaves = styled(Waves)`
  margin-top: 40px;
`;

const Header = ({transparent}) => {
  const [visible, setVisible] = useState(true);
  const [prevPos, setPrevPos] = useState(0);

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const handleScroll = debounce(() => {
    const scrollY = window.pageYOffset;
    setVisible(scrollY < 20 || scrollY < prevPos);
    setPrevPos(scrollY);
  }, 10);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [prevPos, visible, handleScroll]);

  const { redIconData } =
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
      }
    `);

  const redIconImg = getImage(redIconData);
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
  if (open) {
      transparent = false;
  }

  const navbarStyles = {
    display: 'flex',
    height: '60px',
    width: '100%',
    position: 'fixed',
    zIndex: '100',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: transparent ? 'transparent' : theme.palette.background,
    transition: 'top 0.6s'
  }

  return (
    <div>
      {open && (
        <NavOverlay>
          <Container>
            <NavOverlayLink variant="h4">
              <StyledLink to="/" onClick={onMenuClick}>
                Home
              </StyledLink>
            </NavOverlayLink>
            {text.schedule.active && (
              <NavOverlayLink variant="h4">
                <StyledLink to="/auditions" onClick={onMenuClick}>
                  Auditions
                </StyledLink>
              </NavOverlayLink>
            )}
            <NavOverlayLink variant="h4">
              <StyledLink to="/performances" onClick={onMenuClick}>
                Performers
              </StyledLink>
            </NavOverlayLink>
            <NavOverlayLink variant="h4">
              <StyledLink to="/gallery" onClick={onMenuClick}>
                Gallery
              </StyledLink>
            </NavOverlayLink>
            <NavOverlayLink variant="h4">
              <StyledLink to="/people" onClick={onMenuClick}>
                Exec
              </StyledLink>
            </NavOverlayLink>
            <NavOverlayLink variant="h4">
              <StyledLink to="/philanthropy" onClick={onMenuClick}>
                Philanthropy
              </StyledLink>
            </NavOverlayLink>
            <NavOverlayLink variant="h4">
              <StyledLink to="/events" onClick={onMenuClick}>
                Events
              </StyledLink>
            </NavOverlayLink>
            <NavOverlayLink variant="h4">
              <StyledLink to="/store" onClick={onMenuClick}>
                Donate
              </StyledLink>
            </NavOverlayLink>
            <NavOverlayLink variant="h4">
              <StyledLink to="/store" onClick={onMenuClick}>
                Store
              </StyledLink>
            </NavOverlayLink>
          </Container>
        </NavOverlay>
      )}
      <div style={{ ...navbarStyles, top: visible ? '0px' : '-60px' }}>
        <LogoSection>
            <Link to="/">
                <GatsbyImage
                  image={redIconImg}
                  alt="icon"
                />
            </Link>
        </LogoSection>
        <Menu
          onClick={onMenuClick}
          animate={animate}
          setAnimate={setAnimate}
        />
        <LinkSection>
          <NavBarLink variant="linkfont">
            <StyledLink to="/performances">
              Performers
            </StyledLink>
          </NavBarLink>
          <NavBarLink variant="linkfont">
            <StyledLink to="/gallery">
              Gallery
            </StyledLink>
          </NavBarLink>
          <NavBarLink variant="linkfont">
            <StyledLink to="/people">
              Exec
            </StyledLink>
          </NavBarLink>
          <NavBarLink variant="linkfont">
            <StyledLink to="/store">
              Donate
            </StyledLink>
          </NavBarLink>
          <NavBarLink variant="linkfont">
            <StyledLink to="/store">
              Store
            </StyledLink>
          </NavBarLink>
        </LinkSection>
      </div>
    </div>
  );
};

const Layout = ({ children, transparent, noWaves }) => {
  return (
    <Page>
      <Header transparent/>
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
