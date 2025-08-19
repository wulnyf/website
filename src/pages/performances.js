import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import InnerPage from "../components/InnerPage";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import StyledImage from "../components/StyledImage";
import Typography from "../components/Typography";
import text from "../text";
import convertImgArrToMap from "../utils/convertImgArrToMap";
import FadeInOnScroll from "../components/FadeInOnScroll";

const StyledHeader = styled(Typography)`
  /* text-align: center;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center; */

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
  margin-right: 100px;
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
          <FadeInOnScroll key={i} direction="up" delay={i * 15}>
            <PerformanceContainer>
              <ImageContainer>
                <ImageThumbnail
                  image={getImage(imgDataMap[p.image])}
                  alt={p.title}
                />
              </ImageContainer>
              <PerformanceContent>
                <StyledHeader variant="h6">{p.title}</StyledHeader>
                <Typography>
                  {p.performers.map((performer, index) => {
                    const isChoreo = performer.includes("(choreo)");
                    return (
                      <span key={index}>
                        {isChoreo ? <strong>{performer}</strong> : performer}
                        {index < p.performers.length - 1 && ", "}
                      </span>
                    );
                  })}
                </Typography>
              </PerformanceContent>
            </PerformanceContainer>
          </FadeInOnScroll>
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
