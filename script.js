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
            let cellNumber = cell.getAttribute('value');
            boardSquare.push(parseInt(cellNumber));
        });
        };
    _queryBoard();
        return {boardSquare};
    })();

const modalForm = document.querySelector('#modal');
const submitPlayers = document.querySelector(".start-game");

submitPlayers.addEventListener('click', (e)=> {
    e.preventDefault();
    modalForm.close();
    playerOne = createPlayer('#player-one');
    playerTwo = createPlayer('#player-two');
});



modalForm.showModal();




