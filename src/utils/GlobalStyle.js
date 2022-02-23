import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Open Sans', sans-serif;
}

:root {
  --sm: 1rem;
  --md: 1.2rem;
  --lg: 1.4rem;
  --xl: 2rem;

  /* Black theme */
  --primary-color : #121212;
  --secondary-color: #1e1e1e;
  --font-color: #f1f1f1;
  --action-color: #9259AA;

}
body {
  margin: 0;
  padding: 0;
  background-color: var(--primary-color);
  color: var(--font-color);
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
  font-size: 62.5%;
}
`;