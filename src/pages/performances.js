import React from "react";
import Layout from "../components/Layout";
import InnerPage from "../components/InnerPage";
import text from "../text";
import StyledImage from "../components/StyledImage";
import convertImgArrToMap from "../utils/convertImgArrToMap";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Typography from "../components/Typography";
import Seo from "../components/Seo";

const StyledHeader = styled(Typography)`
  margin-top: 20px;
  margin-bottom: 5px;
`;

const ImageThumbnail = styled(StyledImage)`
  height: 0px;
  padding-bottom: 60%;
  margin-bottom: 10px;
  @media (min-width: 600px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
  @media (min-width: 800px) {
    margin-right: 0px;
    margin-bottom: 10px;
  }
  @media (min-width: 100px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const ImageContainer = styled.div`
  flex-basis: 0;
  flex-grow: 1;
`;

const PerformanceContent = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

const PerformanceContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
  @media (min-width: 800px) {
    flex-direction: column;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const PerformancesPage = ({ data }) => {
  const { imgData } = data;
  const { nodes } = imgData;
  const imgDataMap = convertImgArrToMap(nodes);

  return (
    <Layout>
      <Seo title="Performances" />
      <InnerPage title="Performances">
        {text.performances.map((p, i) => (
          <PerformanceContainer key={i}>
            <ImageContainer>
              <ImageThumbnail
                image={getImage(imgDataMap[p.image])}
                alt={p.title}
              />
            </ImageContainer>
            <PerformanceContent>
              <StyledHeader variant="h6">{p.title}</StyledHeader>
              <Typography>{p.performers.join(", ")}</Typography>
            </PerformanceContent>
          </PerformanceContainer>
        ))}
      </InnerPage>
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
