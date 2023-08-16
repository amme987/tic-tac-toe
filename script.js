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
  };

  displayBoard();

  return { board, displayBoard, gameboard };
})();

const Player = (name, marker) => {
  const locations = [];

  return { name, marker, locations };
};

// displayController module to control the flow of the game
const displayController = (() => {
  const board = Gameboard.board;
  const displayBoard = Gameboard.displayBoard;
  const gameboard = Gameboard.gameboard;
  const playerOne = Player("emms", "X");
  const playerTwo = Player("bwaids", "O");
  const players = [playerOne, playerTwo];
  let activePlayer = players[0];
  // let filter = [];
  let filter = [];

  const switchPlayer = () =>
    (activePlayer = activePlayer === players[0] ? players[1] : players[0]);

  // Let players put their markers on the board
  board.addEventListener("click", e => {
    if (e.target.localName === "button" && e.target.textContent === "") {
      gameboard[e.target.id] = activePlayer.marker;
      // Add marker location to array to help with win conditions later
      activePlayer.locations.push(Number(e.target.id));
      displayBoard();
      switchPlayer();
    }
  });

  const winningCombos = [0, 1, 2];

  const checkWin = () => {};
  // return { players };
})();
