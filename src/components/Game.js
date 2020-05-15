import React, { useContext } from "react";
import Context from "../contexts/Context";
import Board from "./Board";
import Button from "./Button";
import Timer from "./Timer";

function Game() {
  const { state } = useContext(Context);

  const getWidth = () => {
    const PANEL_WIDTH = 50;
    const BOARD_PADDING = 10;
    /* 50px * 2 + 10px * 2 */
    return PANEL_WIDTH * state.level + BOARD_PADDING * 2 + "px";
  };

  return (
    <>
      <div id="container" style={{ width: getWidth() }}>
        <Timer />
        <Board />
        <Button />
      </div>
    </>
  );
}

export default Game;
