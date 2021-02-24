import { css } from "@emotion/css";

function HelloWorld() {
  const header = document.createElement("header");
  const headerStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  header.classList.add(headerStyle);

  const heading = document.createElement("h1");
  const headingStyle = css`
    font-size: 3.2rem;
  `;
  heading.classList.add(headingStyle);
  heading.textContent = "Hello, world";

  header.appendChild(heading);

  return header;
}

export default HelloWorld;
