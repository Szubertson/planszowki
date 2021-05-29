import { useState } from "react";
import Szkielet from "../komponenty/szkielet";
import Label from "../komponenty/label";
import Przycisk from "../komponenty/przycisk";
const Formularz = () => {
  const [ocena, ustawOcene] = useState(1);
  const [mail, ustawMail] = useState("");
  return (
    <Szkielet widok="formularz">
      <h1>Oceń grę</h1>

      <form
        action={`mailto:${mail}`}
        method="POST"
        enctype="multipart/form-data"
      >
        <Label>
          Imię i nazwisko
          <input type="text" placeholder="Janusz Kowalski"></input>
        </Label>
        <Label>
          Wiek
          <input type="number" />
        </Label>
        <Label>
          Email
          <input
            value={mail}
            onChange={(e) => ustawMail(e.target.value)}
            type="email"
            placeholder="janusz@email.com"
          ></input>
        </Label>
        <Label>
          Wybierz grę
          <select>
            <option>7 cudów świata pojedynek</option>
            <option>XCOM Gra Planszowa</option>
            <option>Hero Realms</option>
            <option>Monopoly</option>
            <option>Eurobiznes</option>
          </select>
        </Label>

        <Label>
          <span>
            Twoja ocena gry:
            <span
              style={{
                fontWeight: "bold",
                marginLeft: "6px",
                color: "#FF008E",
              }}
            >
              {ocena}
            </span>
          </span>
          <input
            type="range"
            name="ocena"
            min="1"
            max="10"
            value={ocena}
            onChange={(e) => ustawOcene(e.target.value)}
          />
        </Label>
        <Label>
          Recenzja
          <textarea></textarea>
        </Label>
        <Przycisk type="submit">Wyślij</Przycisk>
      </form>
    </Szkielet>
  );
};

export default Formularz;
