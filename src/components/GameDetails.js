import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";



export const GameDetails = () => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    let navigate = useNavigate()
    const handleInput = () => {
        
    }

    const createGameOnClick = () => {
    navigate('/PlayerEntry')
    }
    return (
        <>
        <ModalBody>
            <div>Host Name: <Input type="text" placeholder="Host Name" onChange={handleInput()}></Input></div>
            <div>Rounds: <Input onKeyDown={true} min="1" max="5" type="number" placeholder="Number Of Rounds"></Input></div>
            <div>Round Duration:</div>
            <InputGroup>
            <InputGroupText>
            Minutes:
            </InputGroupText>
            <Input  onKeyPress={true} min="1" max="5"  type="number" placeholder="Maximum 5 minutes"/>
            </InputGroup>
            </ModalBody>
                <ModalFooter>
                    <Button
                    color="success"
                    onClick={createGameOnClick}>
                        Create Game
                    </Button>
                </ModalFooter>
        </>
    )
}