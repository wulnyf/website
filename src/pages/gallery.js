import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import ButtonDropdown from "../components/ButtonDropdown";
import ImageOverlay from "../components/ImageOverlay";
import InnerPage from "../components/InnerPage";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import StyledImage from "../components/StyledImage";
import Typography from "../components/Typography";
import text from "../text";
import convertImgArrToMap from "../utils/convertImgArrToMap";

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
  padding-bottom: 75%;
`;

const StyledLabel = styled(Typography)`
  margin-bottom: 10px;
`;

const MediaLabel = styled(StyledLabel)`
  margin-top: 10px;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
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

const GalleryPage = ({ data }) => {
  const sortedYears = Object.keys(text.gallery).sort((a, b) => b - a);
  const { imgData } = data;
  const { nodes } = imgData;
  const imgDataMap = convertImgArrToMap(nodes);
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(sortedYears[0]);
  const hasPhotos = "photos" in text.gallery[year];
  let initialMedia = "photos";
  if (!hasPhotos) {
    initialMedia = "videos";
  }
  const [media, setMedia] = useState(initialMedia);
  const [pic, setPic] = useState(undefined);

  const handleClick = (pic) => {
    setPic(pic);
    setOpen(true);
  };

  return (
    <Layout>
      <Seo title="Gallery" />
      <InnerPage
        title="Gallery"
        buttons={
          <>
            <StyledLabel variant="subtitle">Year</StyledLabel>
            <ButtonDropdown
              value={year}
              setValue={setYear}
              options={sortedYears.map((p) => ({
                value: p,
                label: p,
              }))}
              active
            />
            <MediaLabel variant="subtitle">Media</MediaLabel>
            {"photos" in text.gallery[year] && (
              <StyledButton white
                onClick={() => setMedia("photos")}
                active={media === "photos"}
              >
                Photo
              </StyledButton>
            )}
            {"videos" in text.gallery[year] && (
              <Button white
                onClick={() => setMedia("videos")}
                active={media === "videos"}
              >
                Video
              </Button>
            )}
          </>
        }
      >
        <Grid>
          {text.gallery[year][media].map((p, i) =>
            media === "photos" ? (
              <ImageContainer key={i}>
                <ImageThumbnail
                  onClick={() => handleClick(p)}
                  image={getImage(imgDataMap[p.image])}
                  alt={p.caption}
                  clickable="true"
                />
              </ImageContainer>
            ) : (
              <VideoContainer key={i}>
                <Video
                  key={i}
                  src={p.link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></Video>
              </VideoContainer>
            )
          )}
        </Grid>
      </InnerPage>
      <ImageOverlay open={open} setOpen={setOpen}>
        {pic && (
          <>
            <OverlayImage
              image={getImage(imgDataMap[pic.image])}
              alt={pic.caption}
              objectFit="contain"
            />

            <Typography variant="p">Caption: {pic.caption}</Typography>
          </>
        )}
      </ImageOverlay>
    </Layout>
  );
};

export default GalleryPage;

export const query = graphql`
  query GalleryPageQuery {
    imgData: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { regex: "/gallery.*/" }
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
