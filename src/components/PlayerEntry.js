import React from "react"
import { useNavigate } from "react-router-dom"


export const PlayerEntry = () => {
    let navigate = useNavigate()
    const handleClickNewPlayer = () => {
        navigate('/PlayerEntry')
    }
    const handleClickGameSession = () => {
        navigate('/GameSession')
    }
    return (
        <>
            <div className="newPlayerCard">
                <div><button onClick={handleClickNewPlayer}>Add New Player</button></div>
            </div>
            <div className="confirmedPlayerNames"></div>
            <div className="startGameButton"><button onClick={handleClickGameSession}>Start Game</button></div>
        </>
    )
}