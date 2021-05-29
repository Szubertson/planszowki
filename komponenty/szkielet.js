import styled from "styled-components";

import Menu from "./menu";
import Stopka from "./stopka";

const Kontener = styled.div`
  padding: 12px 64px;
  margin-bottom: 24px;
`;

const Uklad = styled.div`
  display: grid;
  grid-template-rows: 80px auto 60px;
  height: 100vh;
  @media (max-width: 900px) {
    margin-top: 64px;
    grid-template-rows: auto 60px;
  }
`;

const Szkielet = ({ widok, children, pokazStopke = true }) => {
  return (
    <Uklad>
      <Menu widok={widok} />
      <Kontener>{children}</Kontener>

      {pokazStopke ? <Stopka /> : null}
    </Uklad>
  );
};

export default Szkielet;
