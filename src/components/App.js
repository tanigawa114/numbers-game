import React, { useReducer } from "react";
import reducer from "../reducers/reducer";
import "../App.css";
import Context from "../contexts/Context";
import Game from "./Game";
import Timer from "../Timer";

function App() {
  /**
   * 初期化
   */
  const initialState = {
    time: new Timer(),
    level: 4,
    panels: [],
    width: 0,
    levels: [1, 2, 3, 4, 5],
  };

  for (let i = 1; i <= (initialState.level + 1) ** 2; i++) {
    initialState.panels.push({ num: "", isPressed: true });
  }

  const getWidth = () => {
    const PANEL_WIDTH = 50;
    const BOARD_PADDING = 10;
    /* 50px * 2 + 10px * 2 */
    return PANEL_WIDTH * (initialState.level + 1) + BOARD_PADDING * 2 + "px";
  };
  initialState.width = getWidth();

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Game />
    </Context.Provider>
  );
}

export default App;
