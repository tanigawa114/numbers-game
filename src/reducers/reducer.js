import { START, CLICK_NUMBER } from "../actions";

const reducer = (state = {}, action) => {
  switch (action.type) {
    /**
     * スタート
     */
    case START:
      // タイマーセット
      state.time.start();

      // 数値セット
      const nums = [];
      for (let i = 1; i <= state.level ** 2; i++) {
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
      };

    default:
      return state;
  }
};

export default reducer;
