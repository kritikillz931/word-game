import React, { useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Input} from "reactstrap";
import { Button, ModalBody, ModalFooter } from "reactstrap";
import { GameContext } from "./GamesProvider.js";



export const GameDetails = () => {
    const { addGame } = useContext(GameContext)
    const [modal, setModal] = useState(false)
    const [gameDetails, setGameDetails] = useState({})
    const toggle = () => setModal(!modal)
    let navigate = useNavigate()
    
    useEffect(() => {

    }, [])

    const handleControlledInput = (event) => {
        const newGame = { ...gameDetails }
        newGame[event.target.name] = event.target.value
        setGameDetails(newGame)
 
    }

    const createGameOnClick = () => {
        let gameCode = Math.floor(Math.random() * (99999 - 10000))
        console.log(gameCode)
        if (gameDetails.host && gameDetails.rounds) {
            gameDetails.gameCode = gameCode
            addGame(gameDetails)
            .then(r => localStorage.setItem("Game Code", r.gameCode))
            navigate(`/GameLobby/${gameCode}`)
        } else {
            console.log("no new game")
        }
    }

   
    return (
        <>
        <ModalBody>
            <div>Host Name: <Input name="host" type="text" placeholder="Host Name" onChange={handleControlledInput}></Input></div>
            <div>Rounds: <Input name="rounds" onChange={handleControlledInput} onKeyDown={true} min="1" max="5" type="number" placeholder="Number Of Rounds"></Input></div>
            </ModalBody>
                <ModalFooter>
                    <Button
                    color="success"
                    onClick={() => createGameOnClick()}
                    >
                        Create Game
                    </Button>
                </ModalFooter>
        </>
    )
}