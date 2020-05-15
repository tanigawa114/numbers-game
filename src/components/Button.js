import React, { useContext } from "react";
import Context from "../contexts/Context";
import { START } from "../actions";

function Button() {
  const { dispatch } = useContext(Context);

  return (
    <div id="btn" onClick={() => dispatch({ type: START })}>
      START
    </div>
  );
}

export default Button;
