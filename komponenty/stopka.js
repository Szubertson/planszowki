import React from "react";
import styled from "styled-components";

const Kontener = styled.div`
  background-color: #daeaf6;

  padding: 12px;
  width: 100vw;
  padding-right: 64px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    height: max-content;
  }
`;

const Stopka = () => {
  return (
    <Kontener>
      <span>Kontakt: maciej.szubert@student.put.poznan.pl +48503147481</span>
      <span> Wykonał Maciej Szubert | EN2/L4 144 874</span>
    </Kontener>
  );
};

export default Stopka;
