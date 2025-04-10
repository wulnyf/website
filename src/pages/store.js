import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import ImageOverlay from "../components/ImageOverlay";
import InnerPage from "../components/InnerPage";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import StoreThumbnail from "../components/StoreThumbnail";
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
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StyledHeader = styled(Typography)`
  margin-top: 20px;
  margin-bottom: 5px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StoreGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const StoreGridImageContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
`;

const StoreGridImage = styled(GatsbyImage)`
  width: 100%;
  position: absolute;
`;

const Content = styled.div`
  overflow: scroll;
`;

const StyledCaption = styled(Typography)`
  margin-top: 10px;
  color: ${({ theme }) => theme.palette.alert};
`;

const Subtitle = styled(Typography)`
  margin: 2px 0px 8px;
`;

const StorePage = ({ data }) => {
  const { imgData } = data;
  const { nodes } = imgData;
  const imgDataMap = convertImgArrToMap(nodes);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(0);

  const handleClick = (item) => {
    setItem(item);
    setOpen(true);
  };
  return (
    <Layout>
      <Seo title="Store" />
      <InnerPage
        title="Store"
        buttons={
          <>
            {text.links.store && (
              <a
                href={text.links.store}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Buy Drop 1</Button>
              </a>
            )}
            {text.links.store2 && (
              <a
                href={text.links.store2}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Buy Drop 2</Button>
              </a>
            )}
            {text.store.caption && (
              <StyledCaption variant="caption">
                {text.store.caption}
              </StyledCaption>
            )}
          </>
        }
      >
        <Grid>
          {text.store.items.map((s, i) => (
            <ImageContainer key={i}>
              <StoreThumbnail
                soldOut={s.soldOut}
                images={s.images}
                imageDataMap={imgDataMap}
                onClick={s.subImages ? () => handleClick(i) : undefined}
                clickable={s.subImages ? "true" : "false"}
              />
              <StyledHeader variant="subtitle">{s.title}</StyledHeader>
              <Subtitle variant="caption">{s.subtitle}</Subtitle>
              <Typography variant="caption">{s.price}</Typography>
            </ImageContainer>
          ))}
        </Grid>
      </InnerPage>
      {text.store.items[item].subImages && (
        <ImageOverlay open={open} setOpen={setOpen}>
          <Content>
            <StoreGrid>
              {text.store.items[item].subImages.map((i, x) => (
                <div key={x}>
                  <StoreGridImageContainer>
                    <StoreGridImage
                      image={getImage(imgDataMap[i.image])}
                      alt={i.name}
                    />
                  </StoreGridImageContainer>
                  <Typography>{i.name}</Typography>
                </div>
              ))}
            </StoreGrid>
          </Content>
        </ImageOverlay>
      )}
    </Layout>
  );
};

export default StorePage;

export const query = graphql`
  query StorePageQuery {
    imgData: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "store" }
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
