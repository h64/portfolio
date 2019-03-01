const BODY = document.querySelector("div");
const FUN_MSG = "hello world ~";
const DELAY = 350;

document.addEventListener("DOMContentLoaded", function() {
  let msgArr = FUN_MSG.split("");
  let cur = 0;
  let length = msgArr.length;

  let interval = window.setInterval(() => {
    BODY.textContent += msgArr[cur++];
    if (cur === length) {
      window.clearInterval(interval);
    }
  }, DELAY);
});
