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
    level: 5,
    panels: [],
  };
  for (let i = 1; i <= initialState.level ** 2; i++) {
    initialState.panels.push({ num: "", isPressed: true });
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Game />
    </Context.Provider>
  );
}

export default App;
