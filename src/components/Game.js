import React, { useContext } from "react";
import Context from "../contexts/Context";
import Board from "./Board";
import Button from "./Button";
import Timer from "./Timer";
import LevelErea from "./LevelErea";

function Game() {
  const { state } = useContext(Context);

  return (
    <div id="wrapeer">
      <div id="container" style={{ width: state.width }}>
        <Timer />
        <Board />
        <Button />
      </div>
      <LevelErea />
    </div>
  );
}

export default Game;
