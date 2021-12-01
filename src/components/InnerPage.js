import React from "react";
import Container from "../components/Container";
import TwoColumn from "../components/TwoColumn";
import Typography from "../components/Typography";
import styled from "styled-components";
import Underline from "../components/Underline";

const StyledContainer = styled(Container)`
  margin-top: 60px;
  padding-top: 30px;
`;

const FilterColumn = styled.div`
  @media (min-width: 800px) {
    flex-basis: 250px;
    flex-shrink: 0;
  }
`;

const FilterContent = styled.div`
  padding: 20px 0;
`;

const ContentColumn = styled.div`
  flex-grow: 1;
`;

const InnerPage = ({ title, buttons, children }) => {
  return (
    <StyledContainer>
      <TwoColumn spacing={40}>
        <FilterColumn>
          <Typography variant="h2">{title}</Typography>
          <Underline />
          <FilterContent>{buttons}</FilterContent>
        </FilterColumn>
        <ContentColumn>{children}</ContentColumn>
      </TwoColumn>
    </StyledContainer>
  );
};

export default InnerPage;
