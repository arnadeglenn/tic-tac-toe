let playerOne;
let playerTwo;

const createPlayer = function (selector) {
    let playerSelector = selector;
    const name = function() {
        const playerInput = document.querySelector(playerSelector);
        const playerName = playerInput.value;
        return playerName;
    }
    const marker = function () {
        if (playerSelector=== "#player-one") {
            return "X";
        } else {
            return "O";
       };
    }
    return {playerSelector, name, marker};
};

const gameBoard = (function() {
    const boardSquare = [];
    const _queryBoard = function() {
        const gameCells = document.querySelectorAll('.game-cell');
        gameCells.forEach((cell) => {
            let marker = cell.innerHTML;
            boardSquare.push(marker);
        });
        };
    _queryBoard();
        return {boardSquare};
    })
(); 

const displayController = (function() {
    const markerSelect = document.querySelectorAll('.game-cell');
    let playerTurn = true;                          //true = playerOne, false = playerTwo
    const placeMarker = function() {
        markerSelect.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            if (cell.innerHTML === "X" || cell.innerHTML === "O") {
                return;
            } else if (playerTurn=== true) {
                cell.innerHTML = playerOne.marker();
                playerTurn = false;
            } else if (playerTurn === false) {
                cell.innerHTML = playerTwo.marker();
                playerTurn = true;
            }
        });
        })
    }
    return {placeMarker};
})();

displayController.placeMarker();

//gameBoard.boardSquare

const modalForm = document.querySelector('#modal');
const submitPlayers = document.querySelector(".start-game");

submitPlayers.addEventListener('click', (e)=> {
    e.preventDefault();
    modalForm.close();
    playerOne = createPlayer('#player-one');
    playerTwo = createPlayer('#player-two');
});



modalForm.showModal();





