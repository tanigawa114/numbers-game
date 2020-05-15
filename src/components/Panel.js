import React, { useContext } from "react";
import Context from "../contexts/Context";
import { CLICK_NUMBER } from "../actions";

function Panel({ panel }) {
  const { state, dispatch } = useContext(Context);

  const handle = () => {
    const prePanel = state.panels.filter(
      (_panel) => _panel.num === panel.num - 1
    )[0];

    if (panel.num === 1 || prePanel.isPressed) {
      dispatch({ type: CLICK_NUMBER, num: panel.num });
    }
  };

  return (
    <li className={panel.isPressed ? "pressed" : ""} onClick={handle}>
      {panel.num}
    </li>
  );
}

export default Panel;
