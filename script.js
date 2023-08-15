// Gameboard module
const Gameboard = (() => {
  const gameboard = [];
  const rows = 3;
  const columns = 3;

  // Gameboard array
  for (let i = 0; i < rows; i++) {
    gameboard[i] = [];
    for (let j = 0; j < columns; j++) {
      gameboard[i][j] = [];
      (i + j) % 2 === 0 ? (gameboard[i][j] = "X") : (gameboard[i][j] = "O");
    }
  }

  // Create a button element for each element in the array
  const board = document.querySelector(".board");
  const test = gameboard.forEach(row => {
    row.forEach(item => {
      const button = document.createElement("button");
      button.textContent = item;
      board.appendChild(button);
    });
  });

  return { gameboard, test };
})();

console.log(Gameboard);

// Player factory
const Player = () => {};

// displayController module
const displayController = (() => {})();
