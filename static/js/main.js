const f1_button = document.querySelector("#f1 .close-button");
const f1 = document.querySelector("#f1");
if(f1_button && f1){
  f1_button.addEventListener("click", () => {
    f1.classList.add("hidden");
  });
}

const f2_button = document.querySelector("#f2 .close-button");
const f2 = document.querySelector("#f2");
if (f2_button && f2){
  f2_button.addEventListener("click", () => {
    f2.classList.add("hidden");
  });
}

const f3_button = document.querySelector("#f3 .close-button");
const f3 = document.querySelector("#f3");
f3_button.addEventListener("click", () => {
  f3.classList.add("hidden");
});

const f4_button = document.querySelector("#f4 .close-button");
const f4 = document.querySelector("#f4");
f4_button.addEventListener("click", () => {
  f4.classList.add("hidden");
});

let pop = document.querySelector("#addPopup");
let plus_button = document.querySelector(".plus-button");

const closeAddColumnPopupButton = document.querySelector(
  ".addColumnPopup .close-button",
);
closeAddColumnPopupButton.addEventListener("click", closeAddColumnPopup);

plus_button.addEventListener("click", openAddColumnPopup);

function openAddColumnPopup() {
  let column = addColumn();
  if (column) {
    pop.classList.add("addColumnPopupBackground");
  }
}
let lastColumn;
function closeAddColumnPopup() {
  pop.classList.remove("addColumnPopupBackground");
  lastColumn.classList.add("hidden");
}
function addColumn() {
  let cols = document.querySelectorAll(".col ");
  let flag1 = true;
  for (let k of cols) {
    if (k.classList.contains("hidden")) {
      flag1 = false;
      k.classList.remove("hidden");
      lastColumn = k;
      return k;
    }
  }
  if (flag1) {
    alert("Максимальное количество столбцов: 4");
    return 0;
  }
}
