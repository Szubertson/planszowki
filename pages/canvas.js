import React from "react";
import Szkielet from "../komponenty/szkielet";
import styled from "styled-components";
import CanvasDraw from "react-canvas-draw";
const Canvas = () => {
  return (
    <Szkielet pokazStopke={false} widok="canvas">
      <div style={{ textAlign: "left" }}>
        <p>Przeiągnij myszką po ekranie i puśc wodze fantazji :)</p>
        <CanvasDraw style={{ border: "1px solid blue" }} />
      </div>
    </Szkielet>
  );
};

export default Canvas;
