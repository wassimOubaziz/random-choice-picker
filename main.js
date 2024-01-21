const text = document.querySelector("textarea");
const boxes = document.querySelector(".boxes");
let n = 0;
text.focus();

text.addEventListener("keyup", function (e) {
  createBoxes(text.value);
  n = text.value.split(",").length;
  if (e.key === "Enter") {
    setTimeout(() => {
      text.value = "";
    }, 10);
    randomSelect();
  }
});

function createBoxes(value) {
  const ht = value
    .split(",")
    .map((ele) => `<div class="box">${ele}</div>`)
    .join(" ");
  boxes.innerHTML = ht;
}

function random() {
  return Math.floor(Math.random() * n);
}

function randomSelect() {
  let times = 30;
  const interval = setInterval(() => {
    const randomTag = getElement();
    style(randomTag);
    setTimeout(() => {
      unStyle(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTage = getElement();
      style(randomTage);
    }, 100);
  }, times * 100);
}

function getElement() {
  const boxs = boxes.querySelectorAll(".box");
  return boxs[random()];
}

function style(el) {
  el.classList.add("active");
}

function unStyle(el) {
  el.classList.remove("active");
}
