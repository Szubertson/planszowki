import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Godzina from "./zegar";
import Link from "next/link";
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";
import { gry } from "../dane/gry";
import { MenuOutline } from "@styled-icons/evaicons-outline/MenuOutline";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { useRouter } from "next/router";
const Strzalka = styled(DownArrow)`
  height: 16px;
`;
const Kontener = styled.div`
  width: 100vw;
  padding: 12px;
  background-color: #daeaf6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 100px;

  @media (max-width: 900px) {
    display: ${({ expanded }) => (expanded ? "flex" : "none")};
    height: 100vh;
    width: 100vw;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;

    & ul {
      flex-direction: column;
      align-items: center;

      & li {
        margin: 12px 0;
      }
    }
  }
`;

const CloseIcon = styled(CloseOutline)`
  width: 40px;
  position: fixed;
  top: 16px;
  left: 16px;
  padding: 4px;
  background: #daeaf6;
  display: none;
  color: #fe0b93;
  border-radius: 50%;
  cursor: pointer;
  @media (max-width: 900px) {
    display: block;
  }
`;

const HamburgerMenu = styled(MenuOutline)`
  width: 40px;
  position: fixed;
  top: 16px;
  left: 16px;
  padding: 4px;
  background: #daeaf6;
  display: none;
  color: #fe0b93;
  border-radius: 50%;
  cursor: pointer;
  @media (max-width: 900px) {
    display: block;
  }
`;

const Lista = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const ElementListy = styled.li`
  margin-left: 24px;
  font-weight: 600;
  transition: all 0.2s;
  cursor: pointer;
  color: ${(props) => (props.aktywny ? "#ff008e" : "black")};
  &:hover {
    color: #ff008e;
  }
`;

const RozwijanaLista = styled.li`
  margin-left: 24px;
  font-weight: 600;
  transition: all 0.2s;
  cursor: pointer;
  color: ${(props) => (props.aktywny ? "#ff008e" : "black")};
  position: relative;
  &:hover {
    & ul {
      display: block;
    }
  }

  & ul {
    display: none;
    position: absolute;
    top: 18;
    list-style: none;
    width: max-content;
    padding: 0 8px;

    background-color: #daeaf6;
    & li {
      width: 100%;
      text-align: left;
      margin: 6px 0;

      &:hover {
        color: #ff008e;
      }
    }
  }
`;

const Odwiedziny = styled.span`
  font-weight: bold;
  span {
    font-size: 18px;
    color: #ff008e;
  }

  @media (max-width: 1000px) {
    font-size: 14px;

    span {
      font-size: 15px;
    }
  }
`;

const Menu = (props) => {
  const router = useRouter();
  console.log(router);
  const [expanded, setExpanded] = useState(false);
  const [count, setCount] = useState(0);

  const fetchCount = async () => {
    const result = await axios.get(
      "https://api.countapi.xyz/update/planszowki/planszowki?amount=1"
    );

    setCount(result.data.value);
    return result.data.value;
  };

  useEffect(() => {
    fetchCount();
  }, []);
  return (
    <>
      <Kontener expanded={expanded}>
        <Lista>
          <ElementListy aktywny={props.widok === "główna"}>
            <Link href="/">Strona główna</Link>
          </ElementListy>
          <RozwijanaLista>
            Gry Planszowe <Strzalka />
            <ul>
              {gry.map((gra) => {
                return (
                  <li key={gra.id}>
                    <Link href={`/gry/${gra.id}`}>{gra.tytul}</Link>
                  </li>
                );
              })}
            </ul>
          </RozwijanaLista>
          <ElementListy aktywny={props.widok === "formularz"}>
            <Link href="/formularz">Formularz</Link>
          </ElementListy>
          <ElementListy aktywny={props.widok === "prezentacja"}>
            <Link href="/prezentacja">Prezentacja</Link>
          </ElementListy>
          <ElementListy aktywny={props.widok === "kontakt"}>
            <Link href="/kontakt">Kontakt</Link>
          </ElementListy>
          <ElementListy aktywny={props.widok === "zrodla"}>
            <Link href="/zrodla">Źródła</Link>
          </ElementListy>
          <ElementListy aktywny={props.widok === "canvas"}>
            <Link href="/canvas">Canvas</Link>
          </ElementListy>
        </Lista>
        <Godzina />
        <Odwiedziny>
          Liczba odwiedzin <span>{count}</span>{" "}
        </Odwiedziny>
      </Kontener>
      {expanded ? (
        <CloseIcon onClick={() => setExpanded(false)} />
      ) : (
        <HamburgerMenu onClick={() => setExpanded(true)} />
      )}
    </>
  );
};

export default Menu;
