import React, { useState } from "react";
import { useNavigate } from "react-router"
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { GameCode } from "./GameCode";
import { GameDetails } from "./GameDetails";
import { GameProvider } from "./GamesProvider";



export const WelcomePage = () => {
    const [modal, setModal] = useState(false)
    const [modalHost, setModalHost] = useState(false)
    const toggleHost = () => setModalHost(!modalHost)
    const toggle = () => setModal(!modal)
    
    return (
        <>
            <div className="welcomeCard">
                <div className="welcomeGreeting"> Welcome To Game Name</div>
            </div>
            <div>
            <Button
            color="success"
            onClick={() => toggleHost()}>
                Host New Game
            </Button>
            <br/>
            <br/>
            <Button
                color="success"
                onClick={() => toggle()}>
                    Join Game
            </Button>
            <Modal
            isOpen={modalHost}>
                <ModalHeader
                charcode="Y"
                toggleHost={() => toggleHost()}>
                    Game Details
                </ModalHeader>
                <GameProvider>
                    <GameDetails/>
                </GameProvider>
            </Modal>
            <Modal
            isOpen={modal}>
                <ModalHeader
                charcode="Y"
                toggle={() => toggle()}>
                    Game Code
                </ModalHeader>
                <GameProvider>
                    <GameCode/>
                </GameProvider>
            </Modal>
        </div>
        </>
    )
}
