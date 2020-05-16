/**
 * タイマークラス
 */
class Timer {
  constructor() {
    this.startTime = undefined;
    this.timeoutId = undefined;
    this.currentTime = 0;
  }

  start() {
    if (typeof this.timeoutId !== "undefined") {
      clearInterval(this.timeoutId);
    }

    this.startTime = new Date();
    this.runTimer();
  }

  runTimer() {
    this.currentTime = (Date.now() - this.startTime) / 1000;
    const timer = document.getElementById("timer");
    timer.textContent = ((Date.now() - this.startTime) / 1000).toFixed(2);

    this.timeoutId = setTimeout(() => {
      this.runTimer();
    }, 10);
  }

  stop() {
    clearInterval(this.timeoutId);
  }

  reset() {
    this.startTime = undefined;
    this.timeoutId = undefined;
    this.currentTime = 0;
    const timer = document.getElementById("timer");
    timer.textContent = "0.00";
  }
}

export default Timer;
