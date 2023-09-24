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
    const queryBoard = function() {
        const gameCells = document.querySelectorAll('.game-cell');
        gameCells.forEach((cell) => {
            let marker = cell.innerHTML;
            boardSquare.push(marker);
        });
        };
        return {boardSquare, queryBoard};
    })
(); 

gameBoard.queryBoard();


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
                let squareValue = cell.getAttribute('value');
                gameBoard.boardSquare[`${squareValue}`] = cell.innerHTML;
                playerTurn = false;
            } else if (playerTurn === false) {
                cell.innerHTML = playerTwo.marker();
                let squareValue = cell.getAttribute('value');
                gameBoard.boardSquare[`${squareValue}`] = cell.innerHTML;
                playerTurn = true;
            }
        });
        })
    }
    return {placeMarker};
})();

displayController.placeMarker();

const modalForm = document.querySelector('#modal');
const submitPlayers = document.querySelector(".start-game");

submitPlayers.addEventListener('click', (e)=> {
    e.preventDefault();
    modalForm.close();
    playerOne = createPlayer('#player-one');
    playerTwo = createPlayer('#player-two');
});



modalForm.showModal();





