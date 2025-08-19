import React from "react";
import Layout from "../components/Layout";
import InnerPage from "../components/InnerPage";
import text from "../text";
import convertImgArrToMap from "../utils/convertImgArrToMap";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Typography from "../components/Typography";
import FlipCard from "../components/FlipCard";
import FadeInOnScroll from "../components/FadeInOnScroll";
import Seo from "../components/Seo";

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-bottom: 20px;
  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1140px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 70px;
  }
`;

const StyledHeader = styled(Typography)`
  margin-top: 20px;
  margin-bottom: 3px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledTitle = styled(Typography)`
  margin-bottom: 40px;
  :not(:first-child) {
    margin-top: 80px;
  }
`;

const PeoplePage = ({ data }) => {
  const { imgData } = data;
  const { nodes } = imgData;
  const imgDataMap = convertImgArrToMap(nodes);

  return (
    <Layout>
      <Seo title="People" />
      <InnerPage title="People">
        <FadeInOnScroll direction="up" delay={0}>
          <StyledTitle variant="h4">Board of Directors</StyledTitle>
        </FadeInOnScroll>
        <Grid>
          {text.people.bod.map((p, i) => (
            <FadeInOnScroll key={i} direction="up" delay={i * 10}>
              <ImageContainer>
                <FlipCard
                  image={getImage(imgDataMap[p.image])}
                  alt={p.name + " portrait"}
                  major={p.major}
                  zodiac={p.zodiac}
                  facts={p.facts}
                />
                <StyledHeader variant="subtitle">{p.name}</StyledHeader>
                <Typography variant="caption">{p.position}</Typography>
              </ImageContainer>
            </FadeInOnScroll>
          ))}
        </Grid>
        <FadeInOnScroll direction="up" delay={0}>
          <StyledTitle variant="h4">Communications Committee</StyledTitle>
        </FadeInOnScroll>
        <Grid>
          {text.people.comm.map((p, i) => (
            <FadeInOnScroll key={i} direction="up" delay={i * 100}>
              <ImageContainer>
                <FlipCard
                  image={getImage(imgDataMap[p.image])}
                  alt={p.name + " portrait"}
                  major={p.major}
                  zodiac={p.zodiac}
                  facts={p.facts}
                />
                <StyledHeader variant="subtitle">{p.name}</StyledHeader>
                <Typography variant="caption">{p.position}</Typography>
              </ImageContainer>
            </FadeInOnScroll>
          ))}
        </Grid>
        <FadeInOnScroll direction="up" delay={0}>
          <StyledTitle variant="h4">Development Committee</StyledTitle>
        </FadeInOnScroll>
        <Grid>
          {text.people.dev.map((p, i) => (
            <FadeInOnScroll key={i} direction="up" delay={i * 100}>
              <ImageContainer>
                <FlipCard
                  image={getImage(imgDataMap[p.image])}
                  alt={p.name + " portrait"}
                  major={p.major}
                  zodiac={p.zodiac}
                  facts={p.facts}
                />
                <StyledHeader variant="subtitle">{p.name}</StyledHeader>
                <Typography variant="caption">{p.position}</Typography>
              </ImageContainer>
            </FadeInOnScroll>
          ))}
        </Grid>
        <FadeInOnScroll direction="up" delay={0}>
          <StyledTitle variant="h4">Performance Committee</StyledTitle>
        </FadeInOnScroll>
        <Grid>
          {text.people.perf.map((p, i) => (
            <FadeInOnScroll key={i} direction="up" delay={i * 100}>
              <ImageContainer>
                <FlipCard
                  image={getImage(imgDataMap[p.image])}
                  alt={p.name + " portrait"}
                  major={p.major}
                  zodiac={p.zodiac}
                  facts={p.facts}
                />
                <StyledHeader variant="subtitle">{p.name}</StyledHeader>
                <Typography variant="caption">{p.position}</Typography>
              </ImageContainer>
            </FadeInOnScroll>
          ))}
        </Grid>
      </InnerPage>
    </Layout>
  );
};

export default PeoplePage;

export const query = graphql`
  query PeoplePageQuery {
    imgData: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "people" }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        name
      }
    }
  }
`;
