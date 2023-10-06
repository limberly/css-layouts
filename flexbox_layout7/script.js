"use strict";

const text = document.querySelector(".text");
const time = document.querySelector(".time");
const button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
  time.classList.toggle("shrink");
  if (button.textContent === "flex-shrink: 0") {
    button.textContent = "flex-shrink: 1";
  } else {
    button.textContent = "flex-shrink: 0";
  }
});
