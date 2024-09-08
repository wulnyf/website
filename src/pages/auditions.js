import React from "react";
import Layout from "../components/Layout";
import Typography from "../components/Typography";
import Underline from "../components/Underline";
import Container from "../components/Container";
import styled from "styled-components";
import Seo from "../components/Seo";
import text from "../text";

const StyledContainer = styled(Container)`
  text-align: center;
  margin-top: 60px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuditionsPage = () => {
  return (
    <Layout>
      <Seo title="Auditions" />
      <StyledContainer>
        <Typography variant="h2">Auditions Schedule</Typography>
        <Underline />
        {text.schedule.content}
      </StyledContainer>
    </Layout>
  );
};

export default AuditionsPage;
