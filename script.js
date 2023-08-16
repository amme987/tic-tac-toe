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

// console.log(Gameboard);

// Player factory
const Player = (name, marker) => {
  // const playerOne = () => {
  //   const name = "emms";
  //   const marker = "X";
  // };
  // const playerTwo = () => {
  //   const name = "bwaids";
  //   const marker = "O";
  // };

  // const players = [playerOne, playerTwo];
  // let activePlayer = players[0];

  // const playerTurn = () => {
  //   console.log(activePlayer);
  //   if (activePlayer === playerOne) {
  //     console.log("emmstest");
  //     activePlayer = playerTwo;
  //   } else {
  //     activePlayer = playerOne;
  //   }
  //   return activePlayer;
  // };

  return { name, marker };
};

// console.log(Player().playerTurn());
// console.log(Player().playerTurn());

// displayController module to control the flow of the game
const displayController = (() => {
  const board = Gameboard.board;
  const displayBoard = Gameboard.displayBoard;
  const gameboard = Gameboard.gameboard;
  const players = [Player("emms", "X"), Player("bwaids", "O")];
  let activePlayer = players[0];

  const switchPlayer = () =>
    (activePlayer = activePlayer === players[0] ? players[1] : players[0]);
  // console.log(playerTurn());

  // Let players put their markers on the board
  board.addEventListener("click", e => {
    // console.log(activePlayer);

    if (e.target.localName === "button" && e.target.textContent === "") {
      gameboard[e.target.id] = activePlayer.marker;
      switchPlayer();
      displayBoard();
    }
  });

  // playGame;

  // return { players };
})();
