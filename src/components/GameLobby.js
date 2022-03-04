import React, { useContext, useEffect, useState } from "react"
import {GameContext} from "./GamesProvider"

export const GameLobby = () => {
    const {getGameByCode, game} = useContext(GameContext)
    const [ currentGame, setCurrentGame ] = useState({})

    useEffect(() => {
    setCurrentGame(game)    
    console.log(game)
    }, [game])

    getGameByCode(localStorage.getItem("Game Code"))

    return (
        <>
        {
            currentGame.players.map(p => {
                <div>{p.players}</div>
            }
            )
        }
        </>
    )
}