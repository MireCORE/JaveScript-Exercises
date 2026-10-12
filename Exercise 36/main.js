const colorPicker = document.querySelector("#colorPicker");
const colorPreview = document.querySelector("#colorPreview");
const colorHistory = document.querySelector("#colorHistory");
const clearHistoryButton = document.querySelector("#clearHistoryButton");

colorPicker.addEventListener("input", function () {
  const selectedColor = colorPicker.value;
  colorPreview.style.backgroundColor = selectedColor;
  addHistory(selectedColor);
});

function addHistory(color) {
  const newColor = document.createElement("li");
  newColor.textContent = color;
  newColor.style.color = color;
  colorHistory.appendChild(newColor);
}

clearHistoryButton.addEventListener("click", function () {
  colorHistory.innerHTML = "";
});
