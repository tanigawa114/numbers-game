import React, { useContext } from "react";
import Context from "../contexts/Context";
import Level from "./Level";

function LevelErea() {
  const { state } = useContext(Context);

  return (
    <>
      <div id="level-erea">
        level.
        <div id="level-box">
          {state.levels.map((levelItem, index) => {
            return <Level key={index} level={levelItem} />;
          })}
        </div>
      </div>
    </>
  );
}

export default LevelErea;
