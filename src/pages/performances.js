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
    grid-template-columns: 1fr;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledHeader = styled(Typography)`
  margin-top: 20px;
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

const OverlayHeader = styled(Typography)`
  margin-bottom: 20px;
`;

const ImageThumbnail = styled(StyledImage)`
  height: 0px;
  padding-bottom: 75%;
`;

const PerformancesPage = ({ data }) => {
  const { imgData } = data;
  const { nodes } = imgData;
  const imgDataMap = convertImgArrToMap(nodes);
  const [performance, setPerformance] = useState(text.performances[0]);
  const [open, setOpen] = useState(false);

  const handleClick = (performance) => {
    setPerformance(performance);
    setOpen(true);
  };
  return (
    <Layout>
      <Seo title="Performances" />
      <InnerPage title="Performances">
        <Grid>
          {text.performances.map((p, i) => (
            <ImageContainer key={i}>
              <ImageThumbnail
                onClick={() => handleClick(p)}
                image={getImage(imgDataMap[p.image])}
                alt={p.title}
                clickable="true"
              />
              <StyledHeader variant="subtitle">{p.title}</StyledHeader>
            </ImageContainer>
          ))}
        </Grid>
      </InnerPage>
      <ImageOverlay open={open} setOpen={setOpen}>
        <OverlayImage
          image={getImage(imgDataMap[performance.image])}
          alt={performance.title}
          objectFit="contain"
        />
        <OverlayHeader variant="h4">{performance.title}</OverlayHeader>
        <Typography variant="p">
          Performers: {performance.performers.join(", ")}
        </Typography>
      </ImageOverlay>
    </Layout>
  );
};

export default PerformancesPage;

export const query = graphql`
  query PerformancesPageQuery {
    imgData: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "performances" }
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
