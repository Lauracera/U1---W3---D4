// const createDiv = () => {
//   const table = document.getElementById("tabellone");

//   for (let i = 0; i < 90; i++) {
//     const cell = document.createElement("div");
//     cell.classList.add("cell");
//     table.appendChild(cell);

//     const numberTable = document.createElement("h3");
//     numberTable.innerText = i;
//     cell.appendChild(h3);
//   }
// };

// createDiv();

const newTable = () => {
  const tabellone = document.getElementById("tabellone");
  for (let i = 1; i < 76; i++) {
    const cell = document.createElement("div");
    cell.textContent = i;
    cell.classList.add("cell");
    tabellone.appendChild(cell);
  }
  clearInterval.textContent = i;
};

newTable();
