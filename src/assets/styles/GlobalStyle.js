import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;800&family=Source+Sans+Pro:wght@300;400;600&display=swap');
:root{
    --background-color:#F7F6F2;
    --primary-color:#FAFAFA;
    --button-color-dark:#3F3F44;
    --border-color:#D9CAB3;
    --font-color-light:#393E46;
}
    
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    line-height: 1.4;
    background-color:var(--background-color);
    color:var(--font-color-dark);
  }
  a {
    color: #000;
  }
  ul {
    list-style: none;
  }
  p {
    margin: 5px 0;
    line-height: 1.7;
  }
  img {
    max-width: 100%;
  }



`;
export default GlobalStyle;
