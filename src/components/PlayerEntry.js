import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import { Button, Modal, ModalHeader, } from "reactstrap"
import { PlayerDetails } from "./PlayerDetails"


export const PlayerEntry = () => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
return (
    <>
    <div className="addPlayerCard">
        <div><span>&#43;</span></div>
        <Button
            color="success"
            onClick={() => toggle()}>
                Add New Player
            </Button>
            <Modal
            isOpen={modal}>
                <ModalHeader
                charcode="Y"
                toggle={() => toggle()}>
                    Player Details
                </ModalHeader>
                    <PlayerDetails/>
            </Modal>
    </div>
    <br/>
    <div><Button color="success">Start Game</Button></div>
    </>
)
}