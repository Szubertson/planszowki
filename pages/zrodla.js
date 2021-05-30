import React from "react";
import Szkielet from "../komponenty/szkielet";
import styled from "styled-components";

const Kontener = styled.div`
  text-align: center;

  & a {
    color: #ff008e;
    text-decoration: underline;
  }
`;
const Zrodla = () => {
  return (
    <Szkielet pokazStopke={false} widok="zrodla">
      <Kontener>
        <h1>Źródła</h1>
        <p style={{ maxWidth: "500px", margin: "0 auto" }}>
          {" "}
          Strona internetowa powstała za pomocą biblioteki języka programowania
          JavaScript "react.js". Wykorzystuje technologie: "html", "CSS",
          "JavaScript". Forma wykonania strony internetowej została
          skonsultowana z wykładowcą, który wyraził zgodę na zastosowanie
          opisanej wyżej technologii na pierwszych zajęciach.
        </p>
        <p>
          React,dokumentacja{" "}
          <a
            target="_blank"
            href="https://pl.reactjs.org/docs/hello-world.html"
          >
            link
          </a>
        </p>
        <p>
          React,samouczek{" "}
          <a
            target="_blank"
            href="https://pl.reactjs.org/tutorial/tutorial.html"
          >
            link
          </a>
        </p>
        <p>
          Dane o grach planszowych:{" "}
          <a target="_blank" href="https://boardgamegeek.com/">
            link
          </a>
        </p>
      </Kontener>
    </Szkielet>
  );
};

export default Zrodla;
