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
  background: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%) no-repeat center center fixed;
  box-sizing: inherit;
  color: #fff;
  min-height: 100vh;
}
`;
