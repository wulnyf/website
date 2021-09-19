import * as React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import TwoColumn from "../components/TwoColumn";
import StyledImage from "../components/StyledImage";
import Underline from "../components/Underline";
import styled from "styled-components";
import Seo from "../components/Seo";
import { graphql, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import text from "../text";
import Waves from "../components/Waves";

const StyledBackgroundImage = styled(BackgroundImage)`
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.8);
`;

const StyledWaves = styled(Waves)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const JumbotronContainer = styled(Container)`
  min-height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 800px) {
    min-height: 650px;
  }
`;

const JumbotronButtons = styled.div`
  margin-top: 20px;
`;

const ContentContainer = styled(Container)`
  padding: 100px 0;
`;

const ContentColumn = styled.div`
  flex-basis: 0px;
  flex-grow: 1;
`;

const ImageColumn = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 0px;
  flex-grow: 1;
`;

const TextContainer = styled.div`
  margin: 20px 0;
  > * {
    margin: 20px 0;
  }
`;

const IndexPage = ({ data }) => {
  const img = getImage(data.backgroundData);
  const themeImg = getImage(data.themeData);
  const aboutImg = getImage(data.aboutData);
  const philanthropyImg = getImage(data.philanthropyData);
  const backgroundImg = convertToBgImage(img);
  return (
    <Layout transparent noWaves>
      <Seo title="Home" />
      <StyledBackgroundImage
        Tag="section"
        {...backgroundImg}
        preserveStackingContext
      >
        <JumbotronContainer>
          <div>
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
            <JumbotronButtons>{text.index.jumbotronButtons}</JumbotronButtons>
          </div>
          <StyledWaves />
        </JumbotronContainer>
      </StyledBackgroundImage>
      <ContentContainer>
        <TwoColumn spacing={40}>
          <ContentColumn>
            <Typography variant="h6" color="secondary2">
              About
            </Typography>
            <Typography variant="h2">What We Do</Typography>
            <Underline />
            <TextContainer>{text.index.aboutText}</TextContainer>
            <Link to="/gallery">
              <Button>GALLERY</Button>
            </Link>
          </ContentColumn>
          <ImageColumn>
            <StyledImage image={aboutImg} alt=""></StyledImage>
          </ImageColumn>
        </TwoColumn>
      </ContentContainer>
      <GatsbyImage image={themeImg} alt="theme"></GatsbyImage>
      <ContentContainer>
        <TwoColumn spacing={40} inverse>
          <ContentColumn>
            <Typography variant="h6" color="secondary2">
              Philanthropy
            </Typography>
            <Typography variant="h2">{text.index.philanthropyTitle}</Typography>
            <Underline />
            <TextContainer>{text.index.philanthropyText}</TextContainer>
            <a
              href={text.index.philanthropyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>SEE MORE</Button>
            </a>
          </ContentColumn>
          <ImageColumn>
            <StyledImage image={philanthropyImg} alt=""></StyledImage>
          </ImageColumn>
        </TwoColumn>
      </ContentContainer>
    </Layout>
  );
};

export default IndexPage;

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
  }
`;
