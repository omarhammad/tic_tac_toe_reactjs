import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function GameBoard() {

    const [gameBoard, setGameBoard] = useState(initialGameBoard)
    const [playerSymbol, setPlayerSymbol] = useState('X')

    function handleSelectSquare(event, rowIndex, colIndex) {
        setGameBoard(prevGameBoard => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = playerSymbol
            return updatedBoard
        })

        setPlayerSymbol(playerSymbol === 'X' ? 'O' : 'X')
        event.target.disabled = true;

    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => {
                            return <li key={colIndex}>
                                <button onClick={(event) => {
                                    handleSelectSquare(event,rowIndex, colIndex)
                                }}>{playerSymbol} </button>
                            </li>
                        })}
                    </ol>
                </li>;
            })}
        </ol>
    )
}

export default GameBoard;