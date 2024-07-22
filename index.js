document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const colorBtnElement = document.getElementById("change-color-btn");

  colorBtnElement.addEventListener("click", () => {
    colorBox.style.backgroundColor = getRandomColor();
  });
});

function getRandomColor() {
  // Generate a random hexadecimal color
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return color;
}
