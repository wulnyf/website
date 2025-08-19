import React, { useState } from "react";
import styled from "styled-components";
import StyledImage from "../components/StyledImage";
import Typography from "../components/Typography";
import { getImage } from "gatsby-plugin-image";

const ImageThumbnail = styled(StyledImage)`
  height: 0px;
  padding-bottom: 100%;
`;

const Wrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 20px;
`;

const Icon = styled.div`
  pointer-events: all;
  cursor: pointer;
`;

const SoldOut = styled.div`
  padding: 3px 10px 5px;
  border-radius: 50px;
  z-index: 50;
  color: white;
  position: absolute;
  top: 8px;
  left: 8px;
  background: ${({ theme }) => theme.palette.alert};
`;

const StyledI = styled.i`
  color: white;
  text-shadow: 0 0 3px ${({ theme }) => theme.palette.background};
`;

const StoreThumbnail = ({
  images,
  imageDataMap,
  clickable,
  onClick,
  soldOut,
}) => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePrev = () => {
    setIndex((prevIndex) => {
      return Math.abs(prevIndex - 1) % images.length;
    });
  };

  const img = getImage(imageDataMap[images[index].image]);
  return (
    <Wrapper>
      {soldOut && (
        <SoldOut>
          <Typography variant="caption">Sold Out</Typography>
        </SoldOut>
      )}
      <ImageThumbnail
        onClick={onClick}
        image={img}
        alt={images[index].alt}
        clickable={clickable}
      />
      {images.length > 1 && (
        <IconWrapper>
          <Icon onClick={handlePrev}>
            <StyledI className="fas fa-chevron-left"></StyledI>
          </Icon>
          <Icon onClick={handleNext}>
            <StyledI className="fas fa-chevron-right"></StyledI>
          </Icon>
        </IconWrapper>
      )}
    </Wrapper>
  );
};

export default StoreThumbnail;
