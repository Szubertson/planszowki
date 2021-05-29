import { useState } from "react";
import styled from "styled-components";

const Godzina = styled.p`
  color: #ff008e;
  font-size: 26px;
  font-weight: bold;

  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

const Zegar = () => {
  const [godzina, ustawGodzine] = useState(
    `${new Date().getHours()}:${new Date()
      .getMinutes()
      .toLocaleString("pl-PL", {
        minimumIntegerDigits: 2,
      })}:${new Date().getSeconds().toLocaleString("pl-PL", {
      minimumIntegerDigits: 2,
    })}`
  );

  setInterval(() => {
    ustawGodzine(
      `${new Date().getHours()}:${new Date()
        .getMinutes()
        .toLocaleString("pl-PL", {
          minimumIntegerDigits: 2,
        })}:${new Date().getSeconds().toLocaleString("pl-PL", {
        minimumIntegerDigits: 2,
      })}`
    );
  }, 1000);
  return <Godzina>{godzina}</Godzina>;
};

export default Zegar;
