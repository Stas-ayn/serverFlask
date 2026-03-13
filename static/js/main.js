const f1_button = document.querySelector("#f1 .close-button");
const f1 = document.querySelector("#f1");
if (f1_button && f1) {
  f1_button.addEventListener("click", () => {
    f1.classList.add("hidden");
  });
}

const f2_button = document.querySelector("#f2 .close-button");
const f2 = document.querySelector("#f2");
if (f2_button && f2) {
  f2_button.addEventListener("click", () => {
    f2.classList.add("hidden");
  });
}

let f3_button = document.querySelector("#f3 .close-button");
let f3 = document.querySelector("#f3");
if (f3_button && f3){
  f3_button.addEventListener("click", () => {
    f3.classList.add("hidden");
  });
}

const f4_button = document.querySelector("#f4 .close-button");
const f4 = document.querySelector("#f4");
if (f4_button && f4){
  f4_button.addEventListener("click", () => {
    f4.classList.add("hidden");
  });
}

const plusButton = document.querySelector(".plus-button");
const addColumnPopup = document.querySelector("#addPopup");
const closePopupButton = addColumnPopup.querySelector(".close-button");

plusButton.addEventListener("click", () => {
  addColumnPopup.classList.remove("hidden");
  addColumnPopup.classList.add("addColumnPopupBackground");
});

closePopupButton.addEventListener("click", () => {
  addColumnPopup.classList.add("hidden");
  addColumnPopup.classList.remove("addColumnPopupBackground");
});


const delButtons = document.querySelectorAll(".close-button");
delButtons.forEach(but => {
  but.addEventListener("click", () => {
    const col = but.closest(".col");
    const id = col.dataset.id;
    fetch(`/delete/${id}`, {method: "GET"})
    .then(response => {
      console.log(response.status)
      window.location.reload();
    });
  });
});
