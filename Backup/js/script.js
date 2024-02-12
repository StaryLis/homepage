console.log("Cześć szanowni Developerzy");

let themButton = document.querySelector(".themButton");
let body = document.querySelector(".body");
let themName = document.querySelector(".themName");
let tableCell = document.querySelector(".tableCell");
let nameElement = document.querySelector("js-name");

themButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  tableCell.classList.toggle("tableCell--dark");
  themName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
});
