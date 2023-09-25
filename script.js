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
    const winnerModalShow = document.querySelector('.modal-win');
    const resetBtn = document.querySelector('.restart-btn');
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
                newGameModal();
                newGame();
                playerTurn = false;
            } else if (playerTurn === false) {
                cell.innerHTML = playerTwo.marker();
                let squareValue = cell.getAttribute('value');
                gameBoard.boardSquare[`${squareValue}`] = cell.innerHTML;
                winnerCheck();
                newGameModal();
                newGame();
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
            winnerModal(playerOne.name());
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
                winnerModal(playerTwo.name());
                playerTurn=true;
        } else {
            console.log('Random');
            winner = '';
            }   
        };
    const getWinner = function() {
         return winner;
     }
    const winnerModal = function(winner) {
        
        const winnerName = document.querySelector(".winning-player");
        winnerName.innerHTML = `${winner} Wins!`
        winnerModalShow.showModal();
    }
    const newGameModal = function() {
        const playAgainBtn = document.querySelector(".new-game");
        playAgainBtn.addEventListener('click', (e) => {
            e.preventDefault();
            winnerModalShow.close();
            gameBoard.boardSquare = ['','','','','','','','','',];
            arr = gameBoard.boardSquare;
            gameBoard.queryBoard();
            markerSelect.forEach((cell) => {
                cell.innerHTML = '';
            })
            resetPlayerOne();
        })
    }
    const newGame = function() {
        if (arr.every(element => element === 'X' || element === 'O')) {
            gameBoard.boardSquare = ['','','','','','','','','',];
            arr = gameBoard.boardSquare;
            gameBoard.queryBoard();
            markerSelect.forEach((cell) => {
                cell.innerHTML = '';
            })
            resetPlayerOne();
    } else {return}
    }
    const resetGame = function() {
        resetBtn.addEventListener('click', (e) => {
            gameBoard.boardSquare = ['','','','','','','','','',];
            arr = gameBoard.boardSquare;
            gameBoard.queryBoard();
            markerSelect.forEach((cell) => {
                cell.innerHTML = '';
            })
            resetPlayerOne();
            console.log("hello");
        })
    }
    const resetPlayerOne = () => {
        playerTurn = true;
        return playerTurn;
    }
    return {placeMarker, winnerCheck, getWinner, resetGame};
})();


//Function Calls
displayController.placeMarker();
gameBoard.queryBoard();
displayController.resetGame();

const modalForm = document.querySelector('#modal');
const submitPlayers = document.querySelector(".start-game");



modalForm.showModal();

submitPlayers.addEventListener('click', (e)=> {
    e.preventDefault();
    modalForm.close();
    playerOne = createPlayer('#player-one');
    playerTwo = createPlayer('#player-two');
});





