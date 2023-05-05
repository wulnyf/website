import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledImage = styled(GatsbyImage)`
  border: ${({ theme }) => theme.decoration.border};

  ${({ clickable, theme }) => {
    return (
      (clickable === true || clickable === "true") &&
      `
      cursor: pointer;
      &:hover {
        border: ${theme.decoration.borderHover};
      }`
    );
  }}
`;

export default StyledImage;
