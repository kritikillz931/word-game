import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "reactstrap";
import { Button, ModalBody, ModalFooter } from "reactstrap";
import { GameContext } from "./GamesProvider.js";



export const GameCode = () => {
    const { getGameByCode, game, updateGame } = useContext(GameContext)
    const [modal, setModal] = useState(false)
    const [gameCode, setGameCode] = useState(0)
    const [allPlayers, setAllPlayers] = useState([])
    const [updatedGame, setUpdatedGame] = useState({})
    const [gamePlayer, setGamePlayer] = useState("")
    const toggle = () => setModal(!modal)
    let navigate = useNavigate()



    useEffect(() => {
        if (game?.host) {
            setAllPlayers(game.players)
            setUpdatedGame(game)
        }
    }, [game])



    const handleGameCodeInput = (event) => {
        setGameCode(event.target.value)
        console.log(event.target.value)
    }

    const handlePlayerInput = (event) => {
        setGamePlayer(event.target.value)
    }



    const joinGameOnClick = () => {
        getGameByCode(gameCode)
        if(game.players) {
            setAllPlayers(game.players)
        }


        if (game) {
            allPlayers.push(gamePlayer)
            setUpdatedGame(game)
            updatedGame.players = allPlayers
            console.log(game)
            updateGame(updatedGame)
            navigate(`/GameLobby/${gameCode}`)
        } else {
            console.log("no host?")
        }
    }
    

    return (
        <>
            <ModalBody>
                <div>Enter Code: <Input name="gameCode" type="text" placeholder="Game Code" onChange={handleGameCodeInput}></Input></div>
                <div>Player Name: <Input name="playerName" type="text" placeholder="Player Name" onChange={handlePlayerInput}></Input></div>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="success"
                    onClick={() => joinGameOnClick()}
                >
                    Join Game
                </Button>
            </ModalFooter>
        </>
    )
}