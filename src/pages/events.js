import React from "react";
import styled from "styled-components";
import InnerPage from "../components/InnerPage";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import TwoColumn from "../components/TwoColumn";
import Typography from "../components/Typography";
import text from "../text";

const EventContainer = styled.div`
  box-shadow: ${({ theme }) => theme.decoration.boxShadow};
  border: ${({ theme }) => theme.decoration.border};
  margin-bottom: 20px;
  min-height: 150px;
`;

const EventCaption = styled(Typography)`
  margin-top: 5px;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 20px 20px; */
  min-width: 170px;
`;

const EventContent = styled.div`
  margin-top: 0px;
  padding: 5px 20px;
`;

const Description = styled.div`
  margin: 10px 0;
`;

const EventsPage = () => {
  return (
    <Layout>
      <Seo title="Events" />
      <InnerPage title="Events">
        {text.events.map((e, i) => {
          return (
            <EventContainer key={i}>
              <TwoColumn>
                <DateContainer>
                  <Typography variant="h6">{e.month}</Typography>
                  <Typography variant="h2">{e.day}</Typography>
                </DateContainer>
                <EventContent>
                  <Typography variant="h6">{e.title}</Typography>
                  {e.caption && (
                    <EventCaption variant="caption">{e.caption}</EventCaption>
                  )}
                  <Description>{e.description}</Description>
                </EventContent>
              </TwoColumn>
            </EventContainer>
          );
        })}
      </InnerPage>
    </Layout>
  );
};

export default EventsPage;
