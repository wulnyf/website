import React, { useState } from "react";
import Layout from "../components/Layout";
import InnerPage from "../components/InnerPage";
import text from "../text";
import StyledImage from "../components/StyledImage";
import convertImgArrToMap from "../utils/convertImgArrToMap";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Typography from "../components/Typography";
import ImageOverlay from "../components/ImageOverlay";
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-bottom: 20px;
  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StyledHeader = styled(Typography)`
  margin-top: 20px;
`;

const OverlayHeader = styled(Typography)`
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const OverlayImage = styled(GatsbyImage)`
  align-self: center;
  margin-bottom: 20px;
`;

const ImageThumbnail = styled(StyledImage)`
  height: 0px;
  padding-bottom: 125%;
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
  const [person, setPerson] = useState(text.people.bod[0]);
  const [open, setOpen] = useState(false);

  const handleClick = (person) => {
    setPerson(person);
    setOpen(true);
  };
  return (
    <Layout>
      <Seo title="People" />
      <InnerPage title="People">
        <StyledTitle variant="h4">Board of Directors</StyledTitle>
        <Grid>
          {text.people.bod.map((p, i) => (
            <ImageContainer key={i}>
              <ImageThumbnail
                onClick={() => handleClick(p)}
                image={getImage(imgDataMap[p.image])}
                alt={p.name + " portrait"}
                clickable="true"
              />
              <StyledHeader variant="subtitle">{p.name}</StyledHeader>
              <Typography variant="caption">{p.position}</Typography>
            </ImageContainer>
          ))}
        </Grid>
        <StyledTitle variant="h4">Communications Committee</StyledTitle>
        <Grid>
          {text.people.comm.map((p, i) => (
            <ImageContainer key={i}>
              <ImageThumbnail
                onClick={() => handleClick(p)}
                image={getImage(imgDataMap[p.image])}
                alt={p.name + " portrait"}
                clickable="true"
              />
              <StyledHeader variant="subtitle">{p.name}</StyledHeader>
              <Typography variant="caption">{p.position}</Typography>
            </ImageContainer>
          ))}
        </Grid>
        <StyledTitle variant="h4">Development Committee</StyledTitle>
        <Grid>
          {text.people.dev.map((p, i) => (
            <ImageContainer key={i}>
              <ImageThumbnail
                onClick={() => handleClick(p)}
                image={getImage(imgDataMap[p.image])}
                alt={p.name + " portrait"}
                clickable="true"
              />
              <StyledHeader variant="subtitle">{p.name}</StyledHeader>
              <Typography variant="caption">{p.position}</Typography>
            </ImageContainer>
          ))}
        </Grid>
        <StyledTitle variant="h4">Performance Committee</StyledTitle>
        <Grid>
          {text.people.perf.map((p, i) => (
            <ImageContainer key={i}>
              <ImageThumbnail
                onClick={() => handleClick(p)}
                image={getImage(imgDataMap[p.image])}
                alt={p.name + " portrait"}
                clickable="true"
              />
              <StyledHeader variant="subtitle">{p.name}</StyledHeader>
              <Typography variant="caption">{p.position}</Typography>
            </ImageContainer>
          ))}
        </Grid>
      </InnerPage>
      <ImageOverlay open={open} setOpen={setOpen}>
        <OverlayImage
          image={getImage(imgDataMap[person.image])}
          alt={person.name}
          objectFit="contain"
        />
        <OverlayHeader variant="h4">{person.name}</OverlayHeader>
        <Typography variant="p">Position: {person.position}</Typography>
        <Typography variant="p">Major: {person.major}</Typography>
        <Typography variant="p">Zodiac Animal: {person.zodiac}</Typography>
        <Typography variant="p">
          What LNYF means to you: {person.lnyf}
        </Typography>
        <Typography variant="p">
          Favorite Asian Treat: {person.favTreat}
        </Typography>
      </ImageOverlay>
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
