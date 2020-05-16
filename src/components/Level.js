import React, { useContext } from "react";
import Context from "../contexts/Context";
import { CHANGE_LEVEL } from "../actions";

function Level({ level }) {
  const { dispatch } = useContext(Context);

  const changeLevel = () => {
    dispatch({ type: CHANGE_LEVEL, level: level });
  };

  return (
    <>
      <div onClick={changeLevel}>{level}</div>
    </>
  );
}

export default Level;
