import { injectGlobal } from "@emotion/css";

export const globalStyles = injectGlobal`
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");

:root {
  font-size: 62.5%;
}

* {
  box-sizing: border-box;
  color: inherit;
  font: inherit;
}

 html, body {
  padding: 0;
  margin: 0;
  font-family: "Work Sans", sans-serif;
  font-size: 1.6rem;
  box-sizing: inherit;
  min-height: 100vh;
}
`;
