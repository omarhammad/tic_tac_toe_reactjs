import {useState} from "react";

function Player({initialName = "", symbol, onPlayerNameChanged, isActive}) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((editing) => !editing)
        if (isEditing) {
            onPlayerNameChanged(symbol, playerName)
        }
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ?
                    (<input
                        type="text"
                        className="player-name"
                        value={playerName}
                        onChange={handleNameChange}/>)
                    :
                    (<span className="player-name">{playerName}</span>)
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}
export default Player;