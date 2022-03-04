import React, {useState, createContext} from "react";

export const GameContext = createContext()

export const GameProvider = (props) => {
    const [game, setGame] = useState({})
    const addGame = game => {
        return fetch(`http://localhost:8088/games`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(game)
            
        })
        .then(response => response.json())
    }

    const getGameByCode = gameCode => {
        return fetch(`http://localhost:8088/games?gameCode=${gameCode}`)
        .then(res => res.json())
        .then(r => setGame(r[0]))
    }

    const updateGame = (game) => {
        return fetch(`http://localhost:8088/games/${game.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(game)
        })
        .then(r => setGame(r))
    }

    return (
        <GameContext.Provider
        value={{
            addGame,
            getGameByCode,
            game, 
            updateGame
        }}>
            {props.children}
        </GameContext.Provider>
    )
}