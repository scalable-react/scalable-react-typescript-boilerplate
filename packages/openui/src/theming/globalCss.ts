import { injectGlobal } from 'styled-components';

const globalCss = injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    overflow: scroll;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    font-family: Hind,sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #0a0a0a;
    background: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    line-height: inherit;
    cursor: pointer;
  }
`;

export default globalCss;
