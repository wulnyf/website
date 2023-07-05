import * as React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import TwoColumn from "../components/TwoColumn";
import Underline from "../components/Underline";
import styled from "styled-components";
import Seo from "../components/Seo";
import { graphql, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import text from "../text";
import theme from "../theme";
import themeGIF from '../images/misc/themeGif1.gif'

const JumbotronContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
`;

const JumbotronButton = styled.div`
  margin-top: 20px;
`;

const ContentContainer = styled(Container)`
  padding: 100px 0;
  z-index: 1;
  position: relative;
  max-width: 100%;
  height: 90vh;
`;

const ContentColumn = styled.div`
  flex-basis: 0px;
  flex-grow: 3;
  z-index: 1;
`;

const ImageColumn = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 0px;
  flex-grow: 2;
`;

const EmptyColumn = styled.div`
  display: flex;
  flex-grow: 1;
`;

const TextContainer = styled.div`
  margin: 40px 0;
  z-index: 1;
  > * {
    margin: 20px 0;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 5vh;
  z-index: 1;
`;

const StyledIcon = styled(GatsbyImage)`
  margin-right: 10px;
  width: 35px;
  @media (min-width: 800px) {
    width: 50px;
    margin-right: 20px;
  }
`;

const StyledBackgroundImage = styled(GatsbyImage)`
  position: fixed;
  background-position: center;
  -webkit-background-size: cover;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 45px;
`;

const StyledButton = styled(Button)`
  margin-right: 15px;
`;

const FloatingPageNav = styled.div`
  position: fixed;
  top: 110px; 
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  margin-right: 2vw;
  @media (min-width: 1340px) {
    margin-right: 3vw;
    top: 250px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const FloatingButton = styled(Button)`
  border: none;
  text-align: center;
  padding: 30px 0;
  width: 130px;
  height: auto;
  border-radius: 0px;
  @media (min-width: 1340px) {
    width: 150px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
  &:hover {
    background-color: rgba(255, 255, 255, .15);
    border: none;
    border-radius: 25px;
    color: ${theme.palette.font};
  }
`;

const FloatingDivider = styled.div`
  background-color: ${theme.palette.font};
  height: 1.5px;
  width: 130px;
  @media (min-width: 1340px) {
    width: 150px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const EventPane = styled.div`
  width: 78vw;
  background-color: rgba(255, 255, 255, .15);  
  backdrop-filter: blur(5px);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: all .3s; 
  @media (max-width: 1000px) {
    width: 90vw;
  }
  &:hover {
    transform: scale(1.01);
  }
`;

const EventBar = styled.div`
  z-index: 1;
  display: -webkit-box;
  flex-direction: row;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0.8em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: slategray;
    opacity: 0.6;
    border-radius: 10px;
  }
`;

const EventItem = styled.div`
  width: 180px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px;
  align-items: center;
  border: 2px solid ${theme.font};
  border-radius: 10px;
  color: ${theme.palette.font};
`;

const EventTitle = styled(Typography)`
  text-align: center;
`;

const EventDate = styled(Typography)`
  margin-top: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const EventText = styled(Typography)`
  margin-top: 20px;
  margin-bottom: 15px;
  margin-left: 5px;
`;

const BottomFloatingButton = styled(FloatingButton)`
  border-bottom: none;
`;

const EventLink = styled(Link)`
  width: 78vw;
  display: flex;
`;

const SpotlightBox = styled.div`
  width: 130px;
  height: 77px;
  @media (min-width: 1340px) {
    width: 150px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const BlackoutContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 30px;
  top: 5vh;
  z-index: 1;
  @media (max-width: 1000px) {
    left: 0;
    right: 0;
    top: 20vh;
  }
`;

const BlackoutBackground = styled.img`
  min-height: 100%;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 0;
  @media (max-width: 1000px) {
    min-height: auto;
    height: auto;
    width: 100%;
  }
  @media (max-width: 500px) {
    bottom: 25vh;
  }
`;

const TimerPane = styled.div`
  width: 400px;
  padding: 15px;
  background-color: rgba(255, 255, 255, .1);  
  backdrop-filter: blur(5px);
  border-radius: 20px;
  z-index: 1;
  @media (max-width: 1000px) {
    width: 80vw;
  }
`;

const Timer = () => {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = "2023-07-21T17:00:00-06:00";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();    

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  const timerStyles = {
    marginBottom: '20px'
  }

  return (
    <div style={timerStyles}>
      <Typography variant='h6' style={{textAlign: 'center'}}>
        {days} days {hours} hours {minutes} minutes
      </Typography>
    </div>
  );
};

const BlackoutPage = () => {
  // For blacking out the page during the Summer
  // To replace the homepage with the blackout page just change 'export default IndexPage'
  // at the bottom of this file to 'export default BlackoutPage'
  // Also it would prob be smart to comment out the header and footer in the Layout.js file
  // so they can click on other links

  const buttonContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <BlackoutContainer>
      <BlackoutBackground src={themeGIF} alt="LNYF Theme" />
      <TimerPane>
        <Timer></Timer>
        <div style={buttonContainerStyles}>
          <Link to="/people" style={{marginBottom: '7px'}}>
            <StyledButton>Executive Board</StyledButton>
          </Link>
          <Link to="/performances" style={{marginBottom: '7px'}}>
            <StyledButton>2023 Performers</StyledButton>
          </Link>
        </div>
      </TimerPane>
    </BlackoutContainer>
  );
}

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

const MovingSpotlight = () => {
  const [scrollTicker, setScrollTicker] = React.useState(77);

  const handleTick = debounce(() => {
    const scrollPos = window.scrollY;

    if (scrollPos < 400) {
      setScrollTicker(77);
    }
    else if (scrollPos < 1100) {
      setScrollTicker(155.5);
    }
    else if (scrollPos < 1800) {
      setScrollTicker(234);
    }
    else {
      setScrollTicker(312.5); 
    }
  }, 10);

  React.useEffect(() => {
    document.addEventListener("scroll", handleTick);
    return () => document.removeEventListener("scroll", handleTick);
  }, [scrollTicker, handleTick]);

  const spotlightStyles = {
    position: 'relative',
    top: scrollTicker + 'px', 
    right: '0',
    zIndex: '1',
    backgroundColor: 'rgba(251,243,237,0.3)',
    borderRadius: '25px',
    transition: 'all 0.3s ease-out'
  }

  return (
    <SpotlightBox style={spotlightStyles}>
    </SpotlightBox>
  );
}

const IndexPage = ({ data }) => {
  const [scrollPos, setScrollPos] = React.useState(0);

  const img = getImage(data.backgroundData);
  const blurredImg = getImage(data.blurredBackgroundData);
  const aboutImg = getImage(data.aboutData);
  const philanthropyImg = getImage(data.philanthropyData);
  const instaImg = getImage(data.instagramData);
  const youtubeImg = getImage(data.youtubeData);
  const facebookImg = getImage(data.facebookData);



  function scrollLNYF() {
    window.scrollTo(0, 0);
  }

  function scrollAbout() {
    window.scrollTo(0, 780);
  }

  function scrollEvents() {
    window.scrollTo(0, 1500);
  }

  function scrollPhilanthropy() {
    window.scrollTo(0, 2150);
  }

  const handleScroll = debounce(() => {
    const scrollY = window.pageYOffset;
    setScrollPos(scrollY);
  }, 10);

  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scrollPos, handleScroll]);

  return (
    <Layout transparent noWaves>
      <Seo title="Home" />
      <StyledBackgroundImage 
        image={img}
        alt="Image"
      />
      <div style={{opacity: scrollPos/300}}>
        <StyledBackgroundImage
          image={blurredImg}
          alt="Image"
        />
      </div>
      <JumbotronContainer>
        <TitleContainer>
          <Typography variant="h5" color="white">
            {text.index.jumbotronTop}
          </Typography>
          <Typography variant="h1" color="white">
            {text.index.jumbotronMiddle}
          </Typography>
          {text.index.jumbotronBottom && (
            <Typography variant="h3" color="secondary2">
              {text.index.jumbotronBottom}
            </Typography>
          )}
          <JumbotronButton>
            <a href={text.links.instagram}>
              <StyledIcon
                image={instaImg}
                alt="Instagram"
              />
            </a>
            <a href={text.links.youtube}>
              <StyledIcon
                image={youtubeImg}
                alt="Youtube"
              />
            </a>
            <a href={text.links.facebook}>
              <StyledIcon
                image={facebookImg}
                alt="Facebook"
              />
            </a>
          </JumbotronButton>
        </TitleContainer>
      </JumbotronContainer>
      <FloatingPageNav>
        <MovingSpotlight></MovingSpotlight>
        <FloatingButton onClick={scrollLNYF}>
          <Typography variant="floatingbuttonfont">LNYF</Typography>
        </FloatingButton>
        <FloatingDivider></FloatingDivider>
        <FloatingButton onClick={scrollAbout}>
          <Typography variant="floatingbuttonfont">About</Typography>
        </FloatingButton>
        <FloatingDivider></FloatingDivider>
        <FloatingButton onClick={scrollEvents}>
          <Typography variant="floatingbuttonfont">Events</Typography>
        </FloatingButton>
        <FloatingDivider></FloatingDivider>
        <BottomFloatingButton onClick={scrollPhilanthropy}>
          <Typography variant="floatingbuttonfont">Philanthropy</Typography>
        </BottomFloatingButton>
      </FloatingPageNav>
      <ContentContainer>
        <TwoColumn spacing={40}>
          <ContentColumn>
            <Typography variant="h2">About LNYF</Typography>
            <Underline />
            <TextContainer>{text.index.aboutText}</TextContainer>
            <ButtonContainer>
              <Link to="/gallery">
                <StyledButton>Gallery</StyledButton>
              </Link>
            </ButtonContainer>
          </ContentColumn>
          <ImageColumn>
            <GatsbyImage image={aboutImg} alt=""></GatsbyImage>
          </ImageColumn>
          <EmptyColumn></EmptyColumn>
        </TwoColumn>
      </ContentContainer>
      <ContentContainer>
        <Typography variant="h2">Events</Typography>
        <Underline />
        <EventText variant="linkfont" color="secondary2">
          Click to Learn More
        </EventText>
        <EventLink to="/events" style={{ textDecoration: 'none' }}>
          <EventPane>
            <EventBar>
              {text.events.map((e, i) => {
                return (
                  <EventItem key={i}>
                    <EventTitle variant="h5" color="secondary2">
                      {e.title}
                    </EventTitle>
                    <EventDate>
                      <Typography variant="h6" color="secondary2">
                        {e.month}
                      </Typography>
                      <Typography variant="h6" color="secondary2">
                        {e.day}
                      </Typography>
                    </EventDate>
                  </EventItem>
                );
              })}
            </EventBar>
          </EventPane>
        </EventLink>
      </ContentContainer>
      <ContentContainer>
        <TwoColumn spacing={40}>
          <ContentColumn>
            <Typography variant="h6" color="secondary2">
              Philanthropy
            </Typography>
            <Typography variant="h2">{text.index.philanthropyTitle}</Typography>
            <Underline />
            <TextContainer>{text.index.philanthropyText}</TextContainer>
            <ButtonContainer>
              <Link to="/philanthropy">
                <StyledButton>Learn more</StyledButton>
              </Link>
            </ButtonContainer>
          </ContentColumn>
          <ImageColumn>
            <GatsbyImage image={philanthropyImg} alt=""></GatsbyImage>
          </ImageColumn>
          <EmptyColumn></EmptyColumn>
        </TwoColumn>
      </ContentContainer>
    </Layout>
  );
};

export default BlackoutPage;

export const query = graphql`
  query IndexPageQuery {
    backgroundData: file(
      name: { eq: "background" }
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: "misc" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    themeData: file(
      name: { eq: "theme" }
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: "misc" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    aboutData: file(
      name: { eq: "about" }
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: "misc" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    philanthropyData: file(
      name: { eq: "philanthropy" }
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: "misc" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    instagramData: file(
      name: { eq: "instagram-logo" }
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: "icons" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    youtubeData: file(
      name: { eq: "youtube-logo" }
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: "icons" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    facebookData: file(
      name: { eq: "facebook-logo" }
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: "icons" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    blurredBackgroundData: file(
      name: { eq: "blurred-background" }
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: "misc" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;
