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


const displayController = (function() {
    const markerSelect = document.querySelectorAll('.game-cell');
    let playerTurn = true;                          //true = playerOne, false = playerTwo
    let arr = gameBoard.boardSquare;
    let winner = '';
    const placeMarker = function() {
        markerSelect.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            if (cell.innerHTML === "X" || cell.innerHTML === "O") {
                return;
            } else if (playerTurn=== true) {
                cell.innerHTML = playerOne.marker();
                let squareValue = cell.getAttribute('value');
                gameBoard.boardSquare[`${squareValue}`] = cell.innerHTML;
                winnerCheck();
                playerTurn = false;
            } else if (playerTurn === false) {
                cell.innerHTML = playerTwo.marker();
                let squareValue = cell.getAttribute('value');
                gameBoard.boardSquare[`${squareValue}`] = cell.innerHTML;
                winnerCheck();
                playerTurn = true;
            }
        });
        })
    }
    const winnerCheck = function() {
        if (
            (arr[0]==="X" && arr[1]==="X" && arr[2]==="X")||
            (arr[3]==="X" && arr[4]==="X" && arr[5]==="X")||
            (arr[6]==="X" && arr[7]==="X" && arr[8]==="X")||
            (arr[0]==="X" && arr[3]==="X" && arr[6]==="X")||
            (arr[1]==="X" && arr[4]==="X" && arr[7]==="X")||
            (arr[2]==="X" && arr[5]==="X" && arr[8]==="X")||
            (arr[0]==="X" && arr[4]==="X" && arr[8]==="X")||
            (arr[2]==="X" && arr[4]==="X" && arr[6]==="X")
        ) {
            console.log('playerOneWins');
            winner = playerOne.name();
            return winner;
        } else if (
                (arr[0]==="O" && arr[1]==="O" && arr[2]==="O")||
                (arr[3]==="O" && arr[4]==="O" && arr[5]==="O")||
                (arr[6]==="O" && arr[7]==="O" && arr[8]==="O")||
                (arr[0]==="O" && arr[3]==="O" && arr[6]==="O")||
                (arr[1]==="O" && arr[4]==="O" && arr[7]==="O")||
                (arr[2]==="O" && arr[5]==="O" && arr[8]==="O")||
                (arr[0]==="O" && arr[4]==="O" && arr[8]==="O")||
                (arr[2]==="O" && arr[4]==="O" && arr[6]==="O")
            ) {
                winner = playerTwo.name();
                return winner;
        } else {
            console.log('Random');
            winnerName = '';
            }   
        };
    return {placeMarker, winnerCheck, winner};
})();


//Function Calls
displayController.placeMarker();
gameBoard.queryBoard();

const modalForm = document.querySelector('#modal');
const submitPlayers = document.querySelector(".start-game");

submitPlayers.addEventListener('click', (e)=> {
    e.preventDefault();
    modalForm.close();
    playerOne = createPlayer('#player-one');
    playerTwo = createPlayer('#player-two');
});



modalForm.showModal();





