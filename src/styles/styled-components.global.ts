import { createGlobalStyle, css } from "styled-components";
import theme from "@styles/styled-components.theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Public Sans';
    src: url("/src/fonts/PublicSans-Light.ttf") format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: 'Public Sans';
    src: url("/src/fonts/PublicSans-Regular.ttf") format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: 'Public Sans';
    src: url("/src/fonts/PublicSans-Bold.ttf") format("truetype");
    font-weight: 700;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  ${
    theme.font.root !== 16 &&
    css`
      html {
        font-size: ${String(theme.font.root)}px;
      }
    `
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd,
  ul,
  ol {
    margin: 0;
  }

  ul,
  ol {
    padding: 0;
    list-style: none;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizespeed;
    line-height: 1.5;
    font-family: ${theme.font.stack};
    background-color: ${theme.color.background}
  }

  a {
    text-decoration: none;
  }

  img,
  picture,
  svg {
    display: block;
  }

  img,
  picture {
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  input,
  textarea,
  button {
    padding: 0;
    border: none;
    background-color: transparent;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
