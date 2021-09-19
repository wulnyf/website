import React from "react";
import Layout from "../components/Layout";
import Typography from "../components/Typography";
import Underline from "../components/Underline";
import Container from "../components/Container";
import styled from "styled-components";
import Seo from "../components/Seo";
import text from "../text";

const StyledContainer = styled(Container)`
  margin-top: 60px;
  padding-top: 30px;
`;

const StyledHeader = styled(Typography)`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const AuditionsPage = () => {
  return (
    <Layout>
      <Seo title="Auditions" />
      <StyledContainer>
        <Typography variant="h2">Auditions Schedule</Typography>
        <Underline />
        <StyledHeader variant="h6">Auditions</StyledHeader>
        {text.schedule.auditions}
        <StyledHeader variant="h6">Makeups</StyledHeader>
        {text.schedule.makeups}
      </StyledContainer>
    </Layout>
  );
};

export default AuditionsPage;
