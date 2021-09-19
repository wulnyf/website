import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledImage = styled(GatsbyImage)`
  border: ${({ theme }) => theme.decoration.border};
  box-shadow: ${({ theme }) => theme.decoration.boxShadow};

  ${({ clickable, theme }) => {
    return (
      (clickable === true || clickable === "true") &&
      `
      cursor: pointer;
      &:hover {
        box-shadow: ${theme.decoration.boxShadowHover};
      }`
    );
  }}
`;

export default StyledImage;
