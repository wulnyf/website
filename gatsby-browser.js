import React from "react";
import App from "./src/components/App";

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>;
};
