import {useState} from "react";

function Player({name = "", symbol}) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEditClick(isEditing) {
        setIsEditing(!isEditing)
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
        event.target.value = ""
    }

    return (
        <li>
            <span className="player">
                {!isEditing ?
                    (<input
                        type="text"
                        className="player-name"
                        value={playerName}
                        onChange={handleNameChange}
                    />) :
                    (<span className="player-name">{playerName}</span>)
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleEditClick(isEditing)}>{isEditing ? 'Edit' : 'Save'}</button>
        </li>
    )
}

export default Player;