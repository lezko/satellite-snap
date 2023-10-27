import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: ${props => props.theme.color.text};
    background-color: ${props => props.theme.color.bg};
    font-family: sans-serif;
    font-size: 1.1rem;
  }
  img {
    max-width: 100%;
  }
  button {
    cursor: pointer;
  }
  input {
    padding: 5px;
  }
  button, input {
    color: inherit;
    background-color: inherit;
    border: none;
    font-size: inherit;
  }
  a, a:visited {
    color: inherit;
  }
  li {
    list-style: none;
  }
  .ant-select-selector {
    border-color: inherit !important;
  }
  .ant-select-selection-item, .ant-select-arrow {
    color: inherit !important;
  }
`;

export default GlobalStyle;