const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

const newColor = document.querySelectorAll(".grid-item");

function createColor() {
    for (const color of newColor) {
        color.addEventListener("mouseover", () => {
            color.style.backgroundColor = "green";
        });
    }
}
createColor();

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
        clearGrid();
        makeRows(num,num);
        createColor();
    } else {
        alert('Please enter a valid number.');
    }
}

function clearGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}