import styled from "styled-components";
import { gry } from "../../dane/gry";
import Szkielet from "../../komponenty/szkielet";
import { useRouter } from "next/router";

//ikony
import { PeopleFill } from "@styled-icons/bootstrap/PeopleFill";
import { TimeFive } from "@styled-icons/boxicons-solid/TimeFive";
import { Child } from "@styled-icons/fa-solid/Child";
const Gra = () => {
  const router = useRouter();
  const { gra } = router.query;
  console.log(gra);

  // filtrowanie wszystkich planszowek
  const planszowka = gry.filter((x) => {
    if (x.id == gra) {
      return true;
    } else {
      return false;
    }
  })[0];

  const Opis = styled.p`
    max-width: 800px;
    width: 100%;
    margin-bottom: 32px;
    border-right: 3px solid #daeaf6;
    padding-right: 48px;

    @media (max-width: 700px) {
      border-right: 0px;
      padding-right: 0;
      border-bottom: 3px solid #daeaf6;
      padding-bottom: 32px;
      margin-bottom: 12px;
    }
  `;

  const Zdjecie = styled.img`
    max-width: 500px;
    width: 100%;
  `;

  const Czas = styled(TimeFive)`
    width: 25px;
    color: #ff008e;
    margin-right: 12px;
  `;

  const Ludzie = styled(PeopleFill)`
    color: #ff008e;
    width: 25px;
    margin-right: 12px;
  `;

  const Wiek = styled(Child)`
    color: #ff008e;
    width: 25px;
    margin-right: 12px;
  `;

  const Rzad = styled.div`
    display: flex;

    @media (max-width: 700px) {
      flex-direction: column;
    }
  `;

  const Informacje = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 32px;

    & p {
      display: flex;
      align-items: center;
    }

    @media (max-width: 700px) {
      flex-direction: row;
      margin-left: 0;
      justify-content: space-around;
    }
  `;

  const KupTeraz = styled.a`
    font-weight: bold;
    padding: 8px 24px;
    border-radius: 15px;
    background: #daeaf6;
    transition: all 0.2s;

    &:hover {
      background: #ff008e;
    }
  `;

  return (
    <Szkielet>
      {<h1>{planszowka.tytul}</h1>}
      <Rzad>
        <Opis>{planszowka.opis}</Opis>
        <Informacje>
          <p>
            <Czas /> {planszowka.minCzas} - {planszowka.maxCzas} min
          </p>
          <p>
            <Ludzie /> {planszowka.minGraczy} - {planszowka.maxGraczy} osób
          </p>
          <p>
            <Wiek /> {planszowka.minWiek} lat +
          </p>
        </Informacje>
      </Rzad>
      <Zdjecie src={planszowka.zdj} />
      <p>
        <span style={{ fontWeight: "bold" }}>Gatunek:</span>{" "}
        {planszowka.gatunek}
      </p>

      <KupTeraz target="_blank" href={planszowka.link}>
        Sprawdź oferty
      </KupTeraz>
    </Szkielet>
  );
};

export default Gra;
