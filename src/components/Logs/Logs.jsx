function Logs({turns}) {
    return (
        <ol id="log">
            {turns.map(turn => {
                return (
                    <li key={`${turn.square.row}${turn.square.col}`}>
                        <span> {turn.player} selected ({turn.square.row},{turn.square.col}) </span>
                    </li>
                )
            })}
        </ol>
    )

}

export default Logs