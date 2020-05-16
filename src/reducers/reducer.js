import { START, CLICK_NUMBER, CHANGE_LEVEL } from "../actions";

const reducer = (state = {}, action) => {
  switch (action.type) {
    /**
     * スタート
     */
    case START:
      state.time.start();

      const nums = [];
      for (let i = 1; i <= (state.level + 1) ** 2; i++) {
        nums.push(i);
      }

      const newPanels = state.panels.map((panel) => {
        panel.num = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
        panel.isPressed = false;
        return panel;
      });

      return {
        time: state.time,
        level: state.level,
        panels: newPanels,
        width: state.width,
        levels: state.levels,
      };

    /**
     * 数値クリック
     */
    case CLICK_NUMBER:
      const tartgetPanel = state.panels.filter(
        (panel) => panel.num === action.num
      )[0];

      tartgetPanel.isPressed = true;

      if (action.num === state.panels.length) {
        state.time.stop();
      }

      return {
        time: state.time,
        level: state.level,
        panels: state.panels,
        width: state.width,
        levels: state.levels,
      };

    /**
     * レベル変更
     */
    case CHANGE_LEVEL:
      const side = action.level + 1;
      state.panels = [];
      for (let i = 1; i <= side ** 2; i++) {
        state.panels.push({ num: "", isPressed: true });
      }

      const PANEL_WIDTH = 50;
      const BOARD_PADDING = 10;
      /* 50px * 2 + 10px * 2 */
      state.width = PANEL_WIDTH * side + BOARD_PADDING * 2 + "px";

      state.time.stop();
      state.time.reset();

      return {
        time: state.time,
        level: action.level,
        panels: state.panels,
        width: state.width,
        levels: state.levels,
      };

    default:
      return state;
  }
};

export default reducer;
