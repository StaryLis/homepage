console.log("Cześć szanowni Developerzy");

let nav__themButton = document.querySelector(".nav__themButton");
let body = document.querySelector(".body");
let nav__themName = document.querySelector(".nav__themName");
let tableCell = document.querySelector(".table__cell");

nav__themButton.addEventListener("click", () => {
  body.classList.toggle("body--dark");
  tableCell.classList.toggle("dark");
  nav__themName.innerText = body.classList.contains("dark")
    ? "jasne"
    : "ciemne";
});
