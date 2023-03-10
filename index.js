const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  container.replaceChildren();
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
  const newColor = document.querySelectorAll(".grid-item");
  for (const color of newColor) {
    color.addEventListener("mouseover", () => {
        color.style.backgroundColor = "green";
    });
}
};

makeRows(16, 16);

const resetButton = document.getElementById("reset");
resetButton.addEventListener('click', () =>{
    inputRows();
})

function inputRows() {
    let num = prompt('Input number for new grid:');
    if (num > 100) {
        alert('100 is the max number allowed!');
        return
    } else if (num <= 0) {
        alert('Please enter a valid number.');
        return
    } else if (num <= 100 || num > 0) {
        makeRows(num,num);
    } else {
        alert('Please enter a valid number.');
    }
}
