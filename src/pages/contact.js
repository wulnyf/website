import React, { useState } from "react";
import Layout from "../components/Layout";
import Typography from "../components/Typography";
import styled from "styled-components";
import Button from "../components/Button";
import InnerPage from "../components/InnerPage";
import Seo from "../components/Seo";

const StyledButton = styled(Button)`
  align-self: flex-start;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ContactSubject = styled.input`
  box-shadow: ${({ theme }) => theme.decoration.boxShadow};
  border: ${({ theme }) => theme.decoration.border};
  padding: 0 17.5px;
  font-size: 14px;
  height: 35px;
  margin: 10px 0 20px;
  font-family: "Open Sans", sans-serif;
  @media (min-width: 600px) {
    padding: 0 25px;
    font-size: 18px;
    height: 50px;
  }
`;

const ContactBody = styled.textarea`
  resize: none;
  box-shadow: ${({ theme }) => theme.decoration.boxShadow};
  border: ${({ theme }) => theme.decoration.border};
  padding: 17.5px 17.5px;
  font-size: 14px;
  margin: 10px 0 20px;
  font-family: "Open Sans", sans-serif;
  @media (min-width: 600px) {
    padding: 25px 25px;
    font-size: 18px;
  }
`;

const ContactPage = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const sendEmail = () => {
    window.location.href = `mailto:wu.lnyf@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <Layout>
      <Seo title="Contact" />
      <InnerPage title="Contact">
        <ContactForm>
          <Typography variant="h6">Subject:</Typography>
          <ContactSubject
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                e.preventDefault();
                sendEmail();
              }
            }}
          />
          <Typography variant="h6">Message:</Typography>
          <ContactBody
            rows={10}
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              sendEmail();
            }}
          >
            Submit
          </StyledButton>
        </ContactForm>
      </InnerPage>
    </Layout>
  );
};

export default ContactPage;
