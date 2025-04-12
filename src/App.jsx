import './App.css'
import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import {useState} from "react";
import Logs from "./components/Logs/Logs.jsx";

function App() {

    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectedSquare(rowIndex, colIndex) {
        const activePlayer = getActivePlayer(gameTurns);
        setGameTurns(prevTurns => {
            return [{square: {row: rowIndex, col: colIndex}, player: activePlayer}, ...prevTurns]
        })
    }

    return <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player initialName={"Player 1"} symbol={"X"} isActive={getActivePlayer(gameTurns) === 'X'}/>
                <Player initialName={"Player 2"} symbol={"O"} isActive={getActivePlayer(gameTurns) === 'O'}/>
            </ol>
            <GameBoard onSelectSquare={handleSelectedSquare} turns={gameTurns}/>

        </div>
        <Logs turns={gameTurns}/>
    </main>;
}


function getActivePlayer(gameTurns) {
    let activePlayer = 'X'

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        activePlayer = 'O'
    }

    return activePlayer;
}

export default App
