import React, { useState } from "react";
import { useNavigate } from "react-router"
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { GameDetails } from "./GameDetails";



export const WelcomePage = () => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    
    return (
        <>
            <div className="welcomeCard">
                <div className="welcomeGreeting"> Welcome To Game Name</div>
            </div>
            <div>
            <Button
            color="success"
            onClick={() => toggle()}>
                Host New Game
            </Button>
            <Modal
            isOpen={modal}>
                <ModalHeader
                charcode="Y"
                toggle={() => toggle()}>
                    Game Details
                </ModalHeader>
                    <GameDetails/>
            </Modal>
        </div>
        </>
    )
}
