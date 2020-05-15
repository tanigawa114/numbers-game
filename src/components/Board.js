import React, { useContext } from "react";
import Context from "../contexts/Context";
import Panel from "./Panel";

function Board() {
  const { state } = useContext(Context);
  return (
    <ul id="board">
      {state.panels.map((panel, index) => {
        return <Panel key={index} panel={panel} />;
      })}
    </ul>
  );
}

export default Board;
