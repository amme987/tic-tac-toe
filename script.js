// Gameboard module
const Gameboard = (() => {
  const gameboard = [];
  const rows = 3;
  const columns = 3;

  // Gameboard array
  //   for (let i = 0; i < rows; i++) {
  //     gameboard[i] = [];
  //     for (let j = 0; j < columns; j++) {
  //       gameboard[i][j] = [];
  //       //   (i + j) % 2 === 0 ? (gameboard[i][j] = "X") : (gameboard[i][j] = "O");
  //     }
  //   }
  for (let i = 0; i < 9; i++) {
    gameboard[i] = "";
  }

  // Create a button element for each element in the array
  const board = document.querySelector(".board");
  const displayBoard = () => {
    board.textContent = "";
    gameboard.forEach((item, index) => {
      // row.forEach(item => {
      const button = document.createElement("button");
      button.setAttribute("id", index);
      board.appendChild(button).textContent = item;
      // });
    });
    // return board;
  };

  displayBoard();

  // Let players put their markers on the board
  board.addEventListener("click", e => {
    if (e.target.localName === "button") {
      if (e.target.textContent === "") {
        gameboard[e.target.id] = "X";
        displayBoard();
      } else {
        gameboard[e.target.id] = "O";
        displayBoard();
      }
    }
  });

  return { gameboard, displayBoard };
})();

// console.log(Gameboard);

// Player factory
const Player = () => {};

// displayController module
const displayController = (() => {})();
