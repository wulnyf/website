import React, { useState } from "react";
import Layout from "../components/Layout";
import InnerPage from "../components/InnerPage";
import Button from "../components/Button";
import Typography from "../components/Typography";
import StyledImage from "../components/StyledImage";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import convertImgArrToMap from "../utils/convertImgArrToMap";
import ButtonDropdown from "../components/ButtonDropdown";
import text from "../text";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledCaption = styled(Typography)`
  margin-bottom: 20px;
`;

const StyledHeader = styled(Typography)`
  margin-top: 40px;
  margin-bottom: 10px;
`;

const StyledLabel = styled(Typography)`
  margin-bottom: 10px;
`;

const StyledAnchor = styled.a`
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
`;

const VideoContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  border: ${({ theme }) => theme.decoration.border};
  box-shadow: ${({ theme }) => theme.decoration.boxShadow};
`;

const Video = styled.iframe`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const PhilanthropyPage = ({ data }) => {
  const { imgData } = data;
  const { nodes } = imgData;
  const imgDataMap = convertImgArrToMap(nodes);
  const [year, setYear] = useState(
    Object.keys(text.philanthropy).sort((a, b) => b - a)[0]
  );
  const img = getImage(imgDataMap[text.philanthropy[year].image]);
  return (
    <Layout>
      <Seo title="Philanthropy" />
      <InnerPage
        title="Philanthropy"
        buttons={
          <>
            <StyledLabel variant="subtitle">Year</StyledLabel>
            <ButtonDropdown
              value={year}
              setValue={setYear}
              options={Object.keys(text.philanthropy)
                .sort((a, b) => b - a)
                .map((p) => ({
                  value: p,
                  label: p,
                }))}
              active
            />
          </>
        }
      >
        {text.philanthropy[year].image && (
          <StyledImage
          image={img}
          alt={text.philanthropy[year].title}
          ></StyledImage>
        )}
        {text.philanthropy[year].video && (
          <VideoContainer>
          <Video
            src={text.philanthropy[year].video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Video>
        </VideoContainer>
        )}
        <StyledHeader variant="h4">
          {text.philanthropy[year].title}
        </StyledHeader>
        {text.philanthropy[year].money && (
          <StyledCaption variant="caption">
            Money Raised: {text.philanthropy[year].money}
          </StyledCaption>
        )}
        <Typography>{text.philanthropy[year].description}</Typography>
        <StyledAnchor
          target="_blank"
          href={text.philanthropy[year].link}
          rel="noopener noreferrer"
        >
          <Button white>See More</Button>
        </StyledAnchor>
      </InnerPage>
    </Layout>
  );
};

export default PhilanthropyPage;

export const query = graphql`
  query PhilanthropyPageQuery {
    imgData: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "philanthropy" }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
        name
      }
    }
  }
`;
