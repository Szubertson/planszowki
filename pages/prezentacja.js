import Szkielet from "../komponenty/szkielet";
import styled from "styled-components";
import { useState } from "react";
import { ciekawostki } from "../dane/ciekawostki";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";

const Tytuł = styled.h1`
  margin-bottom: 32px;
`;

const Przod = styled(ArrowIosForwardOutline)`
  width: 50px;
  cursor: pointer;
  &:hover {
    color: #ff008e;
  }
`;

const Wstecz = styled(ArrowIosForwardOutline)`
  width: 50px;
  transform: rotate(180deg);
  cursor: pointer;
  &:hover {
    color: #ff008e;
  }
`;

const Kontener = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ciekawostka = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.37);
  max-width: 600px;
  width: 100%;
  padding: 24px;
  border-radius: 4px;
`;

const Ciekawostki = styled.div`
  display: flex;
`;

const Prezentacja = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  const doPrzodu = () => {
    if (index + 1 === ciekawostki.length) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const doTyłu = () => {
    if (index - 1 < 0) {
      setIndex(ciekawostki.length - 1);
      return;
    }
    setIndex(index - 1);
  };
  return (
    <Szkielet widok="prezentacja">
      <Kontener>
        <Tytuł> Ciekawostki o grach planszowych</Tytuł>
        <Ciekawostki>
          <Wstecz onClick={doTyłu} />
          <Ciekawostka>{ciekawostki[index].text}</Ciekawostka>

          <Przod onClick={doPrzodu} />
        </Ciekawostki>
      </Kontener>
    </Szkielet>
  );
};

export default Prezentacja;
