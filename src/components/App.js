import * as React from "react";
import { useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import theme from "../theme";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    color: ${theme.palette.font};
    background-color: ${theme.palette.background};
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  
  #___gatsby, #gatsby-focus-wrapper {
    min-height: 100vh;
    width: 100%;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    background: transparent;
  }
  
  /* Smooth page transitions */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  /* Smooth scrolling for anchor links */
  html {
    scroll-behavior: smooth;
  }
`;

const App = ({ children }) => {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyGJmfDWS7TK1GgUKuGERfDMaQgXMflQ891UuePGAWs9B9jPr3f4XX0Bz5Oq0ZxO3e_/exec";
    const form = document.forms["submit-to-google-sheet"];
    const msg = document.getElementById("msg")

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          msg.innerHTML = "Thank you for joining our newsletter!";
          console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
      });
    }
  }, []);
  return (
    <>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/72c3563c4d.js"
          crossorigin="anonymous"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-mVc6WkTgYhCqS38+RtVJZsYvc+ePAc47OZbcMJeUjDXy7STy4okg2hgb4C+9vKQ7xzA0+7pGHxMIV+Fe2MZ1Nw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

      </Helmet>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default App;
