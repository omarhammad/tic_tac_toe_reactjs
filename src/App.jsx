import './App.css'
import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import {useState} from "react";
import Logs from "./components/Logs/Logs.jsx";

function App() {

    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectedSquare(event, rowIndex, colIndex) {
        event.target.disabled = true

        setActivePlayer(activePlayer === 'X' ? 'O' : 'X');

        setGameTurns(prevTurns => {
            let currentPlayer = 'X'

            if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
                currentPlayer = 'O'
            }
            return [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns]
        })
    }

    return <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player initialName={"Player 1"} symbol={"X"} isActive={activePlayer === 'X'}/>
                <Player initialName={"Player 2"} symbol={"O"} isActive={activePlayer === 'O'}/>
            </ol>
            <GameBoard onSelectSquare={handleSelectedSquare} turns={gameTurns}/>

        </div>
        <Logs turns={gameTurns}/>
    </main>;
}

export default App
