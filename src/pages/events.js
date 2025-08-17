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
  min-height: 120px;
  overflow: hidden;
  
  @media (min-width: 600px) {
    min-height: 150px;
  }
  
  @media (max-width: 599px) {
    margin-bottom: 15px;
  }
  
  ${({ clickable }) => clickable && `
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  `}
`;

const EventCaption = styled(Typography)`
  margin-top: 5px;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  min-width: 120px;
  flex-shrink: 0;
  
  @media (min-width: 600px) {
    min-width: 150px;
    padding: 20px 15px;
  }
  
  @media (min-width: 1000px) {
    min-width: 170px;
    padding: 20px 20px;
  }
`;

const EventContent = styled.div`
  margin-top: 0px;
  padding: 5px 15px;
  flex: 1;
  min-width: 0;
  
  @media (min-width: 600px) {
    padding: 5px 20px;
  }
`;

const Description = styled.div`
  margin: 10px 0;
`;

const EventsPage = () => {
  const handleEventClick = (event) => {
    if (event.link) {
      window.open(event.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Layout>
      <Seo title="Events" />
      <InnerPage title="Events">
        {text.events.map((e, i) => {
          const isClickable = !!e.link;
          
          return (
            <EventContainer 
              key={i} 
              clickable={isClickable}
              onClick={() => isClickable && handleEventClick(e)}
            >
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
                  {isClickable && (
                    <Typography 
                      variant="caption" 
                      style={{ 
                        color: '#007bff', 
                        marginTop: '8px',
                        fontSize: '0.85rem',
                        display: 'block'
                      }}
                    >
                      Click to apply →
                    </Typography>
                  )}
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
