import './App.css'
import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import {useState} from "react";
import Logs from "./components/Logs/Logs.jsx";
import {WINNING_COMBINATIONS} from "./data/winning_combos.js";
import GameOver from "./components/GameOver/GameOver.jsx";

function App() {

    const [gameTurns, setGameTurns] = useState([]);

    const gameBoard = getGameBoard(gameTurns)

    const winner = checkWinner(gameBoard);

    const hasDraw = gameTurns.length === 9


    function handleSelectedSquare(rowIndex, colIndex) {
        const activePlayer = getActivePlayer(gameTurns);
        setGameTurns(prevTurns => {
            return [{square: {row: rowIndex, col: colIndex}, player: activePlayer}, ...prevTurns]
        })
    }

    function handleRematch() {
        setGameTurns([])
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName={"Player 1"} symbol={"X"} isActive={getActivePlayer(gameTurns) === 'X'}/>
                    <Player initialName={"Player 2"} symbol={"O"} isActive={getActivePlayer(gameTurns) === 'O'}/>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch}/>}
                <GameBoard onSelectSquare={handleSelectedSquare} board={gameBoard}/>

            </div>
            <Logs turns={gameTurns}/>
        </main>
    );
}


function getActivePlayer(gameTurns) {
    let activePlayer = 'X'

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        activePlayer = 'O'
    }

    return activePlayer;
}

function getGameBoard(gameTurns) {
    const gameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square
        gameBoard[row][col] = player
    }

    return gameBoard
}

function checkWinner(gameBoard) {

    for (const comb of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[comb[0].row][comb[0].column]
        const secondSquareSymbol = gameBoard[comb[1].row][comb[1].column]
        const thirdSquareSymbol = gameBoard[comb[2].row][comb[2].column]

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            return firstSquareSymbol
        }
    }
    return undefined
}

export default App
