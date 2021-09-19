import * as React from "react";
import { Link } from "gatsby";
import Typography from "../components/Typography";
import Button from "../components/Button";
import styled from "styled-components";
import Seo from "../components/Seo";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 100px 50px;
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Seo title="404" />
      <Typography variant="h3">Page not found</Typography>
      <Typography>
        Sorry, we couldn't find the page you're looking for.
      </Typography>
      <Link to="/">
        <Button>GO BACK</Button>
      </Link>
    </Wrapper>
  );
};

export default NotFoundPage;
