const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function GameBoard() {
    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => {
                return <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => {
                            return <li key={colIndex}>
                                <button>{playerSymbol}</button>
                            </li>
                        })}
                    </ol>
                </li>;
            })}
        </ol>
    )
}

export default GameBoard;