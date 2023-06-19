import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledImage = styled(GatsbyImage)`
  border: ${({ theme }) => theme.decoration.border};

  ${({ clickable, theme }) => {
    return (
      (clickable === true || clickable === "true") &&
      `
      cursor: pointer;
      transition: all .3s; 
      &:hover {
        border: ${theme.decoration.borderHover};
        transform: scale(1.03);
      }`
    );
  }}
`;

export default StyledImage;
