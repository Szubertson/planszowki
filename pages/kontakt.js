import React from "react";
import Szkielet from "../komponenty/szkielet";
import styled from "styled-components";
const Kontakt = () => {
  return (
    <Szkielet pokazStopke={false} widok="kontakt">
      <div style={{ textAlign: "center" }}>
        <h1>Informacje kontaktowe</h1>
        <p>strona wykonana przez Macieja Szuberta</p>
        <p>Adres: Rumiankowa 1,Skórzewo</p>
        <p>Telefon: +48 503 147 481</p>
        <p>Email:</p>
        szubertmaciej@onet.pl<p>maciej.szubert@student.put.poznan.pl</p>
        <p>Uczelnia: Politechnika Poznańska</p>
        <p>Wydział Iniżynierii Środowiska i Energetyki</p>
        <p>Kierunek: Energetyka</p>
        <p>Grupa dziekańska: EN2</p>
        <p>Semestr IV</p>
        <p>Nr albumu: 144 874</p>
      </div>
    </Szkielet>
  );
};

export default Kontakt;
