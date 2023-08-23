const Gameboard = (() => {
  const gameboard = [];

  for (let i = 0; i < 9; i++) {
    gameboard[i] = "";
  }

  // Create a button element for each element in the array
  const board = document.querySelector(".board");
  const displayBoard = () => {
    board.style.backgroundColor = "black";
    board.textContent = "";
    gameboard.forEach((item, index) => {
      const button = document.createElement("button");
      button.setAttribute("id", index);
      board.appendChild(button).textContent = item;
    });
  };

  return { displayBoard, gameboard };
})();

const Player = (name, marker) => {
  const locations = [];

  return { name, marker, locations };
};

// displayController module to control the flow of the game
const displayController = (() => {
  const board = document.querySelector(".board");
  const displayBoard = Gameboard.displayBoard;
  const gameboard = Gameboard.gameboard;
  let players = [],
    activePlayer;

  const getPlayers = () => {
    const playerOne = Player(document.getElementById("player-one").value, "✖️");
    const playerTwo = Player(document.getElementById("player-two").value, "⭕");
    players = [playerOne, playerTwo];
    activePlayer = players[0];
  };

  // const displayPlayers = () => {
  // const div = document.querySelector("div");
  // for (let item of players) {
  //   const playerName = document.createElement("div");
  //   div.appendChild(playerName).textContent = item.name;
  // }
  // };

  const displayActivePlayer = () => {
    const player = document.querySelector(".player");
    player.textContent = `${activePlayer.name}'s turn`;
    // const playerOne = document.querySelector(
    //   "body > div.players > div:nth-child(1)"
    // );
    // const playerTwo = document.querySelector(
    //   "body > div.players > div:nth-child(2)"
    // );
    // if (activePlayer === players[0]) {
    //   playerOne.style.fontWeight = "bold";
    //   playerTwo.style.fontWeight = "normal";
    // } else {
    //   playerOne.style.fontWeight = "normal";
    //   playerTwo.style.fontWeight = "bold";
    // }
  };

  const startButton = document.querySelector("button");
  startButton.addEventListener("click", () => {
    document.querySelector("form").style.display = "none";
    getPlayers();
    // displayPlayers();
    displayActivePlayer();
    displayBoard();
  });

  function playGame() {
    displayBoard();
    if (checkWin()) {
      gameOver();
    } else {
      switchPlayer();
      displayActivePlayer();
    }
    // checkWin() ? gameOver() : switchPlayer();
  }

  const switchPlayer = () =>
    (activePlayer = activePlayer === players[0] ? players[1] : players[0]);

  // Let players put their markers on the board
  board.addEventListener("click", e => {
    // If there is no winner, the clicked element is a button, and the space is empty, add marker
    if (
      !checkWin() &&
      e.target.localName === "button" &&
      e.target.textContent === ""
    ) {
      gameboard[e.target.id] = activePlayer.marker;
      // Add marker location to array to help with win conditions later
      activePlayer.locations.push(Number(e.target.id));
      playGame();
    }
  });

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWin = () => {
    for (let i = 0; i < winningCombos.length; i++) {
      // If every item in current element is in activePlayer.locations array, return the name of the winner
      if (
        winningCombos[i].every(item => activePlayer.locations.includes(item))
      ) {
        return `${activePlayer.name} is the winner!`;
      }
    }
    // If every space on the board is filled, it's a tie
    if (gameboard.every(item => item)) {
      return "It's a tie!";
    }
  };

  const gameOver = () => {
    const winner = document.querySelector(".winner");
    winner.textContent = checkWin();
    const button = document.createElement("button");
    button.setAttribute("class", "replay");
    winner.appendChild(button).textContent = "Replay?";
    button.addEventListener("click", () => location.reload());
  };
})();
