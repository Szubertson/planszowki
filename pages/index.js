import Szkielet from "../komponenty/szkielet";
import styled from "styled-components";
import { useState } from "react";
import { gry } from "../dane/gry";
import Link from "next/link";
const Text = styled.p`
  max-width: 800px;
`;

const Niebieski = styled.span`
  color: #fa239d;
  cursor: pointer;
`;

const Wyszukiwarka = styled.form`
  border: 1px solid black;
  padding: 24px;
  max-width: 600px;
  width: 100%;

  & input,
  select {
    width: 100%;
    padding: 6px 12px;
    margin: 6px 0;
  }

  & button {
    padding: 6px 24px;
    margin-top: 12px;
    cursor: pointer;
  }
`;

const Obrazek = styled.img`
  width: 400px;
  height: 260px;
`;

export default function Home() {
  const [wiek, ustawWiek] = useState();
  const [minCzas, ustawMinCzas] = useState();
  const [maxCzas, ustawMaxCzas] = useState();

  const [maksTrudnosc, ustawTrudnosc] = useState();
  const [lista, ustawListe] = useState(gry);
  const wszystkieGatunki = gry.flatMap((gra) => {
    return gra.gatunek.split(",");
  });
  const gatunki = [...new Set(wszystkieGatunki)];
  const [wydawca, ustawWydawce] = useState("wszyscy");
  const [gatunek, ustawGatunek] = useState("wszystkie");

  // console.log(gatunki);
  const stworzTablice = () => {
    return lista.map((gra) => {
      return (
        <tr key={gra.id}>
          <td>{gra.tytul}</td>
          <td>{gra.minWiek}</td>
          <td align="center" colSpan="2">
            {gra.minCzas} - {gra.maxCzas} min{" "}
          </td>

          <td>{gra.wydawca}</td>
          <td>{gra.gatunek}</td>
          <td>{gra.ocena} / 10</td>
          <td>{gra.trudnosc} / 5</td>
          <td>
            <Link href={`/gry/${gra.id}`}>
              <Niebieski>kliknij tutaj</Niebieski>
            </Link>
          </td>
        </tr>
      );
    });
  };

  const wyszukaj = (e) => {
    e.preventDefault();
    let nowaLista = gry;

    if (wiek) {
      nowaLista = nowaLista.filter((gra) => {
        return gra.minWiek >= wiek;
      });
    }

    if (minCzas) {
      nowaLista = nowaLista.filter((gra) => {
        return gra.minCzas >= minCzas;
      });
    }

    if (maxCzas) {
      nowaLista = nowaLista.filter((gra) => {
        return gra.maxCzas <= maxCzas;
      });
    }

    if (maksTrudnosc) {
      nowaLista = nowaLista.filter((gra) => {
        return gra.trudnosc <= maksTrudnosc;
      });
    }

    if (gatunek !== "wszystkie") {
      nowaLista = nowaLista.filter((gra) => {
        const gatunki = gra.gatunek.split(",");
        return gatunki.indexOf(gatunek) > -1;
      });
    }

    if (wydawca !== "wszyscy") {
      nowaLista = nowaLista.filter((gra) => {
        return gra.wydawca === wydawca;
      });
    }

    ustawListe(nowaLista);
  };

  const resetujListe = () => {
    // ustawWiek();
    // ustawGatunek();
    // ustawTrudnosc();
    // ustawMinCzas();
    // ustawMaxCzas();

    ustawListe(gry);
  };

  return (
    <Szkielet widok="główna">
      <h1>Gry Planszowe</h1>
      <Text>
        Gry planszowe w ostatnich latach wracają do łask, ponieważ stanowią one
        atrakcyjną alternatywę spędzenia wolnego czasu. Do poziomu popularności
        z poprzedniego wieku jeszcze im daleko, ale wyniki sprzedaży mogą
        napawać optymizmem producentów. Granie w gry planszowe to możliwość
        wchodzenia w bezpośrednie interakcje z graczami, rozwijanie umiejętności
        logicznego myślenia i przede wszystkim dobra zabawa bez konieczności
        łączenia się z Internetem. W ostatnich latach na popularyzację gier
        planszowych wpłynęło przede wszystkim zwiększenie ich dostępności oraz
        szeroka oferta produktowa. Na polskim rynku istnieje blisko 60 wydawców
        gier planszowych, którzy rocznie wydają łącznie ponad 500 gier. Oferta
        gier jest bardzo bogata, a wśród nich mocno wyróżnia się kategoria gier
        towarzyskich.
      </Text>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Nazwa gry</th>
            <th>Minimalny wiek</th>
            <th>Minimalny czas gry</th>
            <th>Maksymalny czas gry</th>
            <th>Wydawca</th>
            <th>Gatunek</th>
            <th>Ocena</th>
            <th>Trudność</th>
            <th>Szczegóły</th>
          </tr>
        </thead>
        <tbody>{stworzTablice()}</tbody>
      </table>

      <h2>Wyszukiwarka gier (Konwerter)</h2>
      <Wyszukiwarka onSubmit={wyszukaj}>
        <input
          type="number"
          placeholder="minimalny wiek"
          value={wiek}
          onChange={(e) => ustawWiek(e.target.value)}
        />
        <div style={{ display: "flex" }}>
          <input
            type="number"
            placeholder="minimalny czas gry"
            value={minCzas}
            onChange={(e) => ustawMinCzas(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="number"
            placeholder="maksymalny czas gry"
            value={maxCzas}
            onChange={(e) => ustawMaxCzas(e.target.value)}
          />
        </div>
        <span>Wydawca</span>
        <select onChange={(e) => ustawWydawce(e.target.value)} value={wydawca}>
          {gry.map((gra) => {
            return (
              <option key={gra.id} value={gra.wydawca}>
                {gra.wydawca}
              </option>
            );
          })}
          <option value="wszyscy">Wszyscy wydawcy</option>
        </select>
        <span>Gatunek</span>
        <select onChange={(e) => ustawGatunek(e.target.value)} value={gatunek}>
          {gatunki.map((gatunek) => (
            <option key={gatunek} value={gatunek}>
              {gatunek}
            </option>
          ))}
          <option value="wszystkie">Wszystkie gatunki</option>
        </select>
        <input
          type="number"
          placeholder="maksymalna trudność"
          onChange={(e) => ustawTrudnosc(e.target.value)}
        />
        <button type="submit">Szukaj</button>
        <button
          style={{ marginLeft: "12px" }}
          type="button"
          onClick={resetujListe}
        >
          {" "}
          Resetuj
        </button>
      </Wyszukiwarka>
      <p style={{ maxWidth: "500px" }}>
        Dużą rolę w promocji współczesnych gier planszowych miały komiksy, takie
        jak seria Marvel oraz filmy wyprodukowane przez Marvel Cinematic
        Universe. Poniżej przedstawiam 5 najpopularniejszych postaci uniwersum
        Marvela. Dzięki znacznikowi MAP po kliknięciu na konkretnego bohatera
        zostaniemy przeniesieni na stronę z informacjami o nim
      </p>

      <map name="marvel">
        <area
          shape="rect"
          target="_blank"
          coords="-1, -2, 148, 106"
          href="https://pl.wikipedia.org/wiki/Thor_(Marvel)"
          title="new"
          alt=""
        ></area>
        <area
          shape="rect"
          target="_blank"
          coords="2, 138, 96, 263"
          href="https://pl.wikipedia.org/wiki/Scarlet_Witch"
          target="_blank"
        ></area>
        <area
          shape="rect"
          target="_blank"
          coords="266, 106, 393, 257"
          href="https://pl.wikipedia.org/wiki/Iron_Man"
          target="_blank"
        />
        <area
          shape="rect"
          target="_blank"
          coords="186, 1, 397, 103"
          href="https://pl.wikipedia.org/wiki/Spider-Man"
          target="_blank"
        ></area>
        <area
          shape="rect"
          target="_blank"
          coords="99, 103, 265, 253"
          href="https://pl.wikipedia.org/wiki/Kapitan_Ameryka"
          terget="_blank"
        ></area>
      </map>
      <img
        style={{ width: "400px", height: "260px" }}
        useMap="#marvel"
        src="https://filmschoolrejects.com/wp-content/uploads/2018/04/the-avengers-comics.jpg"
        alt="avengers image"
      />
    </Szkielet>
  );
}
