function addIterm() {
  const table = document.querySelector(".table");
  const newIterm = document.createElement("tr");
  newIterm.textContent = "newIterm";
  table.appendChild(newIterm);
}

function RemoveIterm() {
  const table = document.querySelector(".table");
  if (table.lastChild) {
    table.removeChild(table.lastChild);
  } else {
    prompt("you reach your limitation.");
  }
}
