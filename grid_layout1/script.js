"use strict";

const increase = document.querySelector(".increase-col");
const decrease = document.querySelector(".decrease-col");
const gridContainer = document.querySelector(".grid-container");
const reset = document.querySelector(".reset");

let gridColumns = 2;

function setGridTemplateColumns(method = 1) {
  switch (method) {
    case 1:
      gridColumns += 1;
      break;
    case 2:
      gridColumns -= 1;
      break;
    case "reset":
      gridColumns = 2;
  }
  gridContainer.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
}

increase.addEventListener("click", (e) => {
  setGridTemplateColumns(1);
});

decrease.addEventListener("click", (e) => {
  if (gridColumns > 1) {
    setGridTemplateColumns(2);
  }
});

reset.addEventListener("click", (e) => {
  setGridTemplateColumns("reset");
});
